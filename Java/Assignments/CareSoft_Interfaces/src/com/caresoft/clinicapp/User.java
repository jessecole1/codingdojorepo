package com.caresoft.clinicapp;

public class User {
	    protected Integer id;
	    protected int pin;
	    
	    // TO DO: Getters and setters
	    // Implement a constructor that takes an ID
	    
	    // ===== Constructor ===== //
	    public User(Integer id) {
	    	this.id = id;
	    }
	    
	    // ===== Getters and Setters ===== //
	    public Integer getId() {
	    	return this.id;
	    }
	    
	    public void setId(Integer newId) {
	    	this.id = newId;
	    }
	    
	    public int getPin() {
	    	return this.pin;
	    }
	    
	    public void setPin(int newPin) {
	    	this.pin = newPin;
	    }
}