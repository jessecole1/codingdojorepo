import java.util.HashMap;
import java.util.Set;

public class SongList {
    public static void main(String[] args) {

        // Create a hashmap, <String, String> since both key and value will be strings 
        // HashMap is called listOfSongs 
        HashMap<String, String> listOfSongs = new HashMap<String, String>();

        // Going to add songs with the song title as the key, and a sample lyric as its value
        // to add to HashMap, use .put(key, value)
        listOfSongs.put("Sweden", "I am from Sweden, yeah.. not actually though");
        listOfSongs.put("Hi Stephanie", "You said you read these so hi");
        listOfSongs.put("Hey Jonathan", "In case you read these too, hey Jonathan");
        listOfSongs.put("Java", "So far I am really liking the class!");

        // Getting one of the songs by its title, printing to the console 
        String name = listOfSongs.get("Sweden");
        System.out.println(name);

        // Print out all the track names and lyrics in this format - Track: Lyrics
        // Loop through the HashMap and print them all out in the format

        // set a variable with the Set<String> data type equal to the HashMap using the keySet method
        Set<String> songsWithLyrics = listOfSongs.keySet();

        // Start a for loop 
        for(String key : songsWithLyrics) {
            // have each iteration print what part of the HashMap its iterating over in the format
            System.out.println(key + ": " + listOfSongs.get(key));
        }

    }
}