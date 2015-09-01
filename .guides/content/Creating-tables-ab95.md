Let's have the `catalog` table as a reference (row cells represent datatypes):

| id | name | year | brand |
|----|------|------|-------|
| Integer   | Variable Character Field* | Date format (YYYY) | Variable Character Field |
<small>*More on the _Variable Character Field_ definition later in this unit.</small>

The SQL representation of the table above would be: 

```
CREATE TABLE catalog ( 
	id int(8) NOT NULL auto_increment,
	name varchar(255) default NULL,
	year date default NULL,
	brand varchar(255) default NULL,
	PRIMARY KEY (id)
) AUTO_INCREMENT=1;
```

We've created a `guitar-catalog.sql` file, copy and paste the code inside the file and:

```
mysql> USE db_guitars_collection;
# Database changed
mysql> source guitar-catalog.sql
# Query OK, 0 rows affected (0.03 sec)
```
--- 

Let's understand the code line by line in the next section.