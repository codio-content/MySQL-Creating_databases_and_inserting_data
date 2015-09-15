/*
	SQL Challenges framework
	Version: 1.1 as of SQL2
	Expect a result from the database and compare it as a JSON string
*/
var mysql = require('mysql');
var fs = require('fs');
var errorLogs = require('./fw-errorLogs.js');
var Utils = require('./fw-utils.js');
var connection;
var globalCount = 0;
var globalDbName = '';
var userQueryOutput = '';
var queryTypes = {};
var placeholder = '';
var tableDatatypes = ['', false];

var sqltest = {};
// sqltest.workspaceDirectory = '/home/codio/workspace/';
// sqltest.sqlDir = sqltest.workspaceDirectory + '.guides/sqltests.js/';
sqltest.workspaceDirectory = '/Volumes/Seagate Backup Plus Drive/htdocs/MySQL/CodioSQL.Units/sql2/';
sqltest.sqlDir = sqltest.workspaceDirectory + '.guides/sqltests.js/';

// Init process:
function readChallengeFile(srcFile, tasks){
	var srcFile = sqltest.workspaceDirectory + srcFile;
	return new Promise(function(resolve, reject){
		fs.readFile(srcFile, 'utf-8', function (err, data) {
		  if (err) {
		  	errorLogs.readChallengeFile('srcFile', srcFile);
		  };
		  if (data.length) {
			  var queries = Utils.normalizeQueries(data);
			  // Number of tasks equal number of user queries:
			  if (queries.length != tasks.length) {
			  	errorLogs.readChallengeFile('length', srcFile, tasks, queries);
			  } else {
			  	resolve(queries);
			  }
		  } else {
		  	errorLogs.readChallengeFile('empty', srcFile);
		  }
		});
	});
}

function connectTo(dbName) {
	connection = mysql.createConnection({
	  host     : 'localhost',
	  // user     : '',
	  user     : 'root',
	  password : 'N3tp0ePl@n',
	  database : dbName
	});
	connection.connect();
}

function dropTable(query, sendError) {
	return new Promise(function(resolve, reject){
		connectTo(globalDbName);
		connection.query(query, function(err, rows, fields) {
			console.log(query);
			if (sendError) {
				errorLogs.queryDatabaseByType(globalCount);
			} else {
				resolve();
			}
		});
	});
}
function dropDatabase(query, sendError) {
	return new Promise(function(resolve, reject){
		connectTo(globalDbName);
		connection.query(query, function(err, rows, fields) {
			errorLogs.queryDatabaseByType(globalCount);
		});
	});
}
function checkDatatypesMatch(query) {
	return new Promise(function(resolve, reject){
		connectTo(globalDbName);
		connection.query(query, function(err, rows, fields) {
			resolve(Utils.sortResult(rows));
		});
	});	
}

function queryDatabaseByType(query){
	var output;
	var query = Utils.normalizeQueries(query)[0];
	return new Promise(function(resolve, reject){
		connectTo(globalDbName);
		connection.query(query, function(err, rows, fields) {
		  if (err) {
		  	switch (true) {
		  		case (err['code'] === 'ER_TABLE_EXISTS_ERROR'):
				  		if (query.split(' ')[2] === placeholder) {
				  			console.log(tableDatatypes[1]);
				  			if (tableDatatypes[1]) {
				  				console.log(tableDatatypes[0]);
				  				var datatypesMatchQuery = 'SHOW COLUMNS FROM '+placeholder;
					  			checkDatatypesMatch(datatypesMatchQuery).then(function(output){
					  				// console.log(output);
					  				if (tableDatatypes[0] == output) {
											resolve(output);
					  				} else {
							  			errorLogs.datatypesMismatch(globalCount);
					  				}
					  			});
				  			} else {
				  				tableDatatypes.splice(1, 1, true);
				  				dropTable('DROP TABLE '+placeholder, false).then(function(output){
				  					resolve(tableDatatypes[0]);
				  				});
				  			}
				  		} else {
				  			dropTable('DROP TABLE '+query.split(' ')[2], true);
				  		}
		  			break;
		  		case (err['code'] === 'ER_DB_CREATE_EXISTS'):
				  		if (query.split(' ')[2] === placeholder) {
					  		output = Utils.sortResult(err);
					  		resolve(output);
				  		} else {
				  			var dropDbName = 'DROP DATABASE '+query.split(' ')[2];
				  			dropDatabase(dropDbName);
				  		}
		  			break;
		  		default:
				  	output = Utils.sortResult(err);
			  		resolve(output);
		  	}
		  } else {
		  	if (rows.insertId) {
		  		rows.insertId = 1;
		  	}
	  		output = Utils.sortResult(rows);
	  		resolve(output);
		  }
		});
		connection.end();
	});
}

function dbLookup(dbName, tasks, userQueriesArr){
	var userQuery;
	var task = tasks[globalCount][0];
	var query = tasks[globalCount][1];
	var expectedOutput = tasks[globalCount][2];
	globalCount++;
	// queryDatabaseByType(query).then(function(expected){
		var query = userQueriesArr[globalCount-1];
		// console.log('expected: ' + expected);
		queryDatabaseByType(query).then(function(userQuery){
			userQuery = userQuery;
			console.log('user: ' + userQuery);
			if (expected == userQuery) {
				if (globalCount < tasks.length) {
					dbLookup(dbName, tasks, userQueriesArr);
				} else {
					console.log('Well done!');
					process.exit(0);
				}
			} else {
				errorLogs.queryMismatch(globalCount, task);
			}
		}).catch(function(){
			console.log('Failed to retrieve userQueries from db');
			process.exit(1);
		});
	// }).catch(function(){
	// 	console.log('Fail to retrieve expectedQueries from db.');
	// 	process.exit(1);
	// });
}

sqltest.testCommands = function(srcFile, dbName, tasks, pholder){
	globalDbName = dbName;
	placeholder = pholder ? pholder : '';
	readChallengeFile(srcFile, tasks).then(function(userQueriesArr){
		dbLookup(dbName, tasks, userQueriesArr);
	}).catch(function(){
		errorLogs.readChallengeFile('srcFile', srcFile);
	});
};

module.exports = sqltest;