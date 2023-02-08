package com.codingdojo.burgertrackerone.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.burgertrackerone.models.Burger;
import com.codingdojo.burgertrackerone.services.BurgerService;

@Controller
public class BurgerController {

	@Autowired
	BurgerService burgerService;
	
	@GetMapping("/burger")
	public String index(Model model, @ModelAttribute("burger") Burger burger,
			BindingResult result) {
		List<Burger> burgers = burgerService.allBurgers();
		
		model.addAttribute("burgers", burgers);
		
		return "index.jsp";
	}
	
	@PostMapping("/burger")
	public String create(@Valid @ModelAttribute("burger") Burger burger, 
			BindingResult result) {
		if (result.hasErrors()) {
			return ("index.jsp");
		} else {
			burgerService.createBurger(burger);
		}
		
		return "redirect:/burger";
	}

}
