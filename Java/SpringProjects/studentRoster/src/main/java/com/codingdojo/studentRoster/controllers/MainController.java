package com.codingdojo.studentRoster.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.studentRoster.models.Dorm;
import com.codingdojo.studentRoster.models.Student;
import com.codingdojo.studentRoster.services.DormService;
import com.codingdojo.studentRoster.services.StudentService;

@Controller
public class MainController {

	@Autowired
	DormService dormService;
	
	@Autowired
	StudentService studentService;

	@GetMapping("/")
	private String index(Model model) {
		List<Dorm> dorms = dormService.getAll();
		model.addAttribute("dorms", dorms);
		return "index.jsp";
	}
	
	@GetMapping("/new/dorm")
	private String addDorm(@Valid @ModelAttribute("dorm") Dorm dorm, 
			BindingResult result) {
		
		return "newDorm.jsp";
	}
	
	@PostMapping("/new/dorm")
	private String newDorm(@Valid @ModelAttribute("dorm") Dorm dorm, 
			BindingResult result) {
		if (result.hasErrors()) {
			return "newDorm.jsp";
		}
		else {
			dormService.createDorm(dorm);
			return "redirect:/";
		}
	}
	
	@GetMapping("/new/student")
	private String newStudent(@Valid @ModelAttribute("student") Student student, 
			BindingResult result, Model model) {
		model.addAttribute("dorms", dormService.getAll());
		return "newStudent.jsp";
	}
	
	@PostMapping("/new/student")
	private String addStudent(@Valid @ModelAttribute("student") Student student, 
			BindingResult result) {
		if (result.hasErrors()) {
			return "newStudent.jsp";
		} else {
			studentService.createStudent(student);
			return "redirect:/";
		}
	}
	
	@GetMapping("/dorm/students/{dorm_id}")
	private String seeStudents(@PathVariable("dorm_id") Long id,Model model) {
		Dorm dorm = dormService.getById(id);
		model.addAttribute("dorm", dorm);
		System.out.println(dorm);
		return "seeStudents.jsp";
	}

}
