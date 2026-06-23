--Apply a 1% discount to loan interest rates for customers above 60.
BEGIN
    FOR rec IN (
        SELECT l.LoanID
        FROM Loans l
        JOIN Customers c
        ON l.CustomerID = c.CustomerID
        WHERE c.Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = rec.LoanID;
    END LOOP;

    COMMIT;
END;
/
SELECT LoanID, InterestRate
FROM Loans;
/*Output
LoanID     InterestRate
---------- ------------
101       9
102       8
103       7
*/
