package exercise_04;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    // This instance variable acts as our test fixture
    private Calculator calculator;

    // @Before runs once BEFORE every individual @Test method
    @Before
    public void setUp() {
        System.out.println("Setting up: Initializing Calculator instance.");
        calculator = new Calculator();
    }

    // @After runs once AFTER every individual @Test method
    @After
    public void tearDown() {
        System.out.println("Tearing down: Cleaning up Calculator instance.");
        calculator = null;
    }

    @Test
    public void testAdditionUsingAAA() {
        // 1. ARRANGE: Set up the data and inputs required for the test
        int number1 = 10;
        int number2 = 5;
        int expectedResult = 15;

        // 2. ACT: Execute the actual method under test
        int actualResult = calculator.add(number1, number2);

        // 3. ASSERT: Verify that the outcome matches expectations
        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testSubtractionUsingAAA() {
        // 1. ARRANGE
        int number1 = 20;
        int number2 = 8;
        int expectedResult = 12;

        // 2. ACT
        int actualResult = calculator.subtract(number1, number2);

        // 3. ASSERT
        assertEquals(expectedResult, actualResult);
    }
}