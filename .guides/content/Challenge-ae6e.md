{Check It!|assessment}(test-2627637445)

---

{Reset Challenge Database}(node .guides/sqltests.js/fw-sql-reset-dog-breeds.js)

---


|||guidance
### Correct answers:

`CREATE DATABASE IF NOT EXISTS dog_breeds;`

```
CREATE TABLE dog_catalog (id INT(4) NOT NULL auto_increment, breed VARCHAR(255), region VARCHAR(255), PRIMARY KEY (id)) AUTO_INCREMENT = 1;
```

|||
