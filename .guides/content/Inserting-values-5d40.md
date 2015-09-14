Now that our `catalog` table has been created, it's time to `INSERT` some data into it.

As part of the SQL _data manipulation language_ (DDL), the `INSERT` SQL keyword represents the __CREATE__ word of the _CRUD_ acronym.

Table data is represented as rows and each of the row fields must match the datatype specified for each column when we created our `catalog` table.

Let's insert 1 row into our `catalog` table. 
Paste the following code in the `collection.sql` file we opened for you:

```
USE guitars_collection;
INSERT INTO catalog (name,manufacture_year,brand)
VALUES ("Brian May’s Red Special", 1963, DEFAULT);
```

Source it: 

```
mysql> source collection.sql
```

And you should see this: 

```
Database changed
Query OK, 1 row affected (0.01 sec)
```

The following list describes the meaning of each of the `collection.sql` query lines:

1. `USE guitars_collection;`:
Use the database where the `catalog` table is stored
2. `INSERT INTO catalog (name,manufacture_year,brand)`:
Insert data into the `catalog` table specifying the column names as well as its appropiate order as defined in the table creation
3. `VALUES ("Brian May’s Red Special", 1963, DEFAULT);`:
Define the values to be inserted into the table. Values must match the pre-defined datatype and the order. In this case, the third value _defaults_ to _NULL_ as defined in the table creation. This is because this specific guitar has no brand as it is a custom guitar

---

What about the `id` column? Head to the next section.