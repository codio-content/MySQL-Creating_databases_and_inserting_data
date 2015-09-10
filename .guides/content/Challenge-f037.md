{Check It!|assessment}(test-3260325949)

|||guidance
### Correct answers:

1. `USE famous_scientists;`
2.
```
CREATE TABLE scientists (
  id INT(4) NOT NULL auto_increment,
  name VARCHAR(255) NOT NULL,
  invention TEXT NOT NULL,
  year_of_birth YEAR(4) NOT NULL,
  year_of_death YEAR(4) DEFAULT NULL,
  PRIMARY KEY (id)
) auto_increment = 1;
```

|||
