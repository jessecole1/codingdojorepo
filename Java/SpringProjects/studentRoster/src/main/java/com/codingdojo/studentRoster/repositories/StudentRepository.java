package com.codingdojo.studentRoster.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.studentRoster.models.Student;

public interface StudentRepository extends CrudRepository<Student, Long> {
	List<Student> findAll();
}
