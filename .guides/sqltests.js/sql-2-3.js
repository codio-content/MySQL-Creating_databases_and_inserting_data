var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Insert the specified data into the 'dog_catalog' table",
    "select id,breed,region from dog_breeds.dog_catalog where id between 1 AND 3 AND breed = 'English Sheepdog' AND region = 'England'"
  ]
];

sqltest.init(tasks, 'dog_breeds');