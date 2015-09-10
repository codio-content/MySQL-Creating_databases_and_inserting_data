### If I have seen further, it is by standing on the shoulders of giants.
<small>Bernard of Chartres.</small>

Databases are fun. Let's honour some of the most popular scientists of all times by creating a `famous_scientists` schema.

This database or _schema_ is going to have a `scientists` table with 5 columns and its datatypes:

|id|name|discovery|year_of_birth|year_of_death|
|----|-----|-----|-----|-----|
|INT(4) auto increment from 1|VARCHAR(255) can't be NULL|TEXT can't be NULL|INT(4) can't be NULL|INT(4) defaults to NULL if the scientist is still alive|

{Check It!|assessment}(test-3787893232)

|||guidance
### Correct answers:

1. `SHOW DATABASES;`
2. `CREATE SCHEMA famous_scientists;`
3. `CREATE DATABASE IF NOT EXISTS famous_scientists;`

|||