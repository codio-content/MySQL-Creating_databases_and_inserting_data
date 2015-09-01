SQL databases are sometimes called __schemas__.

A database or _schema_ can be created inside a `mysql` shell with the `CREATE DATABASE database_name` syntax.

Let's create a `db_guitars_collection` database or schema:

```
mysql> CREATE DATABASE db_guitars_collection;
# Query OK, 1 row affected (0.00 sec)
```

Confirm that the database has been created by executing:

```
mysql> SHOW DATABASES;
```

### Alternate syntax

Databases can also be created with the `CREATE SCHEMA db_name` alternate syntax:

```
mysql> CREATE SCHEMA database_name;
```

### Data Definition Language (DDL)

The keywords that let us _create_, _drop_ (remove), _show_ and in general, manipulate databases or schemas are commonly associated with the DDL term.

While the group of keywords, clauses and operators that let us directly manipulate the _database data_ is commonly known as _DML_ or _Data manipulation language_. ie. The _CRUD_ keywords.

---
Let's extend our _DDL_ in the next section.