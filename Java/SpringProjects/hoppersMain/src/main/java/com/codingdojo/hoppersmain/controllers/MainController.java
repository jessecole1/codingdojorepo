package com.codingdojo.hoppersmain.controllers;



import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String customer(Model model) {
		String name = "Grace Hopper";
		String itemName = "Copper Wire";
		double price = 5.25;
		String description = "Metal strips. Also an illustration of nanoseconds.";
		String vendor = "Little Things Corner Store";
		
		
		model.addAttribute("wholeName",name);
		model.addAttribute("itemsName", itemName);
		model.addAttribute("thePrice", price);
		model.addAttribute("theDescription", description);
		model.addAttribute("theVendor", vendor);
		
		return "index.jsp";
	}
}
