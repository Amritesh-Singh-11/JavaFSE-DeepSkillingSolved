package exercise_06;

public class MyService {
    private final ExternalAPI externalApi;

    public MyService(ExternalAPI externalApi) {
        this.externalApi = externalApi;
    }

    public void performAction(String actionName) {
        // Business logic execution...
        String formattedMessage = "Action executed: " + actionName;

        // We need to verify that this exact call happens during our test
        externalApi.logAction(formattedMessage);
    }
}