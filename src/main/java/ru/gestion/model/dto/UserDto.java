package ru.gestion.model.dto;

import jdk.jfr.DataAmount;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO класс для регистрации
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String name;
    private String email;
    private String password;
}
