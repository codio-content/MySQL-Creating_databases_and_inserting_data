'use strict';
/*
	SQL Challenges framework
	Version: 2.0 as of SQL2
	Optimized Regexes
*/
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
// workspaceDirectory + '.guides/sqltests.js/';
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
				// console.log(q1, q2);
				if (q1 != q2) errorLogs.queryMismatch(i+1, tasks[i]);
			}
			console.log('Well done!');
			process.exit(0);
		})(expectedQueries, userQueries);
	});
};