package com.entity;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.entity.enumerate.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@SuppressWarnings("serial")
@Data
@Builder
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="users")

public class User implements UserDetails{
	
	@Id
	@Column(name="email", nullable = false, unique=true)
	private String email;
	@Column(name="firstname", nullable = false)
	private String firstName;
	@Column(name="lastname", nullable = false)
	private String lastName;
	@Column(name="mobile", nullable = false)
	private Long mobile;
	@Column(name="dob", nullable = false)
	private String dob;
	@Column(name="password", nullable = false)
	private String password;
	@Column(name="gender", nullable = false)
	private String gender;
	@Column(name="experience", nullable = false)
	private String experience;
	@Column(name="qualification", nullable = false)
	private String qualification;
	@Column(name="interest", nullable = false)
	private String interest;
	@Column(name="address", nullable = false)
	private String address;
	
	@Enumerated(EnumType.STRING)
    private Role role;

	
	@Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        
        return role.getAuthorities();
    }

	@Override
    public String getUsername() {
    	return email;
    }
	
    @Override
    public String getPassword(){
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        
        return true;
    }

    @Override
    public boolean isEnabled() {
        
        return true;
    }
    
}
