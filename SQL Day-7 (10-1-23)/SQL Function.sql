CREATE TABLE Product_d
(
id INT PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
category VARCHAR(50) NOT NULL,
price INT NOT NULL
);


INSERT INTO Product_d
    
VALUES
(1, 'Book1', 'Cat1', 1800),
(2, 'Book2', 'Cat2', 1500),
(3, 'Book3', 'Cat3', 2000),
(4, 'Book4', 'Cat4', 1300),
(5, 'Book5', 'Cat5', 1500),
(6, 'Book6', 'Cat6', 5000);


Select name, category, price, 
LEAD(price, 2, -1) OVER (ORDER BY price) as Lead,
LAG(price, 2, -1) OVER (ORDER BY price) as Lag from Product_d;
 
select * from Product_d;


select name, category, price,
RANK() over (order by price DESC) as Rank,
DENSE_RANK() over (order by price DESC) as DenseRank
from Product_d;



CREATE TABLE t1 (
    id INT PRIMARY KEY
);

CREATE TABLE t2 (
    id INT PRIMARY KEY
);

INSERT INTO t1 VALUES (1),(2),(3);
INSERT INTO t2 VALUES (2),(3),(4);


SELECT id FROM t1
MINUS
SELECT id FROM t2;



(SELECT id 
FROM t1)
INTERSECT
(SELECT id
FROM t2);
