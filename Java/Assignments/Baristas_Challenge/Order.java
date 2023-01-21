import java.util.ArrayList;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items = new ArrayList<Item>();
    public Order() {
        this.name = "Guest";

    }

    public Order(String newName) {
        this.name = newName;
    }

    public String getOrderName() {
        return name;
    }

    public void setOrderName(String setName) {
        this.name = setName;
    }

    public boolean isReady() {
        return ready;
    }

    public void setIsReady() {
        this.ready = true;
    }
    
    public void setIsNotReady() {
        this.ready = false;
    }

    public ArrayList<Item> getOrderItems() {
        return this.items;
    }

    public void setOrderItems(ArrayList<Item> orderItem) {
        this.items = orderItem;
    }

    public void addItem(Item addItem) {
        this.items.add(addItem);
    }

    public String getStatusMessage() {
        this.isReady();
        if (this.ready == false) {
            this.setIsNotReady();
            return "Thank you for waiting. Your order will be ready soon.";
        }
        else {
            this.setIsReady();
            return "Your order is ready.";
        }
    }

    public double getOrderTotal() {
        double sum = 0;
        for (Item item : items) {
            sum += item.getItemPrice();
        }
        return sum;
    }

    public String display() {
        String name = this.getOrderName();
        System.out.println("Customer name: " + name);
        ArrayList<Item> drinks = this.getOrderItems();
        for (Item drink : drinks) {
            System.out.println(drink.getItemName() + " - $" + drink.getItemPrice());
        }
        System.out.println("Total: $" + this.getOrderTotal());

        return name;
    }
}