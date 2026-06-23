CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';
    COMMIT;
END;
/
EXEC ProcessMonthlyInterest;
SELECT * FROM Accounts;
/* Output
AccountID CustomerName AccountType Balance
--------- ------------ ----------- -----------
101       John         Savings     10100
102       Alice        Savings     15150
103       Bob          Current     20000
*/