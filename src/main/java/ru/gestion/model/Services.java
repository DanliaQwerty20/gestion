package ru.gestion.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Класс для связи сущности с базой данных
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "services")
public class Services {
    @Id
    private Integer id;

    private String price;

    private String photo;

    private String name;

    private String url;
}
