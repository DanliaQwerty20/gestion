package ru.gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.gestion.model.User;

import java.util.Optional;

/**
 * Репа связывает юхеров из бд с бэком
 */
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findByUserSession_Id(Long userSession_id);

    Optional<User> findByEmailAndPassword(String email, String password);
}
