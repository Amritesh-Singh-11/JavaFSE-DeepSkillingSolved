-- Accounts table
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    AccountType VARCHAR2(20),
    Balance NUMBER
);

-- Employees table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER
);
-- Sample Accounts
INSERT INTO Accounts VALUES (101,'John','Savings',10000);
INSERT INTO Accounts VALUES (102,'Alice','Savings',15000);
INSERT INTO Accounts VALUES (103,'Bob','Current',20000);
-- Sample Employees
INSERT INTO Employees VALUES (1,'Raj','IT',50000);
INSERT INTO Employees VALUES (2,'Priya','IT',60000);
INSERT INTO Employees VALUES (3,'Amit','HR',45000);
COMMIT;