Let's understand the `guitar-catalog.sql` code line by line:

| Line | Description |
|------------------------|------|
| `CREATE TABLE catalog ()`| Creates the table and its name <br>(remember that we are using the `db_guitar_collection` database)|
|`id int(8) NOT NULL auto_increment,`|Determines the first column name as _id_. <br> Datatype must be an _integer_ <br> and it can not be empty, or _NULL_. <br> Add _id_'s automatically by _auto incrementing_ the field starting at 1|
|`name varchar(255) default NULL,`|Determines the second column name as _name_<br>Datatype must be a text string with a maximum of 255 characters<br>If no information is provided, assign the NULL keyword automatically|
|`year date default NULL,`|Determine the third column name as _year_<br>Datatype must be a _date_ with the format _YYYY_<br>If no value is provided, default to NULL|
|`brand varchar(255) default NULL,`|Determine the fourth column to be _brand_<br>Datatype must be a text string with a maximum of 255 characters<br>Default to NULL if empty|
|`PRIMARY KEY (id)`| Let the _id_ column be the _primary key constraint_ (more on this later)|
|`AUTO_INCREMENT=1;`|Whenever a row is created, increment the value of the _id_ column automatically |

One of the things that makes SQL so popular in the database world is its clear syntax. However, the table above has some new concepts that we are going to cover in the next section, such as:

- The _PRIMARY KEY_
- _NULL_ and _NOT NULL_

But before doing this, complete the challenge!