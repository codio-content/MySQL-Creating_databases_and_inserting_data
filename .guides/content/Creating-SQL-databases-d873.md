SQL databases are sometimes called __schemas__.

A database or _schema_ can be created inside a `mysql` shell with the `CREATE DATABASE database_name` syntax.

Let’s create a `guitars_collection` database or schema by entering:

```
mysql> CREATE DATABASE guitars_collection;
```

You should see this: 

```
Query OK, 1 row affected (0.00 sec)
```

Confirm that the database has been created by executing:

```
mysql> SHOW DATABASES;
```

Can you see the `guitars_collection` database listed?

### Alternate syntax

Databases can also be created with the `CREATE SCHEMA db_name;` alternate syntax, where `db_name` is the selected database name.

---

{Reset Section Database}(node .guides/sqltests.js/fw-sql-reset-guitar-collection.js)

---

The keywords that let us _CREATE_, _DROP_ (remove), _SHOW_ and in general, __manipulate databases or schemas__ are commonly associated with the DDL (Data Definition Language) term.

Let's extend our _DDL_ knowledge in the next section.