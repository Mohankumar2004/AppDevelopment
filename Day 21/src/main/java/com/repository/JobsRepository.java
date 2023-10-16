package com.repository;

import com.entity.JobsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobsRepository extends JpaRepository<JobsEntity, Long> {
}
