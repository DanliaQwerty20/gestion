package ru.gestion.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.gestion.model.Catalog;
import ru.gestion.model.Services;
import ru.gestion.model.UserSession;
import ru.gestion.repository.CatalogRepository;
import ru.gestion.repository.ServicesJpaRepository;
import ru.gestion.repository.UserSessionRepository;

import java.util.List;
import java.util.Optional;

/**
 * Сервис по работе с услугами
 */
@Service
@RequiredArgsConstructor
public class ServicesService {
    private final ServicesJpaRepository servicesJpaRepository;
    private final UserSessionRepository userSessionRepository;
    private final CatalogRepository catalogRepository;

    public List<Services> findAllServices(){
        return servicesJpaRepository.findAllServicesSortedByName();
    }

    public Services findServicesById(Integer sessionId) {
        return servicesJpaRepository.findById(sessionId).orElseThrow();
    }

    public List<Services> findServicesNameLike(String text) {
        return servicesJpaRepository.findByKeyword(text);
    }
}
