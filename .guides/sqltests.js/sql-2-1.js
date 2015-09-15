var sqltest = require("./fw-sqltests.js");



/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Create a database named: dog_breeds",
    "CREATE DATABASE dog_breeds"
  ],
  [
    "Override the dog_breeds database with the SCHEMA IF NOT EXISTS syntax",
    "CREATE SCHEMA IF NOT EXISTS dog_breeds"
  ],
  [
    "Override the dog_breeds schema with the SCHEMA IF NOT EXISTS and configure the character set to be utf-8",
    "CREATE SCHEMA IF NOT EXISTS dog_breeds CHARACTER SET = UTF8"
  ]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands("sql-2-1/sql-2-1.sql", tasks, {
  dbName: "dog_breeds", 
  dropDb: true
});
