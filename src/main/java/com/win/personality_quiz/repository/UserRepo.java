package com.win.personality_quiz.repository;

import com.win.personality_quiz.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {

}