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

tip - sql commands need to be closed by semi-colon ;
psql -U postgres - login as superuser windows
CREATE DATABASE name; - create a database
\connect dbname - connect to database
CREATE TABLE tablename (column_1 datatype, column_2 datatype); - Create a table inside database with set data type
\d - list database tables (when logged into a db)
\q - exit psql and go back to shell
INSERT INTO table_name(column1, column2, column3) VALUES (value1, value2, value3); - Add data to db, specify column and values
tip - dont have to add to all columns, can use just 1
tip - sql is case insensitive, uppercase just convention
tip - for sql when using quotes for strings etc use single quotes, not double
SELECT column1, column2, column3 FROM table-name - Show data from columns
tip - to show all can use wildcard instead - SELECT `*` FROM table-name
