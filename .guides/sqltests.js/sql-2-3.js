var sqltest = require("./fw-sqltests.js");
var workspace = sqltest.workspaceDirectory;


/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Use the dog_breeds database",
    "USE dog_breeds"
  ],
  [
    "Insert the specified data into the 'dog_catalog' table",
    'INSERT INTO dog_catalog (breed, region) VALUES ("English Sheepdog", "England"), ("Tibetan Mastiff", "Asia"), ("Labrador", "Canada")'
  ]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands("sql-2-3/sql-2-3.sql", "dog_breeds", tasks);
