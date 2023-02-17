package com.codingdojo.loginAndRegistration.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.loginAndRegistration.models.LoginUser;
import com.codingdojo.loginAndRegistration.models.User;
import com.codingdojo.loginAndRegistration.repositories.UserRepository;

@Service
public class UserService {

	private final UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	public void createUser(User user) {
		userRepository.save(user);
	}
	
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
	// This method in the UserService will be called when the controller 
	// calls to register a new user, creating a new User intance and saving
	// it to the database.
	public User register(User newUser, BindingResult result) {
		
		// First, check to see if there is already an email address being 
		// used for an account in the database. 
		// Set an value equal to the result of finding that potential email.
		Optional<User> optionalUser = userRepository.findByEmail(newUser.getEmail());
		
		// Next, if the optionalUser ends up having an email, we need to 
		// reject the method and send a message saying that the email
		// is already being used. 
		if (optionalUser.isPresent()) {
			result.rejectValue("email","Matches", "An account with that "
					+ "email already exists");
		} 
		
		// Also, we need to check if the password matches the confirm password
		if (!newUser.getPassword().equals(newUser.getConfirm())) {
			result.rejectValue("confirm", "Matches", "Both passwords must match");
		}
		
		if (result.hasErrors()) {
			return null;
		}
		// If there are no problems with any of the results, then we can move on.
		// Store the password in a hash
		String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
		newUser.setPassword(hashed);
		return userRepository.save(newUser);
	}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
	
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
	// this will be called for when a user logs in
	// passing in a LoginUser instance from the controller, 
	// which was created when the page was loaded through 
	// @ModelAttribute("newLogin) LoginUser newlogin
	
	public User login(LoginUser newLogin, BindingResult result) {
		
		// The user may not be part of the database, so we 
		// pass in Optional<User> optionalUser
		// giving optionalUser the value of the result of the 
		// findByEmail method in the UserRepository
		// - - - - - - - - - - - - - - - - - - - - - - - - -
		// What we pass into the findByEmail method in the UserRepository
		// is the result of what we get when we call the getEmail
		// getter method
		Optional<User> optionalUser = userRepository.findByEmail(newLogin.getEmail());
		
		// Running an if statement to see if the user is in the database.
		// To check to see if the user is in the database, use the
		// isPresent() method 
		// - - - - - - - - - - - - - - - - - - - - - - - - -
		// Say, "If optionalUser is not present in the database, - "
		if(!optionalUser.isPresent()) {
			// reject the value and return null. Send the message "User not 
			// found."
			result.rejectValue("email", "Matches", "User not found");
			return null;
			// If the user is indeed found in the database -
		} else {
			// Set the value of optional user to a new instance of User
			// called "user"
			User user = optionalUser.get();
			
			// Since we got the user information stored in "user", we will
			// run an if-statement to check if the instance of newLogin's 
			// password matches the password from the "user" instance we 
			// retrieved from the database.
			// If they don't match, reject the result and return "Invalid
			// Password."
			if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
				result.rejectValue("password", "Matches", "Invalid Password");
			} 
			// ***NOT REALLY SURE WHAT THE DIFFRERNCE IS BETWEEN THIS NEXT 
			// PART AND THE PREVIOUS PART?***
			// Also check if the result has any errors, if it does then 
			// return null.
			if(result.hasErrors()) {
				return null;
				
			}
			// Return "user."
			return user;
		}
	}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
	public User findById(Long id) {
		Optional<User> optionalUser = userRepository.findById(id);
		if(optionalUser.isPresent()) {
			return optionalUser.get();
		} else {
			return null;
		}
	}
	
}
