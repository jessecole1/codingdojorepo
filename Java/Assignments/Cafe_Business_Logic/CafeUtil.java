import java.util.ArrayList;

public class CafeUtil {

    public int getStreakGoal() {
        int sum = 0;
        for (int i = 0; i <=10; i++){
            sum += i;
        }
        return sum;
    }

    public double getOrderTotal(double[]lineItems) {
        double sum = 0;
        for(double price : lineItems) {
            sum = sum + price;
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.printf("%s %s \n", i, menuItems.get(i));
        }
    }

    public void addCustomer(ArrayList<String>customers) {
        System.out.println("Please enter your name");
        String userName = System.console().readLine();
        customers.add(userName);
        System.out.println("Hello " + userName + "!");
        // System.out.println(customers.size());
        if (customers.size() < 2) {
            System.out.println("There are 0 people ahead of you.");
        }
        else {
            System.out.println("There are " + (customers.size()-1) + " ahead of you.");
        }
    }
}