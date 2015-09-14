Each column in a database table is required to __have a name and a data type__.

SQL developers have to decide what types of data will be stored inside each and every table column when creating a SQL table.

The data type is a label and a guideline for SQL to __understand what type of data is expected inside of each column__, and it also identifies how SQL will interact with the stored data.

## MySQL Data Type Reference

Different databases offer different choices for the data type definition. However, in this SQL unit, we are going to use some of the MySQL datatypes.

Here's the official MySQL docs definition for the MySQL datatypes we chose for this unit:

### Text types

|Data type|Description|
|---------|-----------|
|`VARCHAR(size)`|The __variable character field__ can contain letters, numbers, and special characters.<br>Max. size is specified in parenthesis.<br>__Can store up to 255 characters__, just enough for a Twitter post.<br>Note: If you put a greater value than 255 it will be converted to a TEXT type|
|`TEXT`|Holds a string with a maximum length of 65,535 characters|
|`LONGTEXT`|Holds a string with a maximum length of 4,294,967,295 characters|

Continue with the _Number types_ and _Date types_ in the next section.