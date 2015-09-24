var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Resetting unit",
    "DROP DATABASE IF EXISTS guitars_collection"
  ],
  [
    "Resetting unit",
    "DROP DATABASE IF EXISTS dog_breeds"
  ],
  [
    "Resetting unit",
    "DROP DATABASE IF EXISTS famous_scientists"
  ]
];

sqltest.reset(tasks);