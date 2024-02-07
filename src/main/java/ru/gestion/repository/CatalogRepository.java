package ru.gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.gestion.model.Catalog;
import ru.gestion.model.UserSession;

import java.util.List;
import java.util.Optional;

/**
 * Репа для связи с бд с бэком
 */
public interface CatalogRepository extends JpaRepository<Catalog, Long> {
    List<Catalog> findByUserSession(UserSession userSession);

    Optional<Catalog> findByUserSession_Id(Long userSession_id);

    @Query("SELECT c FROM Catalog c WHERE c.userSession.id = :userSessionId")
    List<Catalog> findAllByUserSession_Id(Long userSessionId);
}
