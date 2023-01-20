// ===== Class Creation ===== //
// Create a class named vehicle 
// This makes kind of a blueprint for our Vehicle class
public class Vehicle {

    // ===== Assigning Attributes ===== //
    public String make;
    public String model;
    public String color;
    public int year; 


    // ===== Contructor ====== //
    // used to enter information when we instantiate our class 
    public Vehicle(String make, String model, String color, int year) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }
}

// ===== Creating an Instance of our Object ===== //
// ===== Go to Demo.java ===== //