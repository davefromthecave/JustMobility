package ch.erni.justMobility.persistance.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
public class CustomerInformation {

    private @Id @GeneratedValue Long id;
    private String paymentHash;
    private String name;
    private String address;
    private int payIntervnal;
    private Date lastPayment;
    private float openCredit;

    public CustomerInformation() {}

    public CustomerInformation(String paymentHash, String name, String address, int pay_internal, Date lastPayment, float openCredit) {
        this.paymentHash = paymentHash;
        this.name = name;
        this.address = address;
        this.payIntervnal = pay_internal;
        this.lastPayment = lastPayment;
        this.openCredit = openCredit;
    }
}
