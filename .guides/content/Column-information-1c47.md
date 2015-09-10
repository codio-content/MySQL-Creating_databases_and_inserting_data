Now that our `catalog` table is created, let's follow some steps in order to confirm that the table exists with the datatype configuration we determined: 

First, use the `guitars_collection` database:

```
mysql> USE guitars_collection;
```

Second, display the `guitars_collection` tables: 

```
mysql> SHOW TABLES;
```

Third, show the `catalog` table columns' information: 

```
mysql> SHOW COLUMNS FROM catalog;
```