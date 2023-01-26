package com.codingdojo.abstractArt;

public class Painting extends Art {
	private String paintType;
	
	// ===== Constructor ===== //
	
	public Painting() {
		
	}
	
	public Painting(String title, String author, String description, String paintType) {
		this.setTitle(title);
		this.setAuthor(author);
		this.setDescription(description); 
		this.paintType = paintType;
	}
	
	public Painting(String title, String author, String description) {
		this.setTitle(title);
		this.setAuthor(author);
		this.setDescription(description); 
	}
	
	public Painting(String title, String author) {
		this.setTitle(title);
		this.setAuthor(author);
	}
	
	public Painting(String title) {
		this.setTitle(title);
	}
	
	
	// ===== Getters and Setters ===== //
	public String getPaintType() {
		return this.paintType;
	}
	public void setPaintType(String paintType) {
		this.paintType = paintType;
	}
	
	public void viewArt() {
		System.out.printf("Artwork's title: \n%s\n", this.getTitle());
		System.out.println("==================");
		System.out.printf("Artwork's Author: \n%s\n", this.getAuthor());
		System.out.println("==================");
		System.out.printf("Artwork's Description: \n%s\n", this.getDescription());
		System.out.println("==================");
		System.out.printf("Artwork's Paint Type: \n%s\n", this.getPaintType());
		System.out.println("|===============================|");
	}
}
