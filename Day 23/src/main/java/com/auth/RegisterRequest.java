package com.auth;

import com.entity.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 

public class RegisterRequest {
	
	private String email;
	private String firstName;
	private String lastName;
	private Long mobile;
	private String dob;
	private String password;
	private String gender;
	private String experience;
	private String qualification;
	private String interest;
	private String address;
	private Role role;
}
