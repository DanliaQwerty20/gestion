package ru.gestion.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.gestion.model.Review;
import ru.gestion.model.dto.ReviewDto;
import ru.gestion.repository.ReviewsRepository;

import java.util.Random;

/**
 * todo Document type ReviewService
 */
@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewsRepository repository;

    public Review saveReview(ReviewDto reviewDto) {
        Review review = Review.builder()
            .name(reviewDto.getName())
            .email(reviewDto.getEmail())
            .question(reviewDto.getQuestion())
            .build();
        return repository.save(review);
    }
}