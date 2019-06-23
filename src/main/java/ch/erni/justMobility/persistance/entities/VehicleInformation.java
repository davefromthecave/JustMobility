package ch.erni.justMobility.persistance.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class VehicleInformation {
    private @Id @GeneratedValue long id;
    private float pricePerMinute;
    private float pricePerMeter;
    private float co2PerLiter;
    private String fuelType;

    public VehicleInformation() {}

    public VehicleInformation(float pricePerMinute, float pricePerMeter, float co2PerLiter, String fuelType) {
        this.pricePerMinute = pricePerMinute;
        this.pricePerMeter = pricePerMeter;
        this.co2PerLiter = co2PerLiter;
        this.fuelType = fuelType;
    }
}
