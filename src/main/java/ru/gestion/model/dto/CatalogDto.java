package ru.gestion.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Дто для сохранения каталога
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CatalogDto {
    private String userSessionId;
    private String serviceId;
}
