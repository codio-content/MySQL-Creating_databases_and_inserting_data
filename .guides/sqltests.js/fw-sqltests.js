'use strict';
/*
	SQL Challenges framework
	Version: 5.0 as of SQL3
	Build, check, reset
*/
<<<<<<< HEAD
var mysql = require('mysql'),
		fs = require('fs'),
		errorLogs = require('./fw-errorLogs.js');
let SQLkeywords = [
	'CREATE', 
	'DATABASE', 
	'SCHEMA', 
	'TABLE', 
	'SHOW', 
	'COLUMNS', 
	'SELECT', 
	'INSERT', 
	'UPDATE', 
	'DELETE', 
	'WHERE', 
	'FROM', 
	'INTO', 
	'IF', 
	'NOT', 
	'EXISTS', 
	'CHARACTER', 
	'SET', 
	'UTF8',
	'USE',
	'INT',
	'NOT',
	'NULL',
	'VARCHAR',
	'PRIMARY',
	'KEY',
	'AUTO_INCREMENT',
	'VALUES'
];
// var workspaceDirectory = '/home/codio/workspace/';
// var sqlDir = workspaceDirectory + '.guides/sqltests.js/';
var workspaceDirectory = '/Volumes/Seagate Backup Plus Drive/htdocs/MySQL/CodioSQL.Units/sql2/';
var sqlDir = workspaceDirectory + '.guides/sqltests.js/';
=======
var workspaceDirectory = '/home/codio/workspace/';
var sqlDir = workspaceDirectory + '.guides/sqltests/';
// var workspaceDirectory = '/Volumes/Seagate Backup Plus Drive/htdocs/MySQL/CodioSQL.Units/sqlx/';
// var sqlDir = workspaceDirectory + '.guides/sqltests/';
>>>>>>> 6a5eb02ab687b6c315f37a94387e4addaca34645

var mysql       = require('mysql'),
		fs          = require('fs'),
		errorLogs   = require('./fw-errorLogs.js');

// Globals
var tasksArr, connection, count = 0, db;

// MySQL
function connectTo(db) {
	connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : '',
	  // user     : 'root',
	  // password : 'N3tp0ePl@n',
	  database : db
	});
	connection.connect();
}

// Test environment
function test(){
	// console.log(count);
	// console.log(`Testing: ${tasksArr[count][1]}. Task: ${count+1}`);
	if (count < tasksArr.length) {
		var query = tasksArr[count][1];
		return new Promise(function(resolve, reject){
			connectTo(db);
			connection.query(query, function(err, rows, fields) {
				if (err)
					errorLogs.queryMismatch(count+1, tasksArr[count][0]);
				// console.log(rows);
				count++;
				test();
			});
		});
	} else {
		console.log('Well done!');
		process.exit(0);
	}
}

<<<<<<< HEAD
exports.testCommands = function(srcFile, tasksArr){
	var tasks = tasksArr.map(function(item, index){return item[0]});
	var expectedQueries = tasksArr.map(function(item, index){return item[1]});
	readChallengeFile(srcFile, expectedQueries).then(function(userQueries){
		(function(arr1, arr2){
			var q1, q2;
			for (var i = 0; i < arr1.length; i++) {
				q1 = arr1[i];
				q2 = arr2[i];
				for (let pattern of SQLkeywords) {
					var regex = new RegExp(pattern, 'ig');
					q1 = q1.replace(regex, pattern).replace(/\s+/ig, '');
					q2 = q2.replace(regex, pattern).replace(/\s+/ig, '');
				}
				console.log(q1, q2);
				if (q1 != q2) errorLogs.queryMismatch(i+1, tasks[i]);
			}
			console.log('Well done!');
			process.exit(0);
		})(expectedQueries, userQueries);
	});
};
=======

// Reset environment
var resetCount = 0;
function reset(){
	if (resetCount < resetArr.length) {
		var query = resetArr[resetCount];
		return new Promise(function(resolve, reject){
			connectTo(db);
			connection.query(query, function(err, rows, fields) {
				console.log(query);
				if (err)
					console.log(err);
				resetCount++;
				reset();
			});
		});
	} else {
		console.log(count);
		console.log(tasksArr[count]);
		errorLogs.queryMismatch(count+1, tasksArr[count][0]);
		resolve();
	}
}



// Init 
exports.init = function(tasks, dbName) {
	tasksArr = tasks, db = dbName;
	test();
}
>>>>>>> 6a5eb02ab687b6c315f37a94387e4addaca34645
