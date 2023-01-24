public class Bat extends Mammal {

    // ===== Constructor ===== //
    public Bat() {
        int batEnergy = 300;
        this.setEnergy(batEnergy);
    }

    // ===== Static ===== //


    // ===== Getters and Setters ===== //

    public void fly() {
        int batEnergy = this.getEnergy();
        this.setEnergy(batEnergy - 50);
        System.out.println("Swoosh!");
        System.out.println("The bat has flown up in the sky.");
    }

    public void eatHumans() {
        int batEnergy = this.getEnergy();
        this.setEnergy(batEnergy + 25);
        System.out.println("Aghh!");
    }

    public void attackTown() {
        int batEnergy = this.getEnergy();
        this.setEnergy(batEnergy - 100);
        System.out.println("*Cshcshcshcsh woooooooooo cshcshcsh");
    }
}