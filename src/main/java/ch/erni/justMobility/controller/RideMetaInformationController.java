package ch.erni.justMobility.controller;

import ch.erni.justMobility.persistance.entities.RideMetaInformation;
import ch.erni.justMobility.persistance.repositories.RideMetaInformationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("ridemetainformation")
public class RideMetaInformationController {

    private final RideMetaInformationRepository repository;

    RideMetaInformationController(RideMetaInformationRepository repository) {
        this.repository = repository;
    }

    @GetMapping(path = "/")
    public List<RideMetaInformation> getRideMetaInformations() {
        return repository.findAll();
    }

    @GetMapping(path="/{id}")
    public Optional<RideMetaInformation> getRideMetaInformation(@PathVariable("id") Long id) {
        return repository.findById(id);
    }

    @PostMapping(path = "/")
    public void addRideMetaInformation(@RequestBody RideMetaInformation customerinformation) {
        repository.save(customerinformation);
    }
}
