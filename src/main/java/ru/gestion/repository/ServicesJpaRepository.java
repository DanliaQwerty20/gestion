package ru.gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ru.gestion.model.Services;

import java.util.List;

/**
 * Интерфейс для подключения базы данных и бэка
 */
public interface ServicesJpaRepository extends JpaRepository<Services, Integer> {

    @Query("SELECT s FROM Services s ORDER BY s.name")
    List<Services> findAllServicesSortedByName();

    @Query("SELECT s FROM Services s WHERE LOWER(s.name) LIKE LOWER(concat('%', LOWER(:keyword), '%'))")
    List<Services> findByKeyword(@Param("keyword") String keyword);
}
