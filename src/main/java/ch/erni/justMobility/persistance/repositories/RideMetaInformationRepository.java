package ch.erni.justMobility.persistance.repositories;


import ch.erni.justMobility.persistance.entities.RideMetaInformation;
import ch.erni.justMobility.persistance.entities.VehicleInformation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RideMetaInformationRepository extends JpaRepository<RideMetaInformation, Long> {

}
