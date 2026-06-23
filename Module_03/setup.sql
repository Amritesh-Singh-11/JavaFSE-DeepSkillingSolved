CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);
INSERT INTO Customers VALUES (1,'John',65,15000,'FALSE');
INSERT INTO Customers VALUES (2,'Alice',45,5000,'FALSE');
INSERT INTO Customers VALUES (3,'Bob',70,20000,'FALSE');
INSERT INTO Loans VALUES (101,1,10,SYSDATE+20);
INSERT INTO Loans VALUES (102,2,8,SYSDATE+40);
INSERT INTO Loans VALUES (103,3,9,SYSDATE+10);
COMMIT;
/*Output: Table CUSTOMERS created.
Table LOANS created.
1 row inserted.
1 row inserted.
1 row inserted.
1 row inserted.
1 row inserted.
1 row inserted.
Commit complete.*/
