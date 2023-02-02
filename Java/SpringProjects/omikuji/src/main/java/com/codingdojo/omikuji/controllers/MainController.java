package com.codingdojo.omikuji.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

	@RequestMapping("/omikuji")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/send")
	public String send(
			@RequestParam(value="person", required=false) String person,
			@RequestParam(value="number", required=false) String number,
			@RequestParam(value="city", required=false) String city,
			@RequestParam(value="hobby", required=false) String hobby,
			@RequestParam(value="living", required=false) String living, 
			@RequestParam(value="nice", required=false) String nice,
			HttpSession session) {
		session.setAttribute("person",person);
		session.setAttribute("number",number);
		session.setAttribute("city",city);
		session.setAttribute("hobby",hobby);
		session.setAttribute("living",living);
		session.setAttribute("nice",nice);
		return "redirect:/dashboard";
	}
	
	@RequestMapping("/dashboard")
	public String dashboard(Model model, HttpSession session) {
		model.addAttribute("person", session.getAttribute("person"));
		model.addAttribute("number", session.getAttribute("number"));
		model.addAttribute("city", session.getAttribute("city"));
		model.addAttribute("hobby", session.getAttribute("hobby"));
		model.addAttribute("living", session.getAttribute("living"));
		model.addAttribute("nice", session.getAttribute("nice"));
		return "dashboard.jsp";
	}
}
