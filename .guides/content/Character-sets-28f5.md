A character set is a group of characters that correspond to a specific language.

For example, the english language has its own character set consisting of lowercase and uppercase vowels and consonants, and arabic numbers from 0 to 9.

Latin characters often include vowels with a stress such as _á_, _é_ and so on.

### Configuring database character sets

__The most common character set__ and the default set with which SQL databases are created is the _Unicode Transformation Format_ or _UTF-8_ for short.

There's no need to configure our existing `db_guitars_collection` with the _UTF-8 charset_ as it is done by default only by typing the `CREATE DATABASE db_name;` command. 

It is important to mention though, that whenever you may want to work with a specific character set, the following command would result helpful:

```
mysql> CREATE DATABASE dn_name CHARACTER SET = utf-8;
```

---

All right! Time for the first challenge on creating databases!
See you in the next section.