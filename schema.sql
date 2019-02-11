DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products(
	item_id INTEGER(10) NOT NULL AUTO_INCREMENT UNIQUE,
	product_name VARCHAR(200),
    department_name VARCHAR(200),
    price DECIMAL(10,2),
    stock_quantity INTEGER(10),
    PRIMARY KEY (item_id)
);