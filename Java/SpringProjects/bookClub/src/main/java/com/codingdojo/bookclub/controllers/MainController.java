package com.codingdojo.bookclub.controllers;

import java.util.Optional;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.models.LoginUser;
import com.codingdojo.bookclub.models.User;
import com.codingdojo.bookclub.services.BookService;
import com.codingdojo.bookclub.services.UserService;

@Controller
public class MainController {

	@Autowired
	private UserService userServ;
	
	@Autowired BookService bookServ;
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		
		return "index.jsp";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, 
			BindingResult result, Model model, HttpSession session) {
//		System.out.println("One");
//		System.out.println("Service 4");
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			System.out.println("Two");
			return "index.jsp";
		}
		userServ.register(newUser, result);
		session.setAttribute("userId", newUser.getId());
		
		return "redirect:/dashboard";
	}
	
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin,
			BindingResult result, Model model, HttpSession session) {
		User user = userServ.login(newLogin, result);
		if(result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		session.setAttribute("userId", user.getId());
		return "redirect:/dashboard";
	}
	
	@GetMapping("/dashboard")
	public String dashboard(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user",user);
		model.addAttribute("books", bookServ.findAll());
		return "dashboard.jsp";
	}
	
	@GetMapping("/new/book")
	public String newBook(@Valid @ModelAttribute("newBook") Book newBook, 
			BindingResult result, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user", user);
		return "newbook.jsp";
	}
	
	@PostMapping("/new/book")
	public String addBook(@Valid @ModelAttribute("newBook") Book newBook,
			BindingResult result) {
		if(result.hasErrors()) {
			return "newbook.jsp";
		}
		bookServ.createBook(newBook);
		
		return "redirect:/dashboard";
	}
	
	@GetMapping("/one/book/{bookId}")
	public String getOne(@PathVariable("bookId") Long bookId, Model model,
			HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user",user);
		Book book = bookServ.getById(bookId);
		model.addAttribute("book", book);
		return "onebook.jsp";
	}
	
	@GetMapping("/logout")
	public String logout (HttpSession session) {
		session.setAttribute("userId", null);
		return "redirect:/";
	}

}
