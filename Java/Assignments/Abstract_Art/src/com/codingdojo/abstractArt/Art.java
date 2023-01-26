package com.codingdojo.abstractArt;

public abstract class Art {
	private String title;
	private String author;
	private String description;
	
	
	// ===== Getters and Setters ===== //
	
	
	public abstract void viewArt();
	
	// === Title === //
	public String getTitle() {
		return this.title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	// === Author === //
	public String getAuthor() {
		return this.author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	
	// === Description === //
	public String getDescription() {
		return this.description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
