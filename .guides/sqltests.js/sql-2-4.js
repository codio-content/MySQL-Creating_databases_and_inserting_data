var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Create a famous_scientists database",
    "USE famous_scientists"
  ]
];

sqltest.init(tasks, "famous_scientists");