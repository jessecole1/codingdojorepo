import java.util.HashMap;
import java.util.Set;

public class Hashmap {
    public static void main(String[] args) {
        // ===== Create a Hashmap ===== // 
        HashMap<String, String> userMap = new HashMap<String, String>();

        // ===== Put key value pairs in the Hashmap ===== //
        userMap.put("nninja@codingdojo.com", "Nancy Ninja");
        userMap.put("ssamurai@codingdojo.com", "Sam Samurai");
        userMap.put("wwizard@codingdojo.com", "Walter Wizard");

        // ===== And get them out ===== //
        String name = userMap.get("nninja@codingdojo.com");

        // ===== Iteration ===== //
        // Set is a collection of unordered unique values 
        Set<String> keys = userMap.keySet();
        for(String key : keys) {
            System.out.println(key);
            System.out.println(userMap.get(key)); 
        }
    }
}