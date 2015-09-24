Let's have the `catalog` columns and datatypes table as a reference:

| id | name | manufacture_year | brand |
|----|------|------|-------|
| Integer(8)   | Variable Character Field(255) | Year(4) | Variable Character Field(255) |

The SQL representation of the table above would be:

```
CREATE DATABASE IF NOT EXISTS guitars_collection;

CREATE TABLE catalog ( 
	id INT(8) UNSIGNED NOT NULL auto_increment,
	name VARCHAR(255) default NULL,
	manufacture_year YEAR(4) default NULL,
	brand VARCHAR(255) default NULL,
	PRIMARY KEY (id)
) AUTO_INCREMENT=1;
```

We will cover the `PRIMARY KEY` constraint in future sections.

A `guitars-catalog.sql` was created and opened for you:

1. Click on the file (in the left pane)
2. Copy the code above inside the file
3. Paste the code in the file
4. Switch to the terminal pane and execute:

```
mysql> USE guitars_collection;
```
And source it:
```
mysql> source guitars-catalog.sql
```

|||info
### I closed the file by mistake
Don't worry, you can open the file again just by going back or forth 1 section and get to the current section again.
|||
--- 

Let's expose the `catalog` table column names and dataypes in the next section.