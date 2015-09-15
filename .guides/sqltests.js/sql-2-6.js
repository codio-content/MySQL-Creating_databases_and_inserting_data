var sqltest = require("./fw-sqltests.js");

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
    "Show the scientists table columns’ datatype information",
    "SHOW COLUMNS FROM scientists"
  ],
  [
    "Insert the specified data to the scientists table",
    "INSERT INTO scientists (name, discovery, year_of_birth, year_of_death) VALUES ('Archimedes', 'Finding the exact volume of an irregularly shaped object', 287, 212), ('Galileo Galilei', 'Modern observational astronomy', 1564, 1642), ('Sir Isaac Newton', 'Gravity', 1642, 1726), ('Thomas Alva Edison', 'Electric bulb', 1847, 1931)"
  ]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands("sql-2-6/sql-2-6.sql", tasks, {
  dropDb: false,
  createDb: false,
  tableName: 'scientists',
  dbName: 'famous_scientists'
});
