
/*What is Big O Notation?
Big O notation describes how the running time of an algorithm grows as the input size (n) increases.
It helps us:
1. Compare algorithms.
2. Predict performance for large datasets.
3. Choose the most efficient solution.
Search Operation Cases
1. Best Case
Element found immediately.
2. Average Case
Element found somewhere in the middle.
3. Worst Case
Element is:
(i) Last element, or
(ii) Not present.*/

//Product Class
class Product {

    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}

//Linear Search
public class Search {

    public static Product linearSearch(Product[] products, int id) {

        for(Product p : products) {
            if(p.productId == id)
                return p;
        }

        return null;
    }

//Binary Search
    public static Product binarySearch(Product[] products, int id) {

        int low = 0;
        int high = products.length - 1;

        while(low <= high) {

            int mid = low + (high - low) / 2;

            if(products[mid].productId == id)
                return products[mid];

            if(products[mid].productId < id)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101,"Laptop","Electronics"),
            new Product(102,"Phone","Electronics"),
            new Product(103,"Shoes","Fashion"),
            new Product(104,"Watch","Accessories")
        };

        Product p1 = linearSearch(products,104);

        if(p1!=null)
            System.out.println("Found using Linear Search: "
                    + p1.productName);

        Product p2 = binarySearch(products,104);

        if(p2!=null)
            System.out.println("Found using Binary Search: "
                    + p2.productName);
    }
}

//Output:
//Found using Linear Search: Watch
//Found using Binary Search: Watch

/*Time Complexity Analysis
Feature	         Linear Search	Binary Search
Best Case	            O(1)	     O(1)
Average Case            O(n)	     O(log n)
Worst Case	            O(n)	     O(log n)
Requires Sorting	    No	         Yes

Better for an E-commerce Platform?
Binary Search is more suitable because:
1. Product catalogs can contain thousands or millions of products.
2. Search operations happen very frequently.
3. Binary Search provides O(log n) time complexity.
4. Much faster than Linear Search for large datasets.*/