### Number types:

|Data type|Description|
|---------|-----------|
|`INT(size)`|-2147483648 to 2147483647 normal. 0 to 4294967295 UNSIGNED*.<br>The __maximum number of digits may be specified in parenthesis__|

*The integer types have an extra option called `UNSIGNED`.

Normally, the integer goes from a negative to positive value. Adding the UNSIGNED attribute will move that range up so it starts at zero instead of a negative number.

### Date types:
|Data type|Description|
|---------|-----------|
|`DATE()`|A date. Format: YYYY-MM-DD <br>__Note:__ The supported range is from '1000-01-01' to '9999-12-31'|
|`YEAR()`|A year in two-digit or four-digit format.<br>__Note__: Values allowed in four-digit format: 1901 to 2155. Values allowed in two-digit format: 70 to 69, representing years from 1970 to 2069|

Let's learn how to determine the different MySQL datatypes on table creation.

Complete a challenge and head to the next section.