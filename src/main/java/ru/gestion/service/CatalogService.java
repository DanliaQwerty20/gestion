package ru.gestion.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gestion.model.Catalog;
import ru.gestion.model.UserSession;
import ru.gestion.model.dto.CatalogDto;
import ru.gestion.repository.CatalogRepository;
import ru.gestion.repository.ServicesJpaRepository;
import ru.gestion.repository.UserSessionRepository;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Сервис по работе с каталогами
 */
@Service
@RequiredArgsConstructor
public class CatalogService {
    private final CatalogRepository catalogRepository;
    private final UserSessionRepository userSessionRepository;
    private final ServicesJpaRepository servicesJpaRepository;

    public List<Catalog> getCatalogsByUserSession(UserSession userSession) {
        return catalogRepository.findByUserSession(userSession);
    }

    public boolean checkCatalogExistence(String sessionId) {
        return catalogRepository.findByUserSession_Id(Long.parseLong(sessionId)).isPresent();
    }

    public Catalog saveCatalog(CatalogDto catalogDto) {
        Optional<UserSession> userSession = userSessionRepository.findBySessionId(catalogDto.getUserSessionId());
        if(userSession.isPresent()) {
            List<Catalog> catalogs = catalogRepository.findAllByUserSession_Id(userSession.get().getId());
            System.out.println(catalogDto.getUserSessionId());
            for(Catalog catalog: catalogs) {

                if (catalog.getService().getId() == Long.parseLong(catalogDto.getServiceId())) {
                    throw new RuntimeException();
                }
            }
            Catalog catalog = Catalog.builder()
                .userSession(userSession.get())
                .service(servicesJpaRepository.findById(Integer.valueOf(catalogDto.getServiceId())).orElseThrow())
                .build();
            return catalogRepository.save(catalog);
        }
        throw new RuntimeException();
    }

    public List<Catalog> findCatalogsBySessionId(String sessionId) {
        Optional<UserSession> userSession = userSessionRepository.findBySessionId(sessionId);
        if(userSession.isPresent()) {
            return catalogRepository.findAllByUserSession_Id(userSession.get().getId());
        }
        throw new RuntimeException();
    }

    public void removeById(Integer id) {
        catalogRepository.deleteById(Long.valueOf(id));
    }
}
