package com.codingdojo.mvc.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.mvc.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long>{
	// retrieves all the books from the database
	List<Book> findAll();
	
	// finds books with the description containing the search string
	List<Book> findByDescriptionContaining(String search);
	
	// counts how many titles contains a certain string
	Long countByTitleContaining(String search);
	
	// deletes a book that starts with a specific title
	Long deleteByTitleStartingWith(String search);
	
	

}
