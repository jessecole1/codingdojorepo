package com.codingdojo.bookclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.repositories.BookRepository;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepo;

	public List<Book> findAll() {
		return bookRepo.findAll();
	}
	
	public Book createBook(Book newBook) {
		return bookRepo.save(newBook);
	}
	
	public Book getById(Long bookId) {
		Optional<Book> book = bookRepo.findById(bookId);
		System.out.println(book);
		if(!book.isPresent()) {
			return null;
		}
		return book.get();
	}

}
