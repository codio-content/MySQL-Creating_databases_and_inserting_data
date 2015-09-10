SQL databases are sometimes called __schemas__.

A database or _schema_ can be created inside a `mysql` shell with the `CREATE DATABASE database_name` syntax.

Let's create a `guitars_collection` database or schema:

```
mysql> CREATE DATABASE guitars_collection;
# Query OK, 1 row affected (0.00 sec)
```

Confirm that the database has been created by executing:

```
mysql> SHOW DATABASES;
```

### Alternate syntax

Databases can also be created with the `CREATE SCHEMA db_name;` alternate syntax:

```
mysql> CREATE SCHEMA database_name;
```

---

The keywords that let us _CREATE_, _DROP_ (remove), _SHOW_ and in general, __manipulate databases or schemas__ are commonly associated with the DDL term.

Let's extend our _DDL_ knowledge in the next section.