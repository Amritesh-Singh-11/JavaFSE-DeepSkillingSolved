import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        // Load the Spring container configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Ask the container for the managed service bean
        BookService bookService = context.getBean("bookService", BookService.class);

        // Execute logic
        bookService.logBookAddition();
    }
}

//Output:
/*Service: Adding a new book...
Book data saved successfully to the database!*/