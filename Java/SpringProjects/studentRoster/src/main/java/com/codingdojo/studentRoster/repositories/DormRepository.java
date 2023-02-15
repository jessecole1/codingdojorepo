package com.codingdojo.studentRoster.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.studentRoster.models.Dorm;

public interface DormRepository extends CrudRepository<Dorm, Long> {
	List<Dorm> findAll();
}
