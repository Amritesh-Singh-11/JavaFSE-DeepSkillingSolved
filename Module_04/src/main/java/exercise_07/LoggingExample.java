package exercise_07;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    // Create a logger instance tied specifically to this class
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        System.out.println("--- Starting Logging Demo ---");

        // ERROR Level: Used for serious system failures or crashes
        logger.error("This is an error message");

        // WARN Level: Used for unexpected events that don't halt execution but indicate potential issues
        logger.warn("This is a warning message");

        System.out.println("--- Logging Demo Finished ---");
    }
}