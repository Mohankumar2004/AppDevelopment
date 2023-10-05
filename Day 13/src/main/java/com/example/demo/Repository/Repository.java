package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.UserEntity;



public interface Repository extends JpaRepository<UserEntity,Long> {

	

}