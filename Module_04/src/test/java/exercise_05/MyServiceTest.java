package exercise_05;

// Core JUnit imports
import org.junit.Test;
import static org.junit.Assert.assertEquals;

// Core Mockito imports (Crucial for when() and mock() to resolve)
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Explicitly use Mockito class to avoid resolution bugs
        ExternalAPI mockApi = Mockito.mock(ExternalAPI.class);

        // Mockito.when provides the entry point for stubbing data
        Mockito.when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }
}