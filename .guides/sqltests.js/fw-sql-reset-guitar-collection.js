var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "'guitars_collection' database",
    "DROP DATABASE IF EXISTS guitars_collection"
  ]
];

sqltest.reset(tasks);