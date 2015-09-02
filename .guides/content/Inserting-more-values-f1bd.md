A `collection-2.sql` file has been created and opened for you.

Copy and paste the following code in it:

```
USE db_guitars_collection;

INSERT INTO catalog (name,year,brand) 
VALUES 
("Keith Richards’ Micawber", 1953, "Fender Telecaster"),
("Jimi Hendrix’s Monterey", 1967, "Fender Stratocaster"),
("Jimmy Page’s Gibson Les Paul Standard", 1959, "Gibson"),
("Matt Bellamy’s Black Kaoss", 2006, "Manson");
```

Important things to aknowledge about the code above:

- Each `VALUES` row is inside a parenthesis separated by a comma, except for the last one
- _Varchar_ values are inside double quotes so single quotes (apostrophes) may be used

Source the `collection-2.sql` file:

```
mysql> source collection-2.sql
# Query OK, 4 rows affected (0.00 sec)
# Records: 4  Duplicates: 0  Warnings: 0
```

And display all the current records (notice the _id_ `auto_increment` functionality):

```
mysql> SELECT * FROM catalog;
+----+-----------------------------------------+------+---------------------+ 
| id | name                                    | year | brand               | 
+----+-----------------------------------------+------+---------------------+ 
|  1 | Brian May’s Red Special                 | 1963 | NULL                | 
|  2 | Keith Richards’ Micawber                | 1953 | Fender Telecaster   | 
|  3 | Jimi Hendrix’s Monterey                 | 1967 | Fender Stratocaster | 
|  4 | Jimmy Page’s Gibson Les Paul Standard   | 1959 | Gibson              | 
|  5 | Matt Bellamy’s Black Kaoss              | 2006 | Manson              | 
+----+-----------------------------------------+------+---------------------+ 
5 rows in set (0.00 sec)
```

---
Ready for a challenge on inserting data? Go to the next section.