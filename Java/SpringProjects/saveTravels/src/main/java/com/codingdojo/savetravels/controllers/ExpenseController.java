package com.codingdojo.savetravels.controllers;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.savetravels.models.Expense;
import com.codingdojo.savetravels.services.ExpenseService;

@Controller
public class ExpenseController {
	
	@Autowired
	ExpenseService expenseService;
	
	@GetMapping("/expense")
	public String index(Model model, @ModelAttribute("expense") Expense expense,
			BindingResult result) {
		List<Expense> expenses = expenseService.allExpenses();
		
		model.addAttribute("expenses", expenses);
		
		return "index.jsp";
	}
	
	@PostMapping("/expense")
	public String create(@Valid @ModelAttribute("expense") Expense expense,
			BindingResult result) {
		if (result.hasErrors()) {
			return("index.jsp");
		}
		else {
			expenseService.createExpense(expense);
		}
		return "redirect:/expense";
	}
	
	// THIS ROUTE WILL BE LOOPED THROUGH THE INDEX.JSP PAGE FOR EACH EXPENSE
	// ROUTE ATTRIBUTE (@GetMapping) AND THE NAME ("/expense/edit/{id}")
	// GATHER "id" FROM THE JSP FILE 
	@GetMapping("/expense/edit/{id}")
	
	// CREATE A FUNCTION WHICH RETURNS A STRING CALLED "edit"
	//USING (@PathVariable) TO COLLECT A VARIABLE FROM THE ROUTE WHICH IS CALLED ID,
	// AND REFERENCED AS (Long id)
	// PASSING IN MODEL
	public String edit(@PathVariable("id") Long id, Model model) {
		
		// CREATING AN INSTANCE OF THE 'EXPENSE' CLASS CALLED 'expense'
		// SETTING 'expense' EQUAL TO THE RESULT OF THE FUNCTION INSIDE THE 
		// EXPENSE SERVICE CLASS CALLED 'findExpense' WHICH USES THE ID PASSED 
		// FROM THE ROUTE URL
		Expense expense = expenseService.findExpense(id);
		
		// ADDING THE RETURN VALUE FROM THE SERVICE FUNCTION (WHICH IS TEMPORARILY
		// CALLED 'expense') AND ADDING IT TO THE MODEL WHICH WILL BE USED AS 
		// REFERENCE CALLED "expense"
		model.addAttribute("expense", expense);
		
		// SENDING USE TO EDIT.JSP PAGE
		return "edit.jsp";
	}
	
	// CREATING A ROUTE METHOD TO TAKE THE ACTION OF REPLACING AN INSTANCE, OTHERWISE
	// UPDATING 
	// WHILE NAMING THE ROUTE, ON A PREVIOUS ASSIGMNET I AM USING A "/{id}" IN THE 
	// URL 
	// GOING TO TRY WITHOUT AN 'id' PASSED IN THE URL
	
	// === SO, WITHOUT PUTTING IN THE "{id}", EVERY TIME YOU UPDATE A SAVED
	// INTANCE, OR EXPENSE IN THIS EXAMPLE, IT WILL CREATE THE UPDATED INSTANCE
	// BUT ALSO KEEP THE OLD ONE SO YOU END UP WITH TWO. IN THE END, MAKE SURE 
	// TO HAVE THE "{id}" IN THE URL FOR THE POST ROUTE
	@RequestMapping(value="/expense/edit/{id}", method=RequestMethod.PUT)
	public String edit(@Valid @ModelAttribute("expense") Expense expense, 
			BindingResult result) {
		if (result.hasErrors()) {
			return "edit.jsp";
		}
		else {
			expenseService.updateExpense(expense);
		}
		return "redirect:/expense";
	}
	
	@GetMapping("/expense/one/{id}")
	public String getOne(@PathVariable("id") Long id, Model model) {
		Expense expense = expenseService.findExpense(id);
		model.addAttribute("expense",expense);
		return "one.jsp";
	}
	
	@RequestMapping(value="/expense/delete/{id}", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id) {
		expenseService.deleteExpense(id);
		return "redirect:/expense";
	}
	
	@RequestMapping("/return")
	public String home() {
		return "redirect:/expense";
	}
	
}
