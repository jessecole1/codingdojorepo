package com.codingdojo.burgertrackerone.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.codingdojo.burgertrackerone.models.Burger;
import com.codingdojo.burgertrackerone.repositories.BurgerRepository;

@Service
public class BurgerService {

	private final BurgerRepository burgerRepository;
	
	public BurgerService(BurgerRepository burgerRepository) {
		// TODO Auto-generated constructor stub
		this.burgerRepository = burgerRepository;
	}
	
	public List<Burger> allBurgers() {
		return burgerRepository.findAll();
	}
	
	public Burger createBurger(Burger b) {
		return burgerRepository.save(b);
	}

}
