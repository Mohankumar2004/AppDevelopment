package com.example.demo.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.Repository;




@CrossOrigin("*")
@RestController
@RequestMapping("/jobs")
public class Controller {
	@Autowired
    private Repository userRepository;
    @GetMapping(value="/get")
    public Iterable<UserEntity> getAllUserEntity(){
        return userRepository.findAll();
    }
    	
   
    @PostMapping("/post")
    public UserEntity createtata(@RequestBody UserEntity ad) {
        return userRepository.save(ad);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<UserEntity>> getById(@PathVariable  Long id){
        Optional<UserEntity> ac = userRepository.findById(id);
        return ResponseEntity.ok(ac);
    }

    @PutMapping("/update/{id}")
	public UserEntity updateUserEntityDetails(@RequestBody UserEntity b,@PathVariable Long id)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		
		b.setid(id);
		return userRepository.save(b);		
	}
    @DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable Long id)
	{
    	userRepository.deleteById(id);
		return null;
	}
}
