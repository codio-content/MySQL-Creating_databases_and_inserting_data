// Utils
var utils = {};

utils.normalizeQueries = function (query){
	var fullQuery, queries;
	fullQuery = query.replace(/\n/g, ' ');
  fullQuery = fullQuery.replace(/\s+/g, ' ');
  fullQuery = fullQuery.replace(/^\s+|\s+$/g,'')
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
		case (/^SHOW\s+DATABASES/ig.test(q)):
			callback(false, result);
			break;
		case (/^SHOW\s+TABLES/ig.test(q)):
			callback(false, result);
			break;
		case (/^USE\s+/ig.test(q)):
			q = q.replace(/^USE/ig, 'use');
			if (q == queryUSEdb) {
				callback(false, result);
			} else {
				callback(true);
			}	
			break;
		case (/^CREATE\s+DATABASE|^CREATE\s+SCHEMA/ig.test(q)):
			q = q.replace(/^CREATE/ig, 'CREATE');
			q = q.replace(/DATABASE/ig, 'DATABASE');
			q = q.replace(/SCHEMA/ig, 'SCHEMA');
			q = q.replace(/IF NOT EXISTS/ig, 'IF NOT EXISTS');
			q = q.replace(/CHARACTER SET/ig, 'CHARACTER SET');
			q = q.replace(/utf8/ig, 'UTF8');
			if (q == expectedQuery) {
				callback(false, result);
			} else {
				callback(true);
			}
			break;
		case (/^CREATE\s+TABLE/ig.test(q)):
			q = q.replace(/^CREATE/ig, 'CREATE');
			q = q.replace(/TABLE/ig, 'TABLE');
			q = q.replace(/INT/ig, 'INT');
			q = q.replace(/NOT NULL/ig, 'NOT NULL');
			q = q.replace(/VARCHAR/ig, 'VARCHAR');
			q = q.replace(/primary\s+key\s?\(\s?id\s?\)\s?\)/ig, 'PRIMARY KEY (id))');
			q = q.replace(/AUTO_INCREMENT/ig, 'auto_increment');
			q = q.replace(/\s+/g, '');
			expectedQuery = expectedQuery.replace(/\s+/g, '');
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