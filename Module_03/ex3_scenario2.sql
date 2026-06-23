CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus
(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
AS
BEGIN
    UPDATE Employees
    SET Salary = Salary +
                 (Salary * p_bonus_percent / 100)
    WHERE Department = p_department;
    COMMIT;
END;
/
EXEC UpdateEmployeeBonus('IT',10);
SELECT * FROM Employees;
/* Output
EmployeeID EmployeeName   Department Salary
---------- -------------- ---------- -----------
1          Raj            IT         55000
2          Priya          IT         66000
3          Amit           HR         45000
*/