package com.codingdojo.daikichiRoutes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
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
		@RequestMapping("/travel/{city}")
		public String City(@PathVariable("city") String city) {
			return "Congratulations! You will soon travel to " + city;
		}
		@RequestMapping("/lotto/{num}")
		public String lotto(@PathVariable("num") int num) {
			if (num % 2 == 0) {
				return "You will take a grand journey in the near future, but be weary of tempting offers";
			}
			else {
				return "You have enjoyed the fruits of your labor but now is a great time to spend time"
						+ " with family and friends.";
			}
		}
	}
}
