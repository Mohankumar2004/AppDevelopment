package com.service;

import com.entity.JobsEntity;
import com.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobsService {
    @Autowired
    private JobsRepository jobsRepository;

    public ResponseEntity<String> postJob(JobsEntity job) {
        jobsRepository.save(job);
        return ResponseEntity.ok("Job posted successfully");
    }

    public ResponseEntity<JobsEntity> getJobById(Long id) {
        JobsEntity job = jobsRepository.findById(id).orElse(null);
        if (job != null) {
            return ResponseEntity.ok(job);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<List<JobsEntity>> getAllJobs() {
        List<JobsEntity> jobs = jobsRepository.findAll();
        return ResponseEntity.ok(jobs);
    }

    public ResponseEntity<String> updateJob(JobsEntity job, Long id) {
        if (jobsRepository.existsById(id)) {
            job.setId(id);
            jobsRepository.save(job);
            return ResponseEntity.ok("Job updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<String> deleteJob(Long id) {
        if (jobsRepository.existsById(id)) {
            jobsRepository.deleteById(id);
            return ResponseEntity.ok("Job deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
