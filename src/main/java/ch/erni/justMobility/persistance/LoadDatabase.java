package ch.erni.justMobility.persistance;

import ch.erni.justMobility.persistance.entities.CustomerInformation;
import ch.erni.justMobility.persistance.entities.RideMetaInformation;
import ch.erni.justMobility.persistance.entities.RidePrivateInformation;
import ch.erni.justMobility.persistance.entities.VehicleInformation;
import ch.erni.justMobility.persistance.repositories.CustomerInformationRepository;
import ch.erni.justMobility.persistance.repositories.RideMetaInformationRepository;
import ch.erni.justMobility.persistance.repositories.RidePrivateInformationRepository;
import ch.erni.justMobility.persistance.repositories.VehicleInformationRepository;
import lombok.extern.slf4j.Slf4j;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

@Configuration
@Slf4j
class LoadDatabase {
    private static final Logger log = LogManager.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(CustomerInformationRepository customerInformationRepository,
                                   RideMetaInformationRepository rideMetaInformationRepository,
                                   RidePrivateInformationRepository ridePrivateInformationRepository,
                                   VehicleInformationRepository vehicleInformationRepository) {
        return args -> {

            log.info("Preloading " + customerInformationRepository.save(new CustomerInformation(
                    "e0d123e5f316bef78bfdf5a008837577",
                    "Rent a car user",
                    "some street",
                    1,
                    new Date(),
                    5f
            )));
            log.info("Preloading " + customerInformationRepository.save(new CustomerInformation(
                    "e0d123e5f316bef78bfdf5a008837577",
                    "Public transportation user",
                    "some street1",
                    2,
                    new Date(),
                    15f
            )));
            log.info("Preloading " + customerInformationRepository.save(new CustomerInformation(
                    "e0d123e5f316bef78bfdf5a008837577",
                    "Check ticket user",
                    "some street2",
                    23,
                    new Date(),
                    54f
            )));
            log.info("Preloading " + vehicleInformationRepository.save(new VehicleInformation(
                    4f,
                    2f,
                    150f,
                    "engine"
            )));
            log.info("Preloading " + vehicleInformationRepository.save(new VehicleInformation(
                    4f,
                    2f,
                    100f,
                    "diesel"
            )));

            log.info("Preloading " + rideMetaInformationRepository.save(new RideMetaInformation(
                    "e0d123e5f316bef78bfdf5a008837577",
                    20f,
                    10043f,
                    new Date(),
                    1,
                    2
            )));
        };
    }
}
