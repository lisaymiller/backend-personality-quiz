package com.win.personality_quiz.controller;

import java.util.Collection;

import com.win.personality_quiz.model.Quiz;
import com.win.personality_quiz.repository.QuizRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("quiz/")
@CrossOrigin(origins = "https://frontend-personality-quiz.herokuapp.com")
public class QuizController {

    @Autowired
    private QuizRepo quizRepo;

    @GetMapping("questions")
    public Collection<Quiz> getQuestions() {
        return quizRepo.findAll();
    }

}