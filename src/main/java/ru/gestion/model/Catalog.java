package ru.gestion.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Класс собственно каталога
 */
@Entity
@Table(name = "catalogs")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Catalog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_session_id", nullable = false)
    private UserSession userSession;

    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false)
    private Services service;

}
