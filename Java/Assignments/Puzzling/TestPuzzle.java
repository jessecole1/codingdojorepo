public class TestPuzzle {
    public static void main (String[] args) {
        
    PuzzleJava puzzleTest = new PuzzleJava();

        System.out.println(puzzleTest.genTenRolls());
        System.out.println(puzzleTest.getRandomLetterArray());
        System.out.println(puzzleTest.generatePassword());
        System.out.println(puzzleTest.getNewPasswordSet(10));
    }
}