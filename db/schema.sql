

DROP DATABASE IF EXISTS burgersDB;
CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger VARCHAR (100) NOT NULL,
    devoured BOOLEAN, 
    PRIMARY KEY (id)
);



