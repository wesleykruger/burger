CREATE DATABASE IF NOT EXISTS  ei74wycbme4eiz8c;
USE DATABASE ei74wycbme4eiz8c;
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(50) NOT NULL DEFAULT '',
    devoured BOOLEAN NOT NULL DEFAULT false
);