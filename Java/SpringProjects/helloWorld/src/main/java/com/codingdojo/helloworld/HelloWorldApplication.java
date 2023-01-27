package com.codingdojo.helloworld;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

@RestController
public class HelloWorldApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloWorldApplication.class, args);
	}
	
	@RequestMapping("/")
	// Method that maps to the request route above
	public String hello() {
		return "Hello World!";
	}
	
	@RequestMapping("/jesse")
	
	public String myGreeting() {
		return "Hello everybody my name is Jesse";
	}

}
