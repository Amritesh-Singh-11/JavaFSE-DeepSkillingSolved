CREATE OR REPLACE PROCEDURE TransferFunds
(
    p_sourceAccount IN NUMBER,
    p_targetAccount IN NUMBER,
    p_amount IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_sourceAccount;
    IF v_balance >= p_amount THEN
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_sourceAccount;
        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_targetAccount;
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer Successful');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');
    END IF;
END;
/
SET SERVEROUTPUT ON;
EXEC TransferFunds(101,102,2000);
SELECT * FROM Accounts;
/* Output
AccountID CustomerName AccountType Balance
--------- ------------ ----------- -----------
101       John         Savings    8000
102       Alice        Savings    17150
103       Bob          Current    20000
*/