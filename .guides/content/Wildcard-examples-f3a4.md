From the `catalog` table:

Select all the records where the _brand_ column data ends with _caster_:

```
mysql> SELECT * FROM catalog WHERE brand LIKE '%caster';
```

Select only the _name_ and _brand_ columns where the _brand_ column data has the pattern _end_:

```
mysql> SELECT name,brand FROM catalog WHERE brand LIKE '%end%';
```

Select only the _id_ and _brand_ columns where the _brand_ can have any character between _Gi_ and _son_. Sort the results by _id_:

```
mysql> SELECT id,brand FROM catalog WHERE brand LIKE 'Gi_son' ORDER BY id;
```

Select all the records where the _name_ column do not begin with _Jim_:

```
mysql> SELECT * FROM catalog WHERE name NOT LIKE 'Jim%';
```

Select all the records where the _brand_ column is NULL:

```
mysql> SELECT * FROM catalog WHERE brand IS NULL;
```

Select all the records where the _brand_ column _is not_ NULL. Limit the results by 3:

```
mysql> SELECT * FROM catalog WHERE brand IS NOT NULL LIMIT 3;
```

Select all the records where the _brand_ column _is not_ NULL. Limit the results by 3. Return results starting from the 2 row with the _OFFSET_ clause (can you tell the difference?):

```
mysql> SELECT * FROM catalog WHERE brand IS NOT NULL LIMIT 3 OFFSET 1;
```