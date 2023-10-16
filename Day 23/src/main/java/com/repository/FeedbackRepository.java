package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.FeedbackEntity;

public interface FeedbackRepository extends JpaRepository<FeedbackEntity, Long> {

}
