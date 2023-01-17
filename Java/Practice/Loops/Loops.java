// While Loops and For Loops
// While loops are good for when we don't know how long the loop will be running 
import java.util.ArrayList;

public class Loops {
    public static void main(String[] args) {
        int i = 0;
        while (i < 7)
            {
            System.out.println("foo");
            i++;
            }
        for (int j = 0; j < 7; j++){
            System.out.println("Bar");
        }
        ArrayList<String> dynamicArray = new ArrayList<String>();
        dynamicArray.add("Hello");
        dynamicArray.add("World");
        dynamicArray.add("etc");
        // for (int j = 0; j < dynamicArray.size(); j++){
        //     System.out.println(dynamicArray.get(j));
        // }

        // Enhanced For Loop
        for(String name : dynamicArray){
            System.out.println("Hello " + name);
        }
        // is the same as this
        // The Enhanced For Loop is more simple to use 
        for (int j = 0; j < dynamicArray.size(); j++){
            String name = dynamicArray.get(j);
            System.out.println("Hello " + name);
        }

        // Problems with Enhanced For Loops 
        ArrayList<String> snacks = new ArrayList<String>();
        snacks.add("Apples");
        snacks.add("Almonds");
        snacks.add("Pretzels");
        snacks.add("Pizza");
        // for(String snack : snacks){
        //     if (snack.charAt(0) == 'A'){
        //         snacks.remove(snack);
        //     }
        // }
        // Instead it should be written as this
        // for(int j = 0; j<snacks.size(); j++){
        //     if(snacks.get(j).charAt(0) == 'A'){
        //         snacks.remove(j);
        //     }
        // }
        System.out.println(snacks);
    }
}