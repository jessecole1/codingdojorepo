package com.codingdojo.dojosAndNinjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.dojosAndNinjas.models.Dojo;
import com.codingdojo.dojosAndNinjas.models.Ninja;
import com.codingdojo.dojosAndNinjas.services.DojoService;
import com.codingdojo.dojosAndNinjas.services.NinjaService;

@Controller
public class DojoController {

	@Autowired
	DojoService dojoService;
	
	@Autowired
	NinjaService ninjaService;
	
	@GetMapping("/dojos")
	public String index(Model model) {
		List<Dojo> dojos = dojoService.getAll();
		model.addAttribute("dojos", dojos);
		return "index.jsp";
	}
	
	@GetMapping("/dojos/new")
	public String newDojo(@Valid @ModelAttribute("dojo") Dojo dojo,
			BindingResult result) {
		return "newDojo.jsp";
	}
	
	@PostMapping("/dojos/new")
	public String create(@Valid @ModelAttribute("dojo") Dojo dojo, 
			BindingResult result) {
		if (result.hasErrors()) {
			return ("newDojo.jsp");
		}
		else {
			dojoService.createDojo(dojo);
			return "redirect:/dojos";
		}
	}
	
	@GetMapping("/ninja/new")
	public String newNinja(@Valid @ModelAttribute("ninja") Ninja ninja,
			BindingResult result, Model model) {
		model.addAttribute("dojos", dojoService.getAll());
		return "newNinja.jsp";
	}
	
	@PostMapping("/ninja/new")
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja,
			BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "/ninja/new";
		}
		else {
			ninjaService.createNinja(ninja);
			return "redirect:/dojos";
		}
	}
	
	@GetMapping("/dojos/one/{id}")
	public String getOne(@PathVariable("id") Long id, Model model) {
		model.addAttribute("dojo", dojoService.findOne(id));
		System.out.println(id);
		return "one.jsp";
	}
	
}
