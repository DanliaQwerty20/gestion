package ru.gestion.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.gestion.model.User;
import ru.gestion.model.UserSession;
import ru.gestion.model.dto.UserDto;
import ru.gestion.model.dto.UserLogDto;
import ru.gestion.repository.UserRepository;
import ru.gestion.repository.UserSessionRepository;

import java.util.NoSuchElementException;
import java.util.Optional;

/**
 * сервис по работе с юзерами
 */
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserSessionRepository userSessionRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User reqUser(UserDto userDto, String sessionId) {
        User user = User.builder()
            .name(userDto.getName())
            .password(userDto.getPassword())
            .email(userDto.getEmail())
            .userSession(userSessionRepository.findBySessionId(sessionId).orElseThrow())
            .build();
        return userRepository.save(user);
    }

    public User login(UserLogDto userLogDto) {
        return userRepository.findByEmailAndPassword(userLogDto.getEmail(),userLogDto.getPassword()).orElseThrow();
    }

    public User checkLog(String sessionId) {
        UserSession userSession = userSessionRepository.findBySessionId(sessionId).orElseThrow();
        return userRepository.findByUserSession_Id(userSession.getId())
            .orElseThrow(() -> new NoSuchElementException("User not found with sessionId: " + sessionId));
    }

}
