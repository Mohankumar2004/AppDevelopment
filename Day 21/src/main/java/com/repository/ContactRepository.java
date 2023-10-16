package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.ContactEntity;

public interface ContactRepository extends JpaRepository<ContactEntity, Long>{

}
