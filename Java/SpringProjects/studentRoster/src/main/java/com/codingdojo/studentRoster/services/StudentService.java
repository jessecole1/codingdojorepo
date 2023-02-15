package com.codingdojo.studentRoster.services;

import org.springframework.stereotype.Service;

import com.codingdojo.studentRoster.models.Student;
import com.codingdojo.studentRoster.repositories.StudentRepository;

@Service
public class StudentService {

	private final StudentRepository studentRepository;
	
	public StudentService(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}
	
	public void createStudent(Student student) {
		studentRepository.save(student);
	}
}