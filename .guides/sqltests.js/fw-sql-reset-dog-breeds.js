var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "'dog_breeds' database",
    "DROP DATABASE IF EXISTS dog_breeds"
  ]
];

sqltest.reset(tasks);