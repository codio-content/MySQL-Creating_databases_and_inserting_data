var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Override the 'dog_breeds' database",
    "USE dog_breeds"
  ],
  [
    "Create a 'dog_catalog' table with the specified columns and datatypes",
    "INSERT INTO dog_breeds.dog_catalog(breed,region) VALUES ('Test Breed', 'Test Region')"
  ]
];

sqltest.init(tasks, "dog_breeds");
