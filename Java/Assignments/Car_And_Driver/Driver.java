public class Driver extends Car {


    // ===== Constructor Methods ===== //


    // ===== Static Methods ===== //


    // ===== Getters and Setters ===== //
    public void drive() {
        this.setCarGas(-1);
        int newGas = this.getCarGas();
        System.out.println("You drive the car.");
        System.out.println("Gas remaining: " + newGas + "/10");
    }

    public void boost() {
        this.setCarGas(-3);
        int newGas = this.getCarGas();
        System.out.println("You use your boost!");
        System.out.println("Gas remaining: " + newGas + "/10");
    }

    public void refuel() {
        this.setCarGas(2);
        int newGas = this.getCarGas();
        System.out.println("You stop to refuel.");
        System.out.println("Gas remaining: " + newGas + "/10");
    }

}