CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
CREATE TABLE IF NOT EXISTS names (
    id int not null auto_increment,
    name varchar(255) not null,
    primary key(id)
);