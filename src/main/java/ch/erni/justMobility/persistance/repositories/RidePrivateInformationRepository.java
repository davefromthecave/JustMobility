package ch.erni.justMobility.persistance.repositories;


import ch.erni.justMobility.persistance.entities.RidePrivateInformation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RidePrivateInformationRepository extends JpaRepository<RidePrivateInformation, Long> {

}
