package com.codingdojo.lookify.services;

import org.springframework.stereotype.Service;

import com.codingdojo.lookify.repositories.SongRepository;

@Service
public class SongService {

	public final SongRepository songRepository;
	
	public SongService(SongRepository songRepository) {
		this.songRepository = songRepository;
	}
	

}
