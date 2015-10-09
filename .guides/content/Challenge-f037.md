{Check It!|assessment}(test-3260325949)

Finally, the third challenge will ask you to insert data into the `scientists` table.

|||guidance
### Correct answers:

`USE famous_scientists;`

```
CREATE TABLE scientists (
  id INT(4) NOT NULL auto_increment, 
  name VARCHAR(255) NOT NULL, 
  discovery TEXT NOT NULL, 
  year_of_birth INT(4) NOT NULL, 
  year_of_death INT(4) DEFAULT NULL, 
  PRIMARY KEY (id)
) auto_increment = 1;
```

|||
