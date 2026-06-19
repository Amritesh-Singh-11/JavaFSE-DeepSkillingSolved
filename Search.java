//What is Big O Notation?
//Big O notation describes how the running time of an algorithm grows as the input size (n) increases.
//It helps us:
//Compare algorithms.
//Predict performance for large datasets.
//Choose the most efficient solution.
//Search Operation Cases
//Best Case
//Element found immediately.
//Average Case
//Element found somewhere in the middle.
//Worst Case
//Element is:
//Last element, or
//Not present.

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

public class Search {

    public static Product linearSearch(Product[] products, int id) {

        for(Product p : products) {
            if(p.productId == id)
                return p;
        }

        return null;
    }

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
