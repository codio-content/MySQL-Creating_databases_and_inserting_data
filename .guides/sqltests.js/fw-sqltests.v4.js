'use strict';
/*
	SQL Challenges framework
	Version: 4.0 as of SQL2
	Compare resulting rows with queries to the database
*/
var mysql = require('mysql'),
		fs = require('fs'),
		errorLogs = require('./fw-errorLogs.js'),
		tasks,
		expectedQueries = [],
		expectedOutputs = [],
		dropDatabaseAtEnd = false,
		deleteTableAtEnd = false,
		globalCount = 0,
		dbList = [],
		connection;

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

var dbCount = 0;
var dropDb = false;
var dbToDrop = '';
function dropDbsExcept(){
	if (dbCount <= dbList.length) {
		if (!dropDb) {
			return new Promise(function(resolve, reject){
				connectTo();
				connection.query('SHOW DATABASES', function(err, rows){
					if (err)
						console.log(err);
					var regex = new RegExp(dbList[dbCount], 'ig');
					if (regex.test(rows[dbCount]['Database'])) {
						dbCount++;
						resolve();
						dropDbsExcept();
					} else {
						dropDb = true;
						dbToDrop = rows[dbCount]['Database'];
						dbCount++;
						resolve();
						dropDbsExcept();
					}
				});
				connection.end();
			});
		} else {
			return new Promise(function(resolve, reject){
				connectTo();
				connection.query('DROP DATABASE '+dbToDrop, function(err, rows){
					if (err)
						console.log(err);
					console.log(rows);
					dropDb = false;
					dbCount++;
					resolve();
					dropDbsExcept();
				});
				connection.end();
			});
		}
	}
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

function queryDatabase(dbName) {
	if (globalCount < tasks.length) {
		return new Promise(function(resolve, reject){
			connectTo(dbName);
			connection.query(expectedQueries[globalCount], function(err, rows, fields){
				if (err)
					dropDbsExcept();
					// errorLogs.queryMismatch(globalCount+1, tasks[globalCount]);
				if (sortResult(rows) != expectedOutputs[globalCount]) {
					dropDbsExcept();
					// errorLogs.queryMismatch(globalCount+1, tasks[globalCount]);
				} else {
					globalCount++;
					queryDatabase(dbName);
				}
			});
			connection.end();
		});
	} else {
		console.log('Well done!');
		process.exit(0);
	}
}

function getOutputs(dbName) {
	if (globalCount < tasks.length) {
		return new Promise(function(resolve, reject){
			connectTo(dbName);
			connection.query(expectedQueries[globalCount], function(err, rows, fields){
				if (err)
					errorLogs.queryDatabase(globalCount+1);
				console.log(`Task. ${globalCount+1} output:`);
				console.log(sortResult(rows));
				globalCount++;
				getOutputs(dbName);
			});
			connection.end();
		});
	} else {
		console.log('Done!');
		process.exit(0);
	}
}

exports.testCommands = function(tasksArr, options){
	var dbName = options['dbName'];
	dropDatabaseAtEnd = options['dropDatabaseAtEnd'];
	deleteTableAtEnd = options['deleteTableAtEnd'];
	tasks = tasksArr.map(function(item, index){return item['task']});
	expectedQueries = tasksArr.map(function(item, index){return item['query']});
	expectedOutputs = tasksArr.map(function(item, index){return item['expectedOutput']}),
	dbList = options['dbList'];
	// console.log(tasks);
	// console.log(expectedQueries);
	if (options['getOutputs']) {
		getOutputs(dbName);
	} else {
		queryDatabase(dbName);
	}
}





















