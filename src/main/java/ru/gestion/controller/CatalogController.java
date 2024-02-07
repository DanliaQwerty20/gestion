package ru.gestion.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.gestion.model.Catalog;
import ru.gestion.model.Services;
import ru.gestion.model.dto.CatalogDto;
import ru.gestion.service.CatalogService;

import java.util.List;

/**
 * Контроллер корзины
 */
@RestController
@RequestMapping("/catalog")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class CatalogController {
    private final CatalogService catalogService;

    @GetMapping("/{sessionId}")
    public ResponseEntity<List<Catalog>> getCatalogBySession(@PathVariable(name = "sessionId") String sessionId) {
        return ResponseEntity.ok(catalogService.findCatalogsBySessionId(sessionId));
    }

    @PostMapping("/save")
    public ResponseEntity<Catalog> saveCatalog(@RequestBody CatalogDto catalogDto){
        return ResponseEntity.ok(catalogService.saveCatalog(catalogDto));
    }

    @DeleteMapping("/{id}")
    public void removeCatalog(@PathVariable Integer id) {
        catalogService.removeById(id);
    }
}
