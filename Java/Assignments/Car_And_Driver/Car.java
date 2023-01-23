public class Car {
    private int gas = 10;

    // ===== Constructor Methods ===== //
    public Car() {
        this.gas = gas;
    }

    // ===== Static Methods ===== //


    // ===== Getters and Setters ===== //
    public int getCarGas() {
        return this.gas;
    }

    public int setCarGas(int consumption) {
        this.gas += consumption;
        return this.gas;
    }
}