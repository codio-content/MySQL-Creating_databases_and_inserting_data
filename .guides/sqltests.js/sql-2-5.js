var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Create a 'scientists' table with the specified features",
    "INSERT INTO famous_scientists.scientists (name, discovery, year_of_birth, year_of_death) VALUES ('Galileo Galilei', 'Modern observational astronomy', 1564, 1642)"
  ]
];

sqltest.init(tasks, "famous_scientists");