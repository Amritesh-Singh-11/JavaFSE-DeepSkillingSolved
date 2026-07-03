
//Implementing the Factory Method Pattern
//Scenario: You are developing a document management system that needs to create different types 
// of documents (e.g., Word, PDF, Excel). Use the Factory Method Pattern to achieve this.

interface Document {
    void open();
}

class WordDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening Word Document");
    }
}

class PdfDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening PDF Document");
    }
}

class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening Excel Document");
    }
}

abstract class DocumentFactory {
    public abstract Document createDocument();

    public void openDocument() {
        Document document = createDocument();
        document.open();
    }
}

class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}

class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}

public class FactoryMethodPatternExample {

    public static void main(String[] args) {

        DocumentFactory wordFactory = new WordDocumentFactory();
        wordFactory.openDocument();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        pdfFactory.openDocument();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        excelFactory.openDocument();
    }
}

/*Output:
Opening Word Document
Opening PDF Document
Opening Excel Document*/