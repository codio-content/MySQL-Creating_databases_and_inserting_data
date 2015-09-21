var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Insert the specified data to the scientists table",
    "SELECT id,name,discovery,year_of_birth,year_of_death FROM famous_scientists.scientists WHERE name='Galileo Galilei' AND discovery='Modern observational astronomy' AND year_of_birth=1564 AND year_of_death=1642"
  ]
];

sqltest.init(tasks, "famous_scientists");