package com.auth;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.ContactEntity;
import com.entity.FeedbackEntity;
import com.entity.JobsEntity;
import com.entity.User;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;


    // Admin Controller

    @PostMapping("/admin/register")
    public String adminregister(@RequestBody RegisterRequest request){
        AuthenticationResponse token =  service.adminregister(request);
        String createdmessage ="";
        if(token!=null){
             createdmessage = "Admin Created";
        }else{
             createdmessage = "SomeThing Went Wrong";

        }
        return createdmessage;
    }

    @PostMapping("/admin/authenticate")
    public ResponseEntity<AuthenticationResponse> adminAuthenticate(@RequestBody AuthenticationRequest adminrequest){
        return ResponseEntity.ok(service.adminAuthenticate(adminrequest));
    }
    
    @GetMapping("/admin/getadmin/{email}")
    public ResponseEntity<Optional<User>> getadminById(@PathVariable String email){
    	return ResponseEntity.ok(service.getadminById(email));
    }
    
    //user controller
    @PostMapping("/user/register")
    public String userregister(@RequestBody RegisterRequest request){
        AuthenticationResponse token =  service.userregister(request);
        String createdmessage ="";
        if(token!=null){
             createdmessage = "User Created";
        }else{
             createdmessage = "SomeThing Went Wrong";

        }
        return createdmessage;
    }
    
    @PostMapping("/user/authenticate")
    public ResponseEntity<AuthenticationResponse> userAuthenticate(@RequestBody AuthenticationRequest userrequest){
        return ResponseEntity.ok(service.userauthenticate(userrequest));
    }
    
    @GetMapping("/user/getuser/{email}")
    public ResponseEntity<Optional<User>> getuserById(@PathVariable String email){
    	return ResponseEntity.ok(service.getuserById(email));
    }
    @PostMapping("/feed/post")
    public String saveFeed(@RequestBody FeedbackEntity feed)
    {
    	service.SaveFeed(feed);
    	return "Feedback Successfully posted";
    }
    @GetMapping("/get/feed")
    public List<FeedbackEntity> getFeed()
    {
    	return service.GetFeed();
    }
    @PostMapping("/contact/post")
    public String createMessage(@RequestBody ContactEntity message) {
    	service.saveContact(message);
    	return "Contact Successfully posted";
    }
    @PostMapping("/jobs/post")
    public String createMessage(@RequestBody JobsEntity message) {
    	service.savejobs(message);
    	return "Job Successfully posted";
    }
    @GetMapping("/jobs/get")
    public List<JobsEntity> getjobs()
    {
    	return service.GetJobs();
    }
}
