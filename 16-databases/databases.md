# Databases

- Collection of data
- Database allows us to organise data
- DBMS - database management software
- postgre uses pgadmin

## Relational database

- most popular - postgresql, mysql, access, sqlite
- two or more tables with columns and rows
- sql is the method by which you communicate with a database
- has to define schema

## Non relational database

- most populator, mariadb, mongodb, redis
- no schema need be defined
- mongodb - document orientated
- mongodb uses own query language, not sql

## Postgresql commands / SQL Commands

- TIP
  sql commands need to be closed by semi-colon ;
- psql -U postgres
  login as superuser windows
- CREATE DATABASE name;
  create a database
- \connect dbname
  connect to database
- CREATE TABLE tablename (column_1 datatype, column_2 datatype);
  Create a table inside database with set data type
- \d
  list database tables (when logged into a db)
- \q
  exit psql and go back to shell
- INSERT INTO table_name(column1, column2, column3) VALUES (value1, value2, value3);
  Add data to db, specify column and values
- TIP
  dont have to add to all columns, can use just 1
- TIP
  sql is case insensitive, uppercase just convention
- TIP
  for sql when using quotes for strings etc use single quotes, not double
- SELECT column1, column2, column3 FROM table-name
  Show data from columns
- TIP
  to show all can use wildcard instead - SELECT `*` FROM table-name
- ALTER TABLE table_name ADD column datatype;
  Add a column to existing table
- UPDATE table_name SET some_column = some_value WHERE some_column = some_value;
  Update column with new values
- TIP
  Can add conditional AND OR for modifying or adding multiple values
- SELECT `*` FROM users WHERE name LIKE 'A%';
  Filters table to show results that column name value starts with A - case sensitive
- SELECT `*` FROM users ORDER BY score DESC;
  Order results using column by descending order, ASC for ascending order
