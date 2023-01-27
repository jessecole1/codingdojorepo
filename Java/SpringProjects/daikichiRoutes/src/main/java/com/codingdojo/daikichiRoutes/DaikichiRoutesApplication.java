package com.codingdojo.daikichiRoutes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class DaikichiRoutesApplication {

	public static void main(String[] args) {
		SpringApplication.run(DaikichiRoutesApplication.class, args);
	}
	
	@RestController
	@RequestMapping("/daikichi")
	public class index {
		@RequestMapping("")
		public String Welcome() {
			return "Welcome!";
		}
		@RequestMapping("/today")
		public String today() {
			return "Today you will find luck in all your endeavors!";
		}
		@RequestMapping("/tomorrow")
		public String tomorrow() {
			return "Tomorrow, a new opportunity will arise, so be sure to be open to new ideas!";
		}
	}
}
