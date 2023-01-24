public class Gorilla extends Mammal {
    // private int energy = 100;

    // ===== Constructor ===== //
    public Gorilla() {
        int gorillaEnergy = 100;
        this.setEnergy(gorillaEnergy);
    }

    // ===== Static ===== //

    
    // ===== Getter and Setters  ===== //

    public void throwSomething() {
        int gorillaEnergy = this.getEnergy();
        this.setEnergy(gorillaEnergy - 5);
        System.out.println("Gorilla threw something. Yup, no need to describe it.");
    }

    public void eatBananas() {
        int gorillaEnergy = this.getEnergy();
        this.setEnergy(gorillaEnergy + 10);
        System.out.println("Hey! He found some bananas to eat.");
    }

    public void climb() {
        int gorillaEnergy = this.getEnergy();
        this.setEnergy(gorillaEnergy - 10);
        System.out.println("Wow! Hes climbing up the tree! Maybe he'll find something to eat.");
    }
}