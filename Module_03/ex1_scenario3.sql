--Print reminders for loans due within 30 days.
SET SERVEROUTPUT ON;

BEGIN
    FOR rec IN (
        SELECT c.Name,
               l.LoanID,
               l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate <= SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: ' ||
            rec.Name ||
            ', Loan ' ||
            rec.LoanID ||
            ' is due on ' ||
            TO_CHAR(rec.DueDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/
/*Output: Reminder: John, Loan 101 is due on 13-JUL-2026
Reminder: Bob, Loan 103 is due on 03-JUL-2026
PL/SQL procedure successfully completed.*/