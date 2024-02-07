package ru.gestion.model.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Вопросы
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto {

    private String name;

    private String email;

    private String question;
}
