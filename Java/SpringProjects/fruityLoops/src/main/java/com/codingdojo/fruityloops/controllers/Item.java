package com.codingdojo.fruityloops.controllers;

public class Item {
	
	// Member Variables
	private String name;
	private double price;
	
	// Constructor
	public Item(String name, double price) {
		this.name = name;
		this.price = price;
	}
	
	// Getters and Setters 
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public double getPrice() {
		return this.price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
}
