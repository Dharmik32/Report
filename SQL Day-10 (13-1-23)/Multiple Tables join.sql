create table product
(
    recid int not null primary key,
    mfrid int not null,
    description varchar(255),
    price int,
    qty int
);


create table office
(
    recid int not null,
    city varchar(255),
    region varchar(255),
    manager varchar(255),
    targetsales int,
    actualsales int,
    primary key (recid)
);


Create Table salesreps
(
    recid int NOT NULL,
    name varchar(255),
    officeid int,
    designation varchar(255),
    hiredate date,
    manager varchar(255),
    quota int,
    sales int,
    age int,
    primary key(recid),
    foreign key (officeid) references office(recid)
);


create table customer
(
    recid int not null,
    company varchar(255),
    salesrepsid int not null,
    creditlimit int,
    primary key (recid),
    foreign key (salesrepsid) references salesreps(recid)
);


create table orders
(
    recid int not null,
    customerid int,
    orderdate date,
    salesrepsid int,
    productid int,
    qty int,
    amount int,
    primary key(recid),
    foreign key (salesrepsid) references salesreps(recid),
    foreign key (customerid) references customer(recid),
    foreign key (productid) references product(recid)
);


Insert Into product (recid, mfrid, description, price, qty) values
(1, 1, 'PEN', 100, 60),
(2, 2, 'Pencil', 20, 100),
(3, 3, 'Watch', 500, 10);


Insert Into office (recid, city, region, manager, targetsales, actualsales) values
(1, 'Jaipur', 'Eastern', 'Rakesh', 80000, 25000),
(2, 'Jaipur', 'Eastern', 'Dev', 90000, 30000),
(3, 'Ahmedabad', 'Metro Station', 'Jay', 88000, 64000);



Insert Into salesreps (recid, name, officeid, designation, hiredate, manager, quota, sales, age) values
(1, 'Kamlesh', 1, 'Account manager', '2006-01-01', 'Mehul', 10, 10000, 21),
(2, 'Rajesh', 2, 'Sales manager', '2005-12-25', 'Raju', 11, 12000, 21),
(3, 'Dharam', 3, 'Account executive', '2005-11-20', 'Rahul', 12, 11000, 22);


Insert Into customer (recid, company, salesrepsid, creditlimit) values
(1, 'ABC', 1, 25000),
(2, 'DEF', 2, 32000),
(3, 'XYZ', 3, 46000);

Insert Into orders (recid, customerid, orderdate, salesrepsid, productid, qty, amount) values
(1, 1, '2015-11-23', 1, 1, 3, 12000),
(2, 2, '2019-12-12', 2, 2, 2, 10000),
(3, 3, '2020-07-08', 3, 3, 4, 8000);

select * from product;

select * from office;

select * from salesreps;

select * from customer;

select * from orders;


select sale.name, cus.company, o.orderdate, offi.city,
offi.region, offi.manager from orders as o inner join customer as cus ON
cus.recid = o.customerid inner join salesreps as sale ON
sale.recid = cus.salesrepsid inner join office as offi ON
offi.recid = sale.officeid inner join product as pro ON
pro.recid = o.productid; 


select s.name, cus.company, offi.city, offi.region, s.designation, 
s.hiredate, s.age, s.sales from salesreps as s join office as offi
on offi.recid = s.officeid join orders as o
on o.salesrepsid = s.recid join customer as cus 
on cus.salesrepsid = s.recid join product as p 
on p.recid = o.productid;

select pro.description, pro.price, pro.qty, ord.productid, ord.qty, 
ord.amount from product as pro inner join orders as ord
on pro.recid = ord.productid join salesreps as sale
on sale.recid = ord.salesrepsid join customer as cus
on cus.recid = ord.customerid join office as offi
on offi.recid = sale.officeid;

