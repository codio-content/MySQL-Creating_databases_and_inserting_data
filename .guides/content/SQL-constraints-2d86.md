__Constraints__ are part of a database schema definition.

A constraint is usually associated with a table and they __define certain properties that data in a database must comply with.__

They can apply to a column, a whole table, more than one table or an entire schema.

### Common kinds of constraints are:

- **Not null** - each value in a column must not be NULL
- **Unique** - value(s) in specified column(s) must be unique for each row in a table
- **Primary key** - value(s) in specified column(s) must be unique for each row in a table and not be NULL; normally each table in a database should have a primary key - it is used to identify individual records
- **Foreign key** - value(s) in specified column(s) must reference an existing record in another table (via it's primary key or some other unique constraint)
- **Check** - an expression is specified, which must not evaluate to false for constraint to be satisfied (checking for unknown values can be fine as well)

---

Our `catalog` table has _NULL_, _NOT NULL_ and _PRIMARY KEY_ definitions, let's evaluate your understanding in the following challenge.