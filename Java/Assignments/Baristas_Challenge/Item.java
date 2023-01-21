public class Item {
    private String name;
    private double price;
    public Item (String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getItemName() {
        return name;
    }

    public void setItemName(String newName) {
        this.name = newName;
    }

    public double getItemPrice() {
        return price;
    }
    
    public void setItemPrice(double newPrice) {
        this.price = newPrice;
    }

}