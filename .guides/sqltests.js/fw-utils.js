var fs = require('fs'),
		errorLogs = require('./fw-errorLogs.js'),
		fw = require('./fw-sqltests.js'),
		utils = this;

// Utils
exports.readChallengeFile = function(srcFile, tasks){
	var srcFile = fw.workspaceDirectory + srcFile;
	return new Promise(function(resolve, reject){
		fs.readFile(srcFile, 'utf-8', function (err, data) {
		  if (err)
		  	errorLogs.readChallengeFile('srcFile', srcFile);		  
		  if (data.length) {
			  var queries = exports.normalizeQueries(data);
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

exports.normalizeQueries = function (query){
	var fullQuery, queries;
	fullQuery = query.replace(/\n/g, ' ');
  fullQuery = fullQuery.replace(/\s+/g, ' ');
  queries = fullQuery.match(/((\w+?)[^;]*)/g);
  return queries;
}

exports.sortResult = function(rows){
	var output = [];
	if (Object.prototype.toString.call( rows ) === '[object Array]') {
		rows.forEach(function(item, index, array){
			var obj = {};
			Object.keys(item).sort().forEach(function(itm, indx) {
				if (Object.keys(obj).length <= Object.keys(item).length)
					obj[itm] = item[itm];
			});
			output.push(obj);
		});
		return output = JSON.stringify(output);
	} else {
		return JSON.stringify(rows);
	}
}

exports.handleErrors = function(err, query, dbName) {
	var errCode = err['code'];
	return new Promise(function(resolve, reject){
		switch (true) {
			case (errCode === 'ER_DB_CREATE_EXISTS'):
				utils.dropDatabase(dbName, query).then(function(){
					resolve(true);
				});
				break;
			case (errCode === 'ER_TABLE_EXISTS_ERROR'):
				utils.dropTable();
				break;
			default:
				resolve(utils.sortResult(err));
		}
	});
}

// exports.dropTable = function(dbName, tableName) {
// 	return new Promise(function(resolve, reject){
// 		fw.connectTo(dbName);
// 		connection.query(`DROP DATABASE ${dbName}`, function(err, rows, fields) {
			
// 		});
// 	});
// }
// exports.dropDatabase = function(dbName, query) {
// 	console.log(`Dropping database ${dbName}`);
// 	return new Promise(function(resolve, reject){
// 		fw.connectTo();
// 		connection.query(`DROP DATABASE ${dbName}`, function(err, rows, fields) {
// 			if (err)
// 				console.log(err);
// 				errorLogs.queryDatabase(globalCount);
// 			console.log('Database dropped');
// 			resolve();
// 		});
// 	});
// }



