package com.codingdojo.counterproject.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String index(HttpSession session) {
		// if page hasnt been visited yet, set the variable "count" == 0
		if (session.getAttribute("count") == null) {
			session.setAttribute("count",0);
		}
		else {
			// if the page has been viewed
			Integer sessionCount = (Integer)session.getAttribute("count");
			session.setAttribute("count", sessionCount + 1);
			System.out.println(session.getAttribute("count"));
		}
		return "index.jsp";
	}
	
	@RequestMapping("/counter")
	public String counter(HttpSession session, Model model) {
		Integer viewCount = (Integer) session.getAttribute("count");
		model.addAttribute("viewCount", viewCount);
		return "count.jsp";
	}
}
