
import {Component, Input, OnInit} from '@angular/core';
import {View} from '../view';
import {RideMetaInformationService} from '../../shared/rideMetaInformation/ride-meta-information.service';
import {VehicleInformationService} from '../../shared/vehicleinformation/vehicle-information.service';
import {KiltServiceService} from '../../shared/kilt/kilt-service.service';
import {RideInformationService} from '../../shared/rideInformation/ride-information.service';
import {VehicleInformation} from '../../shared/vehicleinformation/vehicle-information';
import {RideInformation} from '../../shared/rideInformation/ride-information';

@Component({
  selector: 'app-ride-view',
  templateUrl: './ride-view.component.html',
  styleUrls: ['./ride-view.component.scss']
})
export class RideViewComponent implements OnInit, View {
  type = 'RideViewComponent';
  variant: string;

  randomRideInformation: RideInformation;
  vehicleInformation: VehicleInformation;
  rideInformation: RideInformation;
  displayedInformation: {description: string, value: any, metric: string}[];

  @Input() isRiding: boolean = false;
  @Input() buttonText: string = 'Board';

  constructor(private rideMetaInformationService: RideMetaInformationService,
              private vehicleInformationService: VehicleInformationService,
              private rideInformationService: RideInformationService,
              private kiltService: KiltServiceService) { }

  ngOnInit() {
    this.displayedInformation = [];
    this.vehicleInformationService.getVehicleInformation(4).subscribe(data => {
      if (this.variant !== 'bicycle') {
        this.displayedInformation.push({description: 'Fuel:', value: data.fuelType, metric: ''});
        this.displayedInformation.push({description: 'CO2:', value: data.co2PerLiter, metric: 'CO2/l'});
      }
      this.displayedInformation.push({description: 'Price/m', value: data.pricePerMeter, metric: 'CHF'});
      this.displayedInformation.push({description: 'Price/min', value: data.pricePerMinute, metric: 'CHF'});
      this.vehicleInformation = data;
      this.rideInformationService.getRideInformations().subscribe((rideInformation: RideInformation) => {
        this.randomRideInformation = rideInformation;
      });

    });
  }

  get ridingValue(){
    return this.isRiding;
  }

  set ridingValue(riding) {
    this.isRiding = riding;
  }

  onBoard() {
    this.ridingValue = true;
  }

  onCheckout() {
    this.displayedInformation = [];
    this.rideInformationService.getRideInformations().subscribe(data => {
      this.displayedInformation.push({description: 'Usage/km', value: data.gasUsagePerKm, metric: 'l'});
      this.displayedInformation.push({description: 'CO2', value: data.co2Kg, metric: 'kg'});
      this.displayedInformation.push({description: 'CO2/km', value: data.co2Kg / data.distance, metric: 'CO2/km'});
      this.displayedInformation.push({description: 'Distance', value: data.distance, metric: 'm'});
      this.displayedInformation.push({description: 'Time', value: data.time, metric: 'min'});
    });

    // would come from car; we mock it here because Hackaton is for hacking right?
    this.rideInformation = {
      time: "30",
      date: '2019-06-23',
      distance: 50.0,
      startGeolocation: '134.134 134.13',
      endGeolocation: '1341 1341',
      gasUsagePerKm: 3.5,
      co2Kg: 175.0
    };
  }

  onAttest() {
    this.kiltService.sendRideClaim(this.randomRideInformation).subscribe(data => {
      console.log(data);
    });
  }

  onRideButtonClick() {
    if(!this.isRiding){
      this.onBoard();
      this.buttonText = 'Checkout';
    } else if (this.rideInformation) {
      this.onAttest();
      this.isRiding = false;
    } else if (this.isRiding) {
      this.onCheckout();
      this.buttonText = 'Attest';
    }
  }
}
