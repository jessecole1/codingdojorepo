package com.codingdojo.studentRoster.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.studentRoster.models.Dorm;
import com.codingdojo.studentRoster.repositories.DormRepository;

@Service
public class DormService {

	private final DormRepository dormRepository;
	
	public DormService(DormRepository dormRepository) {
		this.dormRepository = dormRepository;
	}
	
	public List<Dorm> getAll() {
		return dormRepository.findAll();
	}
	
	public void createDorm(Dorm dorm) {
		dormRepository.save(dorm);
	}
	
	public Dorm getById(Long id) {
		Optional<Dorm> optionalDorm = dormRepository.findById(id);
		if (optionalDorm.isPresent()) {
			return optionalDorm.get();
		} else {
			return null;
		}
	}

}
