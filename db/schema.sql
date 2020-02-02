

DROP DATABASE IF EXISTS burgersDB;
CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE(
    id INT AUTO_INCREMENT,
    burger VARCHAR (100),
    devoured BOOLEAN, 
    PRIMARY KEY (id)
);
INSERT INTO burgers(id, burger, devoured)
VALUES (1, "Kansas City Burger", false), (2, "Bangkok Burger", false), (3, "Urban Burger", false);


