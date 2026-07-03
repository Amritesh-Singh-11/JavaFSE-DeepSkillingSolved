import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Bootstrap the Spring container from the classpath configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Request the fully-assembled BookService bean
        BookService bookService = context.getBean("bookService", BookService.class);

        // Execute the method to verify DI is active
        bookService.logBookAddition();
    }
}

/*Output:
Service: Adding a new book...
Book data saved successfully to the database!
 */