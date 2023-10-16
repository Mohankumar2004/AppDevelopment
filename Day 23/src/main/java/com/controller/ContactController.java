package com.controller;

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

import com.entity.ContactEntity;
import com.repository.ContactRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/contact")
public class ContactController {
	@Autowired
    private ContactRepository contactRepository;

    @GetMapping(value = "/get")
    public Iterable<ContactEntity> getAllContact() {
        return contactRepository.findAll();
    }
    
    @PostMapping("/submit")
    public ResponseEntity<String> submitMessage(@RequestBody ContactEntity message) {
        contactRepository.save(message);
        return ResponseEntity.ok("Message submitted successfully");
    }

    @PostMapping("/post")
    public ContactEntity createMessage(@RequestBody ContactEntity message) {
        return contactRepository.save(message);
    }

    @GetMapping("/{id}")
    public Optional<ContactEntity> getById(@PathVariable Long id) {
        return contactRepository.findById(id);
    }

    @PutMapping("/update/{id}")
    public ContactEntity updateMessageDetails(@RequestBody ContactEntity message, @PathVariable Long id) {
        message.setId(id);
        return contactRepository.save(message);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteMessage(@PathVariable Long id) {
        contactRepository.deleteById(id);
    }
}
