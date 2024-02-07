package ru.gestion.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * todo Document type UserLogDto
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserLogDto {
    private String email;
    private String password;
}
