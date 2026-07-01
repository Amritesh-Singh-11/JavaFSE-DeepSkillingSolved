package exercise_05;

public class MyService {
    private final ExternalAPI externalApi;

    // Dependency Injection via Constructor
    public MyService(ExternalAPI externalApi) {
        this.externalApi = externalApi;
    }

    public String fetchData() {
        // This method relies completely on the external API
        return externalApi.getData();
    }
}
