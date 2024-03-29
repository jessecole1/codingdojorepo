import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {

        // Creating items
        Item item1 = new Item("drip coffee", 2.5);
        Item item2 = new Item("latte", 4.0);
        Item item3 = new Item("capuccino", 3.5);
        Item item4 = new Item("mocha", 3.0);
    
        // Create 2 orders for unspecified guests (without specifying a name)
        Order order1 = new Order();
        Order order2 = new Order();

        // Create 3 orders using the overloaded constructor to give each a name for the order.
        Order order3 = new Order("Jesse");
        Order order4 = new Order("Kasey");
        Order order5 = new Order("Kingston");

        // Add at least 2 items to each of the orders using the addItem method you wrote,
        // for example, to add item1 to order3 you would need to call the addItem method
        // from the order3 instance like so: order3.addItem(item1);
        order1.addItem(item1);
        order1.addItem(item3);

        order2.addItem(item4);
        order2.addItem(item2);

        order3.addItem(item3);
        order3.addItem(item4);

        order4.addItem(item2);
        order4.addItem(item3);

        order5.addItem(item1);
        order5.addItem(item2);

        // Test the results and the display method by calling the display method on all of
        // your orders, like so: order3.display();
        order1.display();
        order3.display();
        order2.display();
        order4.display();
        order5.display();

        // Test your getStatusMessage functionality by setting some orders to ready
        // and printing the messages for each order. For example: order2.setReady(true);
        // System.out.println(order2.getStatusMessage());
        System.out.println(order1.getStatusMessage());
        order2.setIsReady();
        System.out.println(order2.getStatusMessage());

        // Implement the getOrderTotal method within the Order class
        System.out.println("Order Total: $" + order3.getOrderTotal());

    }
}
