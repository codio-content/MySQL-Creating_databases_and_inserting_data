var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Create a database named: dog_breeds",
    "USE DATABASE dog_breeds"
  ]
];

sqltest.init(tasks, "dog_breeds");