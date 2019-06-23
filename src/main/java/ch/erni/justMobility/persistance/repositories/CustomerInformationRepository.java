package ch.erni.justMobility.persistance.repositories;


import ch.erni.justMobility.persistance.entities.CustomerInformation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerInformationRepository extends JpaRepository<CustomerInformation, Long> {

}
