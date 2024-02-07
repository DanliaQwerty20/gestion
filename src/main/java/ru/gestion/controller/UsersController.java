package ru.gestion.controller;

import jakarta.persistence.Column;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.gestion.model.User;
import ru.gestion.model.dto.UserDto;
import ru.gestion.model.dto.UserLogDto;
import ru.gestion.service.UserService;

/**
 * Контроллер для юзеров
 */
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class UsersController {
    private final UserService userService;

    @PostMapping("/req/{sessionId}")
    public User reqistration(@RequestBody UserDto userDto, @PathVariable String sessionId){
        return userService.reqUser(userDto, sessionId);

    }

    @PostMapping("/log")
    public User login(@RequestBody UserLogDto userLogDto){
        return userService.login(userLogDto);
    }

    @GetMapping("/log/{sessionId}")
    public User checkLog(@PathVariable String sessionId) {
        return userService.checkLog(sessionId);
    }
}
