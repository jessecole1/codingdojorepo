package com.codingdojo.abstractArt;

public class Sculpture extends Art {
	private String material;
	
	// ===== Constructors ===== //
	public Sculpture(String title, String author, String description, String material) {
		this.setTitle(title);
		this.setAuthor(author);
		this.setDescription(description);
		this.setMaterial(material);
	}
	public Sculpture(String title, String author, String description) {
		this.setTitle(title);
		this.setAuthor(author);
		this.setDescription(description);
	}
	public Sculpture(String title, String author) {
		this.setTitle(title);
		this.setAuthor(author);
	}
	public Sculpture(String title) {
		this.setTitle(title);
	}
	
	// ===== Getters and Setters ===== //
	public String getMaterial() {
		return this.material;
	}
	public void setMaterial(String material) {
		this.material = material;
	}
	
	public void viewArt() {
		System.out.printf("Artwork's title: \n%s\n", this.getTitle());
		System.out.println("==================");
		System.out.printf("Artwork's Author: \n%s\n", this.getAuthor());
		System.out.println("==================");
		System.out.printf("Artwork's Description: \n%s\n", this.getDescription());
		System.out.println("==================");
		System.out.printf("Artwork's Material: \n%s\n", this.getMaterial());
		System.out.println("|===============================|");
	}
}
