CREATE TABLE Books_d
(
id INT PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
category VARCHAR(50) NOT NULL,
price INT NOT NULL
);


INSERT INTO Books_d
    
VALUES
(10, 'Book1', 'Cat1', 1800),
(8, 'Book2', 'Cat2', 1500),
(3, 'Book3', 'Cat3', 2000),
(7, 'Book4', 'Cat4', 1300),
(5, 'Book5', 'Cat5', 1500),
(1, 'Book6', 'Cat6', 5000),
(2, 'Book7', 'Cat7', 8000),
(4, 'Book8', 'Cat8', 5000),
(6, 'Book9', 'Cat9', 5400),
(9, 'Book10', 'Cat10', 3200);

EXECUTE sp_helpindex Books_d;

select * from Books_d;

ALTER TABLE Books_d
DROP CONSTRAINT PK__Books_d__3213E83FAD27D434
GO

CREATE CLUSTERED INDEX IX_tblBook_Price
ON Books_d(price ASC)

EXECUTE sp_helpindex Books_d;

SELECT * FROM Books_d;

CREATE NONCLUSTERED INDEX IX_tblBook_Name
ON Books_d(name ASC)