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
- SELECT AVG(column) FROM table_name;
  shows average of column
- SELECT SUM(column) FROM table_name;
  shows sum of column
- SELECT COUNT(column) FROM table_name;
  shows count of column

## Creating login database

`CREATE TABLE login ( ID serial NOT NULL PRIMARY KEY, secret VARCHAR (100) NOT NULL, name text UNIQUE NOT NULL );`
Create a table called login,
first column is called serial, has auto incrementing number for datatype and cant be empty and is primary db key
second column is called secret, has variable length string as datatype, cant be empty
final column is called name, datatype is text and it has tobe unique and not empty

## Joining tables

- TIP  
  Data is stored in different tables because its more efficient that way, almost like seperation of concerns
- `SELECT * FROM users JOIN login ON users.name = login.name;`
  Join tables together using key column that exists in both tables ie. name.

## Delete value from table / Delete whole table

- `DELETE FROM users WHERE name='Sally';`
  Delete user sally from users table, please use carefully
- `DROP TABLE login;`
  Delete whole table - careful
- `ALTER TABLE users DROP COLUMN score;`
  Remove column from table
