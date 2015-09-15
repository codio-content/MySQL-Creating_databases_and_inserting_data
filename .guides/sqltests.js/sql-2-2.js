var sqltest = require("./fw-sqltests.js");



/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Use the 'dog_breeds' database",
    "USE dog_breeds"
  ],
  [
    "Create a 'dog_catalog' table with the specified columns and datatypes",
    "CREATE TABLE dog_catalog (id INT(4) NOT NULL auto_increment, breed VARCHAR(255), region VARCHAR(255), PRIMARY KEY (id)) auto_increment = 1"
  ]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands("sql-2-2/sql-2-2.sql", tasks, {
	dbName: "dog_breeds"
});
