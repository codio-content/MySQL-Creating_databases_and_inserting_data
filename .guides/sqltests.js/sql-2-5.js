var sqltest = require("./fw-sqltests.js");
var workspace = sqltest.workspaceDirectory;


/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Use the famous_scientists database",
    "USE famous_scientists"
  ],
  [
    "Create a scientists table with the specified features",
    "CREATE TABLE scientists (id INT(4) NOT NULL auto_increment, name VARCHAR(255) NOT NULL, discovery TEXT NOT NULL, year_of_birth INT(4) NOT NULL, year_of_death INT(4) DEFAULT NULL, PRIMARY KEY (id)) auto_increment = 1"
  ]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands("sql-2-5/sql-2-5.sql", "famous_scientists", tasks, "scientists");
