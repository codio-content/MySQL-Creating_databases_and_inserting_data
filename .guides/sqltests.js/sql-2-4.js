var sqltest = require("./fw-sqltests.js");



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
    "CREATE SCHEMA famous_scientists"
  ],
  [
    "Override the famous_scientists database with the CREATE DATABASE IF NOT EXISTS syntax",
    "CREATE DATABASE IF NOT EXISTS famous_scientists"
  ]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands("sql-2-4/sql-2-4.sql", tasks);
