package com.codingdojo.controllersPractice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class ControllersPracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ControllersPracticeApplication.class, args);
	}
	
@RestController
public class HomeController {
    @RequestMapping("/")
    public String hello() {
            return "Hello World!";
    }
}
}