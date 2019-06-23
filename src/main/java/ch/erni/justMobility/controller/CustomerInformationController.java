package ch.erni.justMobility.controller;

import ch.erni.justMobility.persistance.entities.CustomerInformation;
import ch.erni.justMobility.persistance.repositories.CustomerInformationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("customerinformation")
public class CustomerInformationController {

    private final CustomerInformationRepository repository;

    CustomerInformationController(CustomerInformationRepository repository) {
        this.repository = repository;
    }

    @GetMapping(path = "/")
    public List<CustomerInformation> getCustomerInformations() {
        return repository.findAll();
    }

    @GetMapping(path="/{id}")
    public Optional<CustomerInformation> getCustomer(@PathVariable("id") Long id) {
        return repository.findById(id);
    }

    @PostMapping(path = "/")
    public void addCustomerInformation(@RequestBody CustomerInformation customerinformation) {
        repository.save(customerinformation);
    }
}
