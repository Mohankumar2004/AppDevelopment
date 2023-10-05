package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.Repository;


public class UserService {
	@Autowired
	Repository uRepository;
	
	public List<UserEntity> getAllUserEntity() {
		return uRepository.findAll();
	}
	
	public UserEntity getuserEntityById(Long userEntityId) {
		Optional<UserEntity> userEntityOptional = uRepository.findById(userEntityId);
		return userEntityOptional.orElse(null);
	}
	
	public UserEntity saveuserEntity(UserEntity userEntity) {
		return uRepository.save(userEntity);
	}
	
	public void deleteuserEntity(Long userEntityId) {
		uRepository.deleteById(userEntityId);
	}
}
