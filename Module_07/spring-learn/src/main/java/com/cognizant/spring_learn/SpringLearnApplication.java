package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER =
			LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {

		LOGGER.info("Starting SpringLearnApplication...");

		SpringApplication.run(SpringLearnApplication.class, args);

		LOGGER.info("SpringLearnApplication started successfully.");
	}
}
/*Output:
Tomcat started on port 8080 (http) with context path '/'
Started SpringLearnApplication in 19.954 seconds (process running for 20.912)
SpringLearnApplication started successfully.*/