DROP DATABASE IF EXISTS bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100),
    department_name VARCHAR(50),
    price DECIMAL(13,4),
    stock_quantity INTEGER (5),
    PRIMARY KEY (id)
);

