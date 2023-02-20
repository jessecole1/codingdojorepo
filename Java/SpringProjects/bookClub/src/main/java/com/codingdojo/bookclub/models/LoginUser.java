package com.codingdojo.bookclub.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class LoginUser {
	
	@NotEmpty(message="Please provide email")
	@Email(message="Enter valid email")
	private String email;
	
	@NotEmpty(message="Please provide password")
	@Size(min=8, max=128, message="Betweeen 8 and 18 characters")
	private String password;

	public LoginUser() {
		// TODO Auto-generated constructor stub
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
