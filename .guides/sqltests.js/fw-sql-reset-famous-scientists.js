var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "'famous_scientists' database",
    "DROP DATABASE IF EXISTS famous_scientists"
  ]
];

sqltest.reset(tasks);