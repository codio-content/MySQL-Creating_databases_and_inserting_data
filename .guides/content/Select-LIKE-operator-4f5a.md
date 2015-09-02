As our tables grow with more complex data, we need a better way to filter our results when `SELECT`ing columns and rows.

The `SELECT column_name FROM table WHERE value LIKE pattern;` SQL statement is very helpful when trying to find specific values. 

Our current `catalog` table of the `db_guitars_collection` looks like this: 

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

Let's find our first pattern: _Fender_.
Notice that the rows that have the _Fender_ word come with full strings like: "Fender Telecaster" and not just "Fender". 

This is why a simple query like: `SELECT * FROM catalog WHERE brand = 'Fender';` won't work.

Execute the following query in your `mysql>` shell: 

```
mysql> SELECT * FROM catalog WHERE brand LIKE 'Fender%';
```

Did you spot the `%` symbol? Learn more about it in the next section. 