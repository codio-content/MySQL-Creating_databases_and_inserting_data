|||info
### Reset challenge database
If you make a mistake while editing the database in this section or just want to reset the database back to its original state, return to this page and click the “Reset Section Database” button below.

{Reset Challenge Database}(node .guides/sqltests.js/fw-sql-reset-dog-breeds.js)
|||
---

{Check It!|assessment}(test-2627637445)


|||guidance
### Correct answers:

`CREATE DATABASE IF NOT EXISTS dog_breeds;`

`USE dog_breeds;`

```
CREATE TABLE dog_catalog (id INT(4) NOT NULL auto_increment, breed VARCHAR(255), region VARCHAR(255), PRIMARY KEY (id)) AUTO_INCREMENT = 1;
```

|||
