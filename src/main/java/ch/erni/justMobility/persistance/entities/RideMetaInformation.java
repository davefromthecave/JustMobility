package ch.erni.justMobility.persistance.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Date;

@Data
@Entity
public class RideMetaInformation {
    private @Id @GeneratedValue long id;

    private String rideInformationHash;
    private float distance;
    private float time;
    private Date date;
    private long idVehicle;
    private long idCustomer;

    public RideMetaInformation() {}

    public RideMetaInformation(String rideInformationHash, float distance, float time, Date date, long idVehicle, long idCustomer) {
        this.rideInformationHash = rideInformationHash;
        this.distance = distance;
        this.time = time;
        this.date = date;
        this.idVehicle = idVehicle;
        this.idCustomer = idCustomer;
    }
}
