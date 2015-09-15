'use strict';
/*
	SQL Challenges framework
	Version: 3.0 as of SQL2
	Implemented a database cleanup or creation
*/
var mysql = require('mysql'),
		fs = require('fs'),
		errorLogs = require('./fw-errorLogs.js'),
		globalCount = 0,
		expectedQueries = [],
		userQueries = [],
		tasks = [],
		dbName = '',
		globalDbName = '',
		tableName = '',
		connection;
let SQLkeywords = [
	'CREATE SCHEMA',
	'CREATE DATABASE',
	'CREATE DATABASE IF NOT EXISTS',
	'CREATE TABLE',
	'USE'
];

// var workspaceDirectory = '/home/codio/workspace/';
// var sqlDir = workspaceDirectory + '.guides/sqltests.js/';
var workspaceDirectory = '/Volumes/Seagate Backup Plus Drive/htdocs/MySQL/CodioSQL.Units/sql2/';
var sqlDir = workspaceDirectory + '.guides/sqltests.js/';

function readChallengeFile(srcFile, expectedQueries){
	var srcFile = workspaceDirectory + srcFile;
	return new Promise(function(resolve, reject){
		fs.readFile(srcFile, 'utf-8', function (err, data) {
		  if (err)
		  	errorLogs.readChallengeFile('srcFile', srcFile);		  
		  if (data.length) {
			  var queries = normalizeQueries(data);
			  // Number of expectedQueries equal number of user queries:
			  if (queries.length != expectedQueries.length) {
			  	errorLogs.readChallengeFile('length', srcFile, expectedQueries, queries);
			  } else {
			  	resolve(queries);
			  }
		  } else {
		  	errorLogs.readChallengeFile('empty', srcFile);
		  }
		});
	});
}

function normalizeQueries(query){
	var fullQuery, queries;
	fullQuery = query.replace(/\n/g, ' ');
  fullQuery = fullQuery.replace(/\s+/g, ' ');
  queries = fullQuery.match(/((\w+?)[^;]*)/g);
  return queries;
}

function sortResult(rows){
	var output = [];
	if (Object.prototype.toString.call( rows ) === '[object Array]') {
		rows.forEach(function(item, index, array){
			var obj = {};
			Object.keys(item).sort().forEach(function(itm, indx) {
				if (Object.keys(obj).length <= Object.keys(item).length) {
					obj[itm] = item[itm];
				}
			});
			output.push(obj);
		});
		return output = JSON.stringify(output);
	} else {
		return JSON.stringify(rows);
	}
}

function connectTo(dbName) {
	connection = mysql.createConnection({
	  host     : 'localhost',
	  // user     : '',
	  user     : 'root',
	  password : 'N3tp0ePl@n',
	  database : dbName,
	  multipleStatements: true
	});
	connection.connect();
}

var round = 0;
var expectedOutput = '';
var userOutput = '';
function queryDatabase(dbName){
	var task = tasks[globalCount];
	var expectedQuery = expectedQueries[globalCount];
	var userQuery = userQueries[globalCount];
	// Check database names match
	for (let pattern of SQLkeywords) {
		var dictionary = new RegExp(pattern, 'ig');
		var dbNamePattern = new RegExp(globalDbName, 'ig');
		var tableNamePattern = new RegExp(tableName, 'ig');
		if (!tableName && dictionary.test(userQuery) && !dbNamePattern.test(userQuery)) {
			errorLogs.queryMismatch(globalCount+1, task);
		} else if (tableName && dictionary.test(userQuery) && !tableNamePattern.test(userQuery)) {
			errorLogs.queryMismatch(globalCount+1, task);
		}
	}
	// Check if INSERT values equal on both queries
	var expQueryValues = '', usrQueryValues = '';
	if (/^INSERT/ig.test(expectedQuery)) {
		expQueryValues = expectedQuery.match(/VALUES\s+\(([^)]+.*)\)/ig);
		expQueryValues = expQueryValues[0].replace(/\s+/g, '');
	}
	if (/^INSERT/ig.test(userQuery)) {
		usrQueryValues = userQuery.match(/VALUES\s+\(([^)]+.*)\)/ig);
		usrQueryValues = usrQueryValues[0].replace(/\s+/g, '');
	}
	if (expQueryValues != usrQueryValues)
		errorLogs.queryMismatch(globalCount+1, task);

	// Check if CREATE TABLE columns equal on both queries
	if (/^CREATE TABLE/ig.test(expectedQuery)) {
		expQueryValues = expectedQuery.match(/VALUES\s+\(([^)]+.*)\)/ig);
		expQueryValues = expQueryValues[0].replace(/\s+/g, '');
	}
	if (/^CREATE TABLE/ig.test(userQuery)) {
		usrQueryValues = userQuery.match(/VALUES\s+\(([^)]+.*)\)/ig);
		usrQueryValues = usrQueryValues[0].replace(/\s+/g, '');
	}
	if (expQueryValues != usrQueryValues)
		errorLogs.queryMismatch(globalCount+1, task);

	if (globalCount < tasks.length) {
		if (globalCount > 0) {
			console.log(`Expected: ${expectedOutput}`);
			console.log(`User: ${userOutput}`);
		}
		return new Promise(function(resolve, reject){
			if (round == 0) {
				var query = expectedQuery;
				if (dbName) {
					connectTo(dbName+'_copy');
				} else {
					connectTo();
				}
			} else {
				var query = userQuery;
				if (dbName) {
					connectTo(dbName);
				} else {
					connectTo();
				}
			}
			if (round <= 1) {
				console.log(`Query: ${query}. round: ${round}, globalCount: ${globalCount}`);
				connection.query(query, function(err, rows, fields){
					if (err) {
						console.log(err);
						switch (true) {
							case (err['code'] === 'ER_TABLE_EXISTS_ERROR'):
								dropDatabase(dbName);
								return;
							case (err['code'] === 'ER_NO_DB_ERROR'):
								round++;
								queryDatabase(dbName);
								return;
							default:
								errorLogs.queryDatabase(globalCount+1);
						} 
					}
					if (round == 0) {
						if (rows.insertId) {
							rows.insertId = 1;
							// checkValuesMatch(tableName).then(function(result){
							// 	// console.log(result);
							// 	expectedOutput = result['expectedOutput']
							// });
							// queryDatabase(dbName);
							// return;
						}
						expectedOutput = sortResult(rows);
						round++;
						queryDatabase(dbName);
					} else {
						if (rows.insertId) {
							rows.insertId = 1;
							// checkValuesMatch(tableName).then(function(result){
							// 	// console.log(result);
							// 	userOutput = result['userOutput']
							// });
							// queryDatabase(dbName);
							// return;
						}
						userOutput = sortResult(rows);
						round++;
						console.log('Finished round');
						queryDatabase(dbName);
					}
				});
				connection.end();
			} else {
				if (expectedOutput != userOutput)
					errorLogs.queryMismatch(globalCount+1, task);
				round = 0;
				globalCount++;
				queryDatabase(dbName);
			}
		});		
	} else {
		console.log('Well done!');
		process.exit(0);
	}
}

function dropDatabase(dbName){
	return new Promise(function(resolve, reject){
		if (round == 0) {
			var db = dbName+'_copy';
		} else {
			var db = dbName;
		}
		if (round <= 1) {
			round++;
			console.log(`Droping database: ${db} round: ${round}`);
			connectTo();
			connection.query('DROP DATABASE IF EXISTS '+db, function(err, rows, fields){
				if (err) {
					// console.log(err);
					errorLogs.queryDatabase(globalCount+1);
				}
				// console.log(rows);
				dropDatabase(dbName);
			});
			connection.end();			
		} else {
			console.log('Finished db cleanup');
			round = 0;
			resolve();
			console.log(dbName);
			queryDatabase();
		}
	});
}

function createDatabase(dbName){
	return new Promise(function(resolve, reject){
		if (round == 0) {
			var db = dbName+'_copy';
		} else {
			var db = dbName;
		}
		if (round <= 1) {
			round++;
			console.log(`Creating database: ${db} round: ${round}`);
			connectTo();
			connection.query('CREATE DATABASE IF NOT EXISTS '+db, function(err, rows, fields){
				if (err) {
					// console.log(err);
					errorLogs.queryDatabase(globalCount+1);
				}
				// console.log(rows);
				createDatabase(dbName);
			});
			connection.end();			
		} else {
			console.log('Finished db creation');
			round = 0;
			resolve();
			queryDatabase(dbName);
		}
	});
}

function eraseTableRows(tName){
	return new Promise(function(resolve, reject){
		if (round == 0) {
			var db = dbName+'_copy';
		} else {
			var db = dbName;
		}
		if (round <= 1) {
			round++;
			console.log(`Erasing table: ${tName} rows. round: ${round}. From ${dbName}`);
			connectTo(dbName);
			connection.query('DELETE FROM '+tName, function(err, rows, fields){
				if (err) {
					console.log(err);
					errorLogs.queryDatabase(globalCount+1);
				}
				// console.log(rows);
				eraseTableRows(tName);
			});
			connection.end();			
		} else {
			console.log('Finished table rows deletion');
			round = 0;
			resolve();
			queryDatabase(dbName);
		}
	});
}

function checkValuesMatch(tName){
	return new Promise(function(resolve, reject){
		if (round == 0) {
			var db = dbName+'_copy';
		} else {
			var db = dbName;
		}
		if (round <= 1) {
			round++;
			console.log(`Querying table: ${tName} round: ${round}`);
			connectTo(dbName);
			connection.query('USE '+db+'; SELECT * FROM '+tName, function(err, rows, fields){
				if (err) {
					console.log(err);
					errorLogs.queryDatabase(globalCount+1);
				}
				if (round == 0) {
					expectedOutput = sortResult(rows[1]);
					round++;
					checkValuesMatch(dbName);
				} else {
					userOutput = sortResult(rows[1]);
					round++;
					console.log('Finished round');
				}
			});
			connection.end();			
		} else {
			console.log('Finished INSERT comparison');
			// round = 0;
			resolve({expectedOutput: expectedOutput, userOutput: userOutput});
		}
	});
}

exports.testCommands = function(srcFile, tasksArr, options){
	var dropDb = options['dropDb'];
	var createDb = options['createDb'];
	var eraseTable = options['eraseTable'];
	tasks = tasksArr.map(function(item, index){return item[0]});
	expectedQueries = tasksArr.map(function(item, index){return item[1]});
	dbName = options['dbName'];
	globalDbName = options['dbName'];
	tableName = options['tableName'] || undefined;
	readChallengeFile(srcFile, expectedQueries).then(function(usrQueries){
		userQueries = usrQueries;
		if (createDb && !dropDb) {
			createDatabase(dbName);
		} else if (dropDb && !createDb) {
			dropDatabase(dbName);
		} else {
			queryDatabase(dbName);
		}
	});
};



















