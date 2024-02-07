package ru.gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.gestion.model.UserSession;

import java.util.Optional;

/**
 * Репа для связи бд и бэка
 */
public interface UserSessionRepository extends JpaRepository<UserSession, Long> {
    Optional<UserSession> findBySessionId(String sessionId);
}
