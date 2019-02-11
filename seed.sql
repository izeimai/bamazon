USE bamazon_db;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("scissors", "office", 1.25, 100),
("pen", "office", 0.25, 50),
("face mask", "health", 2.99, 10),
("marker", "office", 0.82, 100),
("poster", "home", 5.99, 20),
("folder", "office", 0.25, 200),
("coaster", "home", 10.99, 50),
("succulent", "home", 3.75, 20),
("laptop", "office", 1999.99, 10),
("paint", "home", 29.99, 100);

SELECT * FROM products;