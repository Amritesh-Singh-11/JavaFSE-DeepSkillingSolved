package exercise_06;

import org.junit.Test;
import org.mockito.Mockito;

// Static import allows you to use verify() directly
import static org.mockito.Mockito.verify;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // 1. Arrange: Create the mock object
        ExternalAPI mockApi = Mockito.mock(ExternalAPI.class);
        MyService service = new MyService(mockApi);

        // 2. Act: Run the method under test with specific arguments
        service.performAction("Login");

        // 3. Assert/Verify: Ensure the service forwarded the exact argument to the mock API
        verify(mockApi).logAction("Action executed: " + "Login");
    }
}