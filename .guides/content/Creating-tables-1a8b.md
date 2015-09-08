Just as easy as it is to create a SQL database, database tables can also be created with the `CREATE` command. 

Before adding a table to our `db_guitars_collection` schema, there's a couple of concepts we need to clarify.

As we learned in the previous unit, the _relational database model_ consists of _spreadsheet like_ structures where data is organized in rows and columns.

When creating tables, this is exactly what we need to specify:

- The name of our table
- The name of our columns
- What kind of data should the tables store, otherwise reject the _insert_ request

### The guitars collection table

We will call our table: `catalog`

The `catalog` table columns structure will be the following: 

| id | name | year | brand |
|----|------|------|-------|
|    |      |      |       |

Let's create the table and its header (column names) in the next section.