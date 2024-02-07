package ru.gestion.model;

import jakarta.persistence.*;
import lombok.Data;

/**
 * Класс описывающий сессию пользователя вне зависимости от входа или регистрации
 */
@Entity
@Table(name = "users_session")
@Data
public class UserSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "session_id", nullable = false, unique = true)
    private String sessionId;

}