package Exercise_03;

// These imports are required for JUnit 4 to function
import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals: Passes if expected (5) matches actual (2 + 3)
        assertEquals(5, 2 + 3);

        // Assert true: Passes if the boolean condition evaluates to true
        assertTrue(5 > 3);

        // Assert false: Passes if the boolean condition evaluates to false
        assertFalse(5 < 3);

        // Assert null: Passes if the object reference is strictly null
        assertNull(null);

        // Assert not null: Passes if the object reference points to an actual instance
        assertNotNull(new Object());
    }
}