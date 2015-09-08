// Utils
var utils = {};

utils.normalizeQueries = function (query){
	var fullQuery, queries;
	fullQuery = query.replace(/\n/g, ' ');
  fullQuery = fullQuery.replace(/\s+/g, ' ');
  queries = fullQuery.match(/((\w+?)[^;]*)/g);
  return queries;
}

utils.sortResult = function(rows){
	var output = [];
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
}

utils.simulateQuery = function(query, dbName, expectedQuery, callback){
	var q = query;
	var result = 'Query matches.';
	var queryUSEdb = 'use ' + dbName;
	switch (true) {
		case (/^SHOW\s+DATABASES/i.test(q)):
			callback(false, result);
			break;
		case (/^SHOW\s+TABLES/i.test(q)):
			callback(false, result);
			break;
		case (/^USE\s+/i.test(q)):
			q = q.replace(/^USE/i, 'use');
			if (q == queryUSEdb) {
				callback(false, result);
			} else {
				callback(true);
			}	
			break;
		case (/^CREATE\s+DATABASE|^CREATE\s+SCHEMA/i.test(q)):
			q = q.replace(/^CREATE/i, 'CREATE');
			q = q.replace(/DATABASE/i, 'DATABASE');
			q = q.replace(/SCHEMA/i, 'SCHEMA');
			q = q.replace(/IF NOT EXISTS/i, 'IF NOT EXISTS');
			q = q.replace(/CHARACTER SET/i, 'CHARACTER SET');
			q = q.replace(/utf-8/i, 'utf-8');
			if (q == expectedQuery) {
				callback(false, result);
			} else {
				callback(true);
			}
			break;
		default:
			callback(true);
	}
}

module.exports = utils;