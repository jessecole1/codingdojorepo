package com.codingdojo.hellohuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class HelloHumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloHumanApplication.class, args);
	}
	
	@RestController
	public class HumanController {
		@RequestMapping("/")
		public String Hello(@RequestParam(value="name", required=false)String searchQuery, @RequestParam(value="last_name", required=false)String searchQueryy) {
			if (searchQuery == null) {
				return "Hello Human";
			}
			else {
				return "Hello " + searchQuery + " " + searchQueryy;
			}
		}
	}

}
