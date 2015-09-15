var sqltest = require("./fw-sqltests.v3.js");



/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Show the available databases",
    "SHOW DATABASES"
  ],
  [
    "Create a famous_scientists database with the CREATE SCHEMA syntax",
    "CREATE SCHEMA famous_scientists_copy"
  ],
  [
    "Override the famous_scientists database with the CREATE DATABASE IF NOT EXISTS syntax",
    "CREATE DATABASE IF NOT EXISTS famous_scientists_copy"
  ]
];


/*
 Init test
 sql.testCommands(user source file, tasks[], ["database_name", drop db || create db])
*/
sqltest.testCommands("sql-2-4/sql-2-4.sql", tasks, {
  dbName: "famous_scientists",
  dropDb: true
});
