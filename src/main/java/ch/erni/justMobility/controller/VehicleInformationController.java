package ch.erni.justMobility.controller;

import ch.erni.justMobility.persistance.entities.CustomerInformation;
import ch.erni.justMobility.persistance.entities.VehicleInformation;
import ch.erni.justMobility.persistance.repositories.VehicleInformationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("vehicleinformation")
public class VehicleInformationController {

    private final VehicleInformationRepository repository;

    VehicleInformationController(VehicleInformationRepository repository) {
        this.repository = repository;
    }

    @GetMapping(path = "/")
    public List<VehicleInformation> getVehicleInformations() {
        return repository.findAll();
    }

    @GetMapping(path="/{id}")
    public Optional<VehicleInformation> getVehicle(@PathVariable("id") Long id) {
        return repository.findById(id);
    }

    @PostMapping(path = "/")
    public void addCustomerInformation(@RequestBody VehicleInformation vehicleInformation) {
        repository.save(vehicleInformation);
    }
}
