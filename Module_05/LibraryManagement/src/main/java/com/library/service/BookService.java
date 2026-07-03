package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    // 1. Define the dependency reference
    private BookRepository bookRepository;

    // 2. The Setter Method required for Spring XML Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void logBookAddition() {
        System.out.println("Service: Adding a new book...");
        // Calling a method on the injected dependency
        bookRepository.saveData();
    }
}