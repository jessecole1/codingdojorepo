import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        Item item1 = new Item();
        item1.name = "Mocha";
        item1.price = 4.0;

        Item item2 = new Item();
        item2.name = "Latte";
        item2.price = 5.5;

        Item item3 = new Item();
        item3.name = "Drip Coffee";
        item3.price = 5.0;

        Item item4 = new Item();
        item4.name = "Capuccino";
        item4.price = 4.5;
        // Order variables -- order1, order2 etc.
        Order order1 = new Order();
        order1.name = "Cindhuri";

        Order order2 = new Order();
        order2.name = "Jimmy";

        Order order3 = new Order();
        order3.name = "Noah";

        Order order4 = new Order();
        order4.name = "Sam";

        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        // == PREDICTION: its going to print 0
        System.out.printf("Total: %s\n", order1.total);
        // == OUTCOME: almost correct, but it was a double so it printed 0.0
        // System.out.printf("Ready: %s\n", order1.ready);

        // Add item 1 to order 2's item list
        order2.items.add(item1);
        order2.total = order2.total + item1.price;
        System.out.println("Order 2's Total:");
        System.out.println(order2.total);

        // order3 ordered a cappucino. Add the cappuccino to their order list and to their tab.
        order3.items.add(item4);
        order3.total += item4.price;
        System.out.println("Order 3's Total:");
        System.out.println(order3.total);

        // order 4 added a latte. Update accordingly.
        order4.items.add(item2);
        order4.total += item2.price;
        System.out.println("Order 4's Total:");
        System.out.println(order4.total);

        // Cindhuri’s order is now ready. Update her status.
        order1.isReady = true;
        if (order1.isReady == true) {
            System.out.println(order1.name + ", your order is ready!");
        }
        else {
            System.out.println(order1.name + ", your order is coming up.");
        }

        // Sam ordered more drinks - 2 lattes. Update their order as well.
        // === My plan was to loop through the set of items and add their price to the 
        // orders total, but couldnt figure out how === //

        // order4.items.add(item2);
        // order4.items.add(item2);
        // for (int i = 0; i < order4.items.size(); i++) {
        //     System.out.println(order4.items);
        // }

        order4.items.add(item2);
        order4.items.add(item2);
        order4.total += item2.price;
        System.out.println(order4.total);

        // Jimmy’s order is now ready. Update his status.
        order2.isReady = true;
        if (order2.isReady == true) {
            System.out.println(order2.name + ", your order is ready!");
        }
        else {
            System.out.println(order2.name + ", your order is coming up.");
        }
    }
}
