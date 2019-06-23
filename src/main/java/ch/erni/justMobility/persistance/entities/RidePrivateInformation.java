package ch.erni.justMobility.persistance.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class RidePrivateInformation {
    private @Id @GeneratedValue long id;
    private String startGeolocation;
    private String endGeolocation;
    private float gasUsagePerKm;
    private float co2Kg;

    public RidePrivateInformation() {}

    public RidePrivateInformation(String startGeolocation, String endGeolocation, float gasUsagePerKm, float co2Kg) {
        this.startGeolocation = startGeolocation;
        this.endGeolocation = endGeolocation;
        this.gasUsagePerKm = gasUsagePerKm;
        this.co2Kg = co2Kg;
    }
}
