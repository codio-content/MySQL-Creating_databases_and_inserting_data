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

We've created a `guitars-catalog.sql` file, copy and paste the code above inside the file and:

```
mysql> USE guitars_collection;
# Database changed
mysql> source guitars-catalog.sql
# Query OK, 0 rows affected (0.03 sec)
```
--- 

Let's expose the `catalog` table column names and dataypes in the next section.