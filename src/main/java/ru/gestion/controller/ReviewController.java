package ru.gestion.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.gestion.model.Review;
import ru.gestion.model.dto.ReviewDto;
import ru.gestion.service.ReviewService;

/**
 * Контроллер отзывов
 */
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {
    private final ReviewService reviewService;

    @PostMapping("/review")
    public Review saveReview(@RequestBody ReviewDto reviewDto){
        return reviewService.saveReview(reviewDto);
    }
}
