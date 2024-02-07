package ru.gestion.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gestion.model.UserSession;
import ru.gestion.repository.UserSessionRepository;

import java.util.Optional;

/**
 * Сервис по работе с сессиями
 */
@Service
public class UserSessionService {
    @Autowired
    private UserSessionRepository userSessionRepository;

    public UserSession saveUserSession(UserSession userSession) {
        return userSessionRepository.save(userSession);
    }

    public Optional<UserSession> getUserSessionBySessionId(String sessionId) {
        return userSessionRepository.findBySessionId(sessionId);
    }

    public UserSession getSessionById(Long sessionId) {
        return userSessionRepository.findById(sessionId).orElseThrow();
    }
}