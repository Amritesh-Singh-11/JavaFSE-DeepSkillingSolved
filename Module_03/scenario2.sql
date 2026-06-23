--Set IsVIP = TRUE for customers with balance above 10000.
BEGIN
    FOR rec IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = rec.CustomerID;
    END LOOP;

    COMMIT;
END;
/
SELECT CustomerID, Name, IsVIP
FROM Customers;
/*Output
CustomerID Name   IsVIP
---------- ----- -----
1         John   TRUE
2         Alice  FALSE 
3         Bob    TRUE
*/