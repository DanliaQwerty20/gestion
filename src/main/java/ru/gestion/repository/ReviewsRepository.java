package ru.gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.gestion.model.Review;

/**
 * Репа отзывов
 */
public interface ReviewsRepository extends JpaRepository<Review,Integer> {
}
