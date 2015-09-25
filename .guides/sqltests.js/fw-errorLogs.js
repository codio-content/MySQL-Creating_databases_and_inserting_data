var errorMessages = [
	'Did you miss any semicolons between each query?',
	'Watch out for spaces between keywords and names',
	'Check your database, table or column names',
  'Are you using the right SQL keywords?'
];

exports.queryDatabase = function(globalCount){
	console.log(`[Error]: Task ${globalCount}. Your SQL query has syntax errors`);
	// console.log(errorMessages[Math.floor(Math.random() * errorMessages.length)]);
	process.exit(1);
}
exports.readChallengeFile = function(reason, srcFile, tasks, queries){
	switch (true) {
		case (reason == 'empty'):
			console.log(`Fail to retrieve queries from ${srcFile} file. File is empty.`);
			// console.log('Did you forget to save it?');
      process.exit(1);
			break;
		case (reason == 'srcFile'):
			console.log(`Fail to retrieve queries from ${srcFile} file.`);
	  	// console.log('Does the name match the file in your file tree?');
	  	process.exit(1);
	  	break;
	  case (reason == 'length'):
	  	console.log('You are missing some tasks.')
	  	console.log(`Requested statements: ${tasks.length}`);
	  	console.log(`Written statements: ${queries.length}`);
	  	console.log('Each statement must end with a semicolon.')
	  	process.exit(1);
	  	break;
	}
}
exports.queryMismatch = function(globalCount, task){
	console.log(`[Error]: Task ${globalCount}. Expected: ${task}. Try again.`);
	// console.log(errorMessages[Math.floor(Math.random() * errorMessages.length)]);
	process.exit(1);
}
exports.unknownQuery = function(globalCount){
	console.log(`[Error]: Task ${globalCount}. Query matches no SQL keyword`);
	process.exit(1);
}

exports.reset = function(task){
	console.log(`[Reset OK]: ${task}.`);
  process.exit(0);
}

exports.resetFailed = function(task){
	console.log(`[Error]: Sorry, something went wrong while resetting this section database.`);
  process.exit(1);
}