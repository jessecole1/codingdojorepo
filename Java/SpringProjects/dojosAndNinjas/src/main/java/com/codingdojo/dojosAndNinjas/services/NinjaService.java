package com.codingdojo.dojosAndNinjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.dojosAndNinjas.models.Ninja;
import com.codingdojo.dojosAndNinjas.repositories.NinjaRepository;

@Service
public class NinjaService {
	
	private final NinjaRepository ninjaRepository;
	
	public NinjaService(NinjaRepository ninjaRepository) {
		this.ninjaRepository = ninjaRepository;
	}
	
	public void createNinja(Ninja ninja) {
		ninjaRepository.save(ninja);
	}
	
	public List<Ninja> getAll() {
		return ninjaRepository.findAll();
	}
	
	public Optional<Ninja> findOne(Long id) {
		return ninjaRepository.findById(id);
	}


}
