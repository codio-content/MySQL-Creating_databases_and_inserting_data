var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Reset unit databases",
    "DROP DATABASE IF EXISTS dog_breeds"
  ]
];

sqltest.reset(tasks);