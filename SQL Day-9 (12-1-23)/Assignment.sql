Create table student (Fname varchar(255), Lname varchar(255), DoB date, addres varchar(255));

Insert into student (Fname, Lname, DoB, addres) values 
('Aman', 'Shah', '1982-01-06', 'Bhopal'),
('Aman', 'Shah', '1982-01-06', 'Bhopal'),
('Ravi', 'Yadav', '1984-09-28',	'ManiNagar'),
('Ravi', 'Yadav', '1984-09-28',	'ManiNagar');

select * from student;

select Fname, Lname, DoB, addres from student GROUP by Fname, Lname, 
DoB, addres having count(Fname) > 1;



