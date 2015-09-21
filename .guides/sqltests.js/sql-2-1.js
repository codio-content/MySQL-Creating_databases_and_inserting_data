var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Create a database named: dog_breeds",
    "USE dog_breeds"
  ]
];

sqltest.init(tasks, "dog_breeds");