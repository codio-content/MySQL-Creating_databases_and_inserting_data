The `CREATE DATABASE db_name;` statement can be extended with some control keywords to check for databases that exist with the same name:

```
mysql> CREATE DATABASE IF NOT EXISTS db_name;
```

### Understanding `IF NOT EXISTS`

If you try executing the above command replacing `db_name` with the `guitars_collection` name, the command will completely override your existing database:

```
mysql> CREATE DATABASE IF NOT EXISTS guitars_collection;
```

You should see this: 

```
Query OK, 1 row affected, 1 warning (0.00 sec)
```

Where __the warning is that the database already existed__ but it still overrode it.

However, try executing the `CREATE DATABASE guitars_collection;` command without the `IF NOT EXISTS` control and you'll get an error:

```
ERROR 1007 (HY000): Can't create database 'guitars_collection'; database exists
```

---
Complete a challenge in the next section.