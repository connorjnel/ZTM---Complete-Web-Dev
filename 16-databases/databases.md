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
