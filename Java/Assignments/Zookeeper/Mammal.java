public class Mammal {
    private int energy = 0;

    // ===== Constructor ===== //


    // ===== Static ===== //

    
    // ===== Getter and Setters  ===== //

    public int getEnergy() {
        return this.energy;
    }

    public void setEnergy(int newEnergy) {
        this.energy = newEnergy;
    }

    public int displayEnergy() {
        System.out.println(this.energy);
        return this.energy;
    }
}