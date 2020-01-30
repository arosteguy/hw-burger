

DROP DATABASE IF EXISTS burgersDB;
CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE(
    id INT AUTO_INCREMENT,
    burger VARCHAR (100),
    devoured BOOLEAN, 
    PRIMARY KEY (id)
);


