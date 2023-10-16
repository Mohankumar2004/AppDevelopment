package com.controller;

import com.entity.JobsEntity;
import com.service.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
public class JobsController {
    @Autowired
    private JobsService jobsService;

    @PostMapping("/post")
    public ResponseEntity<String> postJob(@RequestBody JobsEntity job) {
        return jobsService.postJob(job);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<JobsEntity> getJobById(@PathVariable Long id) {
        return jobsService.getJobById(id);
    }

    @GetMapping("/get")
    public ResponseEntity<List<JobsEntity>> getAllJobs() {
        return jobsService.getAllJobs();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateJob(@RequestBody JobsEntity job, @PathVariable Long id) {
        return jobsService.updateJob(job, id);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteJob(@PathVariable Long id) {
        return jobsService.deleteJob(id);
    }
}
