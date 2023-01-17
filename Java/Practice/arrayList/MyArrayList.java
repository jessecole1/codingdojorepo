// ArrayLists can only hold object types (i.e. Integer, String, Double)
// The <Integer> \/below\/ is a placeholder, where <T> will probably be used often in the future of the course 
// <Object> allows the ArrayList to hold data of different data types!

import java.util.ArrayList;
public class MyArrayList {
    public static void main(String[] args) {
        ArrayList<Integer> myArray = new ArrayList<Integer>();
        myArray.add(10);
        myArray.add(44);
        System.out.println(myArray);
        // myArray.get(0);
        myArray.set(0,9);
        System.out.println(myArray);
        ArrayList<Object> myNewArray = new ArrayList<Object>();
        System.out.println(myNewArray);
        myNewArray.add("Hello");
        Object num = myNewArray.get(0);
        System.out.println(num);
        myNewArray.add(55);
        System.out.println(myNewArray);
    }
}