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

import com.codingdojo.productsandcategories.models.Product;
import com.codingdojo.productsandcategories.services.CategoryService;
import com.codingdojo.productsandcategories.services.ProductService;

@Controller
public class ProductController {
	
	@Autowired
	private ProductService productServ;
	
	@Autowired
	private CategoryService categoryServ;
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("products", productServ.getAll());
		model.addAttribute("categories", categoryServ.getAll());
		return "index.jsp";
	}

	@GetMapping("/product/new")
	public String newProduct(@ModelAttribute("newProduct") Product newProduct,
			BindingResult result, Model model) {
		
		return "newproduct.jsp";
	}
	
	@PostMapping("/product/new")
	public String createProduct(@Valid @ModelAttribute("newProduct") Product newProduct,
			BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "newproduct.jsp";
		}
		productServ.save(newProduct);
		return "redirect:/";
	}
	
	@GetMapping("/product/{product_id}")
	public String oneProduct(@PathVariable("product_id") Long productId,
			Model model) {
		model.addAttribute("product", productServ.getById(productId));
		return "oneproduct.jsp";
	}


}
