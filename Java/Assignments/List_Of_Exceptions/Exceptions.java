import java.util.ArrayList;

public class Exceptions {
    public static void main(String[] args) {

        // Create an ArrayList that can take both numbers and strings
        ArrayList<Object> myList = new ArrayList<Object>();

        // Add numbers and strings to the ArrayList
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");

        // Loop through ArrayList 
        for(int i = 0; i < myList.size(); i++) {
            try {
            // Assign each element to an Integer  
            Integer castedValue = (Integer) myList.get(i);
            }
            catch (ClassCastException e){
                System.out.println(e);
            }
        }
    }
}