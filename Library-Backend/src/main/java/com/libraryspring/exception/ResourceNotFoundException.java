package com.libraryspring.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


//whenever data not found will give the exception and will return not found status
@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	public  ResourceNotFoundException(String message) {
		super (message);
	}
}

