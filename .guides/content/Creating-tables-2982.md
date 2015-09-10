Let's understand the `guitars-catalog.sql` code line by line:

| Line | Description |
|------------------------|------|
| `CREATE TABLE catalog ()`| Creates the table and its name <br>(remember that we are using the `guitar_collection` database)|
|`id INT(8) NOT NULL auto_increment,`|Determines the first column name as _id_. <br> Datatype must be an _integer_ with a max. size of 8 digits<br> and it can not be empty, or _NULL_. <br> Add _id_'s automatically by _auto incrementing_ the field starting at 1|
|`name VARCHAR(255) default NULL,`|Determines the second column name as _name_<br>Datatype must be a string with a max. of 255 characters<br>If no information is provided, NULL is the DEFAULT value|
|`manufacture_year YEAR(4) default NULL,`|Determine the third column name as _year_<br>Datatype must be an _integer_ with 4 digits from 1901 to 20155<br>If no value is provided, DEFAULT to NULL|
|`brand VARCHAR(255) default NULL,`|Determine the fourth column to be _brand_<br>Datatype must be a string with a max. of 255 characters.<br>NULL is the DEFAULT value|
|`PRIMARY KEY (id)`| Let the _id_ column be the _primary key constraint_ (more on this later)|
|`AUTO_INCREMENT=1;`|Whenever a row is created, increment the value of the _id_ column automatically|

One of the things that makes SQL so popular in the database world is its clear syntax. However, the table above has some new concepts that we are going to cover in the next section, such as:

- The _PRIMARY KEY_
- _NULL_ and _NOT NULL_

But before learning this, complete the challenge!