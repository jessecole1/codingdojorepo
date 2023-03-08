package com.codingdojo.productsandcategories.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.productsandcategories.models.Category;
import com.codingdojo.productsandcategories.models.Product;
import com.codingdojo.productsandcategories.services.CategoryService;
import com.codingdojo.productsandcategories.services.ProductService;

@Controller
public class CategoryController {

	@Autowired
	private CategoryService categoryServ;
	
	@Autowired
	private ProductService productServ;
	
	@GetMapping("/category/new")
	public String createCategory(@ModelAttribute("category") Category newCategory,
			BindingResult result,
			Model model) {
		
		return "newcategory.jsp";
	}
	
	@PostMapping("/category/new")
	public String addCategory(@Valid @ModelAttribute("category") Category newCategory,
			BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "newcategory.jsp";
		}
		categoryServ.save(newCategory);
		
		return "redirect:/";
	}
	
	@GetMapping("/category/{category_id}")
	public String oneCategory(@PathVariable("category_id") Long categoryId,
			@ModelAttribute("category") Product category,
			Model model) {
		model.addAttribute("category", categoryServ.getById(categoryId));
		model.addAttribute("productss", productServ.getAll());
		System.out.println(productServ.getAll());
		return "onecategory.jsp";
	}

}
