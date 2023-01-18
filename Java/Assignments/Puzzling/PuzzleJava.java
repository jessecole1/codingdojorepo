import java.util.Random;
import java.util.ArrayList;

public class PuzzleJava {
    Random randMachine = new Random();

    public int[] genTenRolls() {
        int[] myArray = new int[10];
        // System.out.println(myArray);
        for (int i = 0; i<=9; i++) {
            int num = 1+randMachine.nextInt(20);
            myArray[i] = num;
        }
        for (int j = 0; j<=9; j++) {
            System.out.println("Number: " + myArray[j]);
        }
        return myArray;
    }

    public String[] getRandomLetterArray() {
        String abc = "abcdefghijklmnopqrstuvwxyz";
        String[] array = new String[26];
        for (int i = 0; i<25; i++) {
            array[i] = String.valueOf(abc.charAt(i));
        }
        return array;
    }

    public String getRandomLetter() {
        Random randomChar = new Random();
        String abc = "abcdefghijklmnopqrstuvwxyz";
        char letter = abc.charAt(randomChar.nextInt(26));
        return String.valueOf(letter);
    }

    public String generatePassword() {
        String password = "";
        for (int i = 0; i < 8; i++) {
            password += getRandomLetter();
        }
        return password;
    }
    // Create the function with ArrayList of Strings as return type, name getNewPasswordSet, 
    // taking in an int called length
    public ArrayList<String> getNewPasswordSet (int length) {

        // create the ArrayList of strings called passwordSet
        ArrayList<String> passwordSet = new ArrayList<String>();

        //create the forloop, length of the length given
        for (int i = 0; i < length; i++) {

            // add a password to the ArrayList each iteration from the generatePassword function
            passwordSet.add(generatePassword());
        }
        return passwordSet;
    }
} 