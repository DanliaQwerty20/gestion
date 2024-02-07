package ru.gestion.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.gestion.model.Catalog;
import ru.gestion.model.Services;
import ru.gestion.service.ServicesService;

import java.util.List;

/**
 * Контролер для работы с api
 */
@RestController
@RequestMapping("/services")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ServicesController {
    private final ServicesService servicesService;

    @GetMapping()
    public List<Services> getAllServices(){
        return servicesService.findAllServices();
    }

    @GetMapping("/{id}")
    public Services getServicesById(@PathVariable Integer id) {
        return servicesService.findServicesById(id);
    }

    @GetMapping("/search/{text}")
    public List<Services> getSearchCatalogs(@PathVariable String text){
        return servicesService.findServicesNameLike(text);
    }
}
