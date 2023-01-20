public class Demo {
    public static void main(String[] args) {

        Vehicle newVehicle = new Vehicle(make: "Ford", model: "Mustang", color: "green", year:1968);
        String myVehicle = String.format(format: "This vehicle is a %d %s %s %s", newVehicle.year, newVehicle.color, newVehicle.make, newVehicle.model);
        System.out.println(myVehicle);
    }
}
// Something is going wrong during compilation, have to find reason 