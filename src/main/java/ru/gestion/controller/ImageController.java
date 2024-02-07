package ru.gestion.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ImageController {

    private final ResourceLoader resourceLoader;

    @GetMapping("/{imageName}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) {
        try {
            // Загружаем ресурс по имени файла из папки resources/images
            Resource resource = resourceLoader.getResource("classpath:images/" + imageName);
            System.out.println("yes");

            // Проверяем, существует ли файл
            if (resource.exists()) {
                // Возвращаем фото с правильным Content-Type
                return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG) // укажите правильный MediaType в зависимости от типа изображения
                    .body(resource);
            } else {
                // Если файл не найден, возвращаем 404 Not Found
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            // В случае ошибки возвращаем 500 Internal Server Error
            return ResponseEntity.status(500).build();
        }
    }
}