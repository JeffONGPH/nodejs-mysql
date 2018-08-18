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

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES
	("Rice cooker", "home appliances", 45, 10000),
	("Burton snow board","ski",599.99,300),
    ("Sushi grade salmon","seafood",89.99,200),
    ("Tuna alive in a fish tank","seafood",499.89,300),
    ("Bieber fan repellant","self defense",299.89,700),
    ("Macbook Pro 2018","ski",999.99,500),
    ("Marmalade","processed food",599.99,300),
    ("Taser Gun","toys",100.19,600),
    ("Parker Pen","office",49.99,300),
    ("Shredder","office",299.99,400);
