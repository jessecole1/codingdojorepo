package com.codingdojo.fruityloops.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
		
	@RequestMapping("/")
	public String index(Model model) {
		ArrayList<Item> Fruits = new ArrayList<Item>();
		Fruits.add(new Item("Kiwi", 1.5));
		Fruits.add(new Item("Mango", 2.0));
		Fruits.add(new Item("Gogi berries", 4.0));
		Fruits.add(new Item("Guava", .75));
		
		model.addAttribute("Fruits", Fruits);
		
		return "index.jsp";
	}
}