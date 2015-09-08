Let's have the `catalog` table as a reference (row cells represent datatypes):

| id | name | manufacture_year | brand |
|----|------|------|-------|
| Integer(8)   | Variable Character Field(255) | Year(4) | Variable Character Field(255) |

The SQL representation of the table above would be:

```
CREATE TABLE catalog ( 
	id INT(8) NOT NULL auto_increment,
	name VARCHAR(255) default NULL,
	manufacture_year YEAR(4) default NULL,
	brand VARCHAR(255) default NULL,
	PRIMARY KEY (id)
) AUTO_INCREMENT=1;
```

We've created a `guitar-catalog.sql` file, copy and paste the code above inside the file and:

```
mysql> USE guitars_collection;
# Database changed
mysql> source guitar-catalog.sql
# Query OK, 0 rows affected (0.03 sec)
```
--- 

Let's understand the code line by line in the next section.