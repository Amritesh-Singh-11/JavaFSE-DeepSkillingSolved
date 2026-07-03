package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Spring will use this setter method to inject the BookRepository bean
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void logBookAddition() {
        System.out.println("Service: Adding a new book...");
        bookRepository.saveData();
    }
}