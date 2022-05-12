package com.libraryspring.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.libraryspring.repository.BookRepository;
import com.libraryspring.exception.ResourceNotFoundException;

import com.libraryspring.model.Book;
@RestController
@RequestMapping("/api/v1/")
public class BookController {
	@Autowired
	private BookRepository bookRepository;
	
	//get all books
	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return bookRepository.findAll();
	}
	
	@PostMapping("/books")
	//add book to library
	public Book addBook(@RequestBody Book book) {
		return bookRepository.save(book);
	}
	
	//get book by id
	@GetMapping("/books/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable Long id ) {
		Book book =bookRepository.findById(id).orElseThrow(() ->
		new ResourceNotFoundException("Book with  "+id +" does not exist"));
	 return ResponseEntity.ok(book);
	}
	
	//update book details
	@PutMapping("/books/{id}")
	public ResponseEntity<Book> updateBookDetails(@PathVariable Long id, @RequestBody Book bookDetails){
		Book book =bookRepository.findById(id).orElseThrow(() ->
		new ResourceNotFoundException("Book with  "+id +" does not exist"));
		book.setBookName(bookDetails.getBookName());
		book.setAuthor(bookDetails.getAuthor());
		book.setGenre(bookDetails.getGenre());
		
		return ResponseEntity.ok(bookRepository.save(book));
	}

	//Delete book
	@DeleteMapping("/books/{id}")
	public void deleteBook(@PathVariable Long id){
		
		bookRepository.deleteById(id);
		
	}
}
