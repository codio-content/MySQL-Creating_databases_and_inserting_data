Our `catalog` table definition specified 4 column names and its datatypes: 

1. _id_: Integer max. limit of 8
2. _name_: Variable character max. limit of 255
3. *manufacture_year*: Year max. limit of 4
4. _brand_: Variable character max. limit of 255

You may have noticed that the `INSERT INTO catalog (name,manufacture_year,brand)` code of the previous section is missing the first column specification: `id`. 

However, if we do a:

```
mysql> SELECT * FROM catalog;

+----+---------------------------+------------------+-------+
| id | name                      | manufacture_year | brand |
+----+---------------------------+------------------+-------+
|  1 | Brian May’s Red Special   | 1963            | NULL  |
+----+---------------------------+------------------+-------+
1 row in set (0.00 sec)
```

The `id` column is there.

This is because when creating our `catalog` table, we specified the `AUTO INCREMENT` behaviour:

```
CREATE TABLE catalog (
	id int(8) NOT NULL auto_increment,
  ...
) AUTO_INCREMENT=1;
```

Consisting of 2 parts: 

1. The column that needs to be *auto incremented*
2. The `AUTO_INCREMENT` starting point before the statement ending `;`

--- 

Let's insert more guitar values to our collection to better comprehend how this works.
See you in the next section.