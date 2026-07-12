package com.cognizant.spring_jwt_auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringJwtAuthApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringJwtAuthApplication.class, args);
	}

}
/*Output:
Tomcat started on port 8090 (http) with context path '/'
Started SpringJwtAuthApplication

curl.exe -u user:pwd http://localhost:8090/authenticate
{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzgzODQ5MTM3LCJleHAiOjE3ODM4NTAzMzd9.ublQzx7PinOsd0_f0c1iU0uMs9DFEx0DCtuR0Mhw_hw"}
 */