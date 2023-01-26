package com.codingdojo.abstractArt;

import java.util.ArrayList;
import java.util.Collections;

public class Museum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Painting painting1 = new Painting("my title","jesse","my description","red paint");
		Painting painting2 = new Painting("title2");
		Painting painting3 = new Painting("title3");
		
		Sculpture sculpture1 = new Sculpture("title4");
		Sculpture sculpture2 = new Sculpture("title5");
		
		ArrayList<Art> museum = new ArrayList<Art>();
		painting1.viewArt();
		sculpture2.viewArt();
		museum.add(painting1);
		museum.add(painting2);
		museum.add(painting3);
		museum.add(sculpture1);
		museum.add(sculpture2);
		System.out.println(museum);
		
		Collections.shuffle(museum);
		
		for (Art artwork : museum) {
			artwork.viewArt();
		}
		
	}

}
