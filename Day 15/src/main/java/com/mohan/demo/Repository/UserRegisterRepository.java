package com.mohan.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mohan.demo.Entity.UserRegister;



public interface UserRegisterRepository extends JpaRepository<UserRegister,Long>{
	Optional<UserRegister>findByUsername(String username);
}