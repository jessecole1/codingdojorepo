package com.codingdojo.loginAndRegistration.models;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class LoginUser {

	@NotEmpty(message="Email is required")
	@Size(min=3, max=200, message="Email must be between 3 and 200 characters")
	private String email;
	
	@NotEmpty(message="Password is required")
	@Size(min=8, max=200, message="Password must be between 8 and 200 characters")
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
