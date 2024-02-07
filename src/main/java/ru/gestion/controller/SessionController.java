package ru.gestion.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.gestion.model.UserSession;
import ru.gestion.service.UserSessionService;

import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Контроллер по сессиям
 */
@RestController
@RequestMapping("/session")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class SessionController {
    private final UserSessionService userSessionService;

    @GetMapping
    public ResponseEntity<UserSession> createSession() {
        try {
            // Создаем новую сессию
            UserSession newUserSession = new UserSession();
            newUserSession.setSessionId(String.valueOf(ThreadLocalRandom.current().nextLong()));
            userSessionService.saveUserSession(newUserSession);
            return ResponseEntity.ok(newUserSession);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new UserSession());
        }
    }

    @GetMapping("/{sessionId}")
    public UserSession getSessionById(@PathVariable Long sessionId) {
        return userSessionService.getSessionById(sessionId);
    }

}
