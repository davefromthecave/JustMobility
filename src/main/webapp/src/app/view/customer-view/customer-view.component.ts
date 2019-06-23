import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faCar, faBus, faBicycle, faLeaf, faUserFriends, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {RideMetaInformationService} from '../../shared/rideMetaInformation/ride-meta-information.service';
import {VehicleInformationService} from '../../shared/vehicleinformation/vehicle-information.service';
import {RideViewComponent} from '../ride-view/ride-view.component';
import {View} from '../view';
import {FootprintViewComponent} from '../footprint-view/footprint-view.component';
import {SocialViewComponent} from '../social-view/social-view.component';
import {MessageViewComponent} from '../message-view/message-view.component';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit, View {
  @Input() customerId = 1;
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  co2FootprintSpan = 'this month';
  co2RelativeValue = 62;
  co2AbsolutValue = 121.5;
  co2MaxValue = 300;
  type = 'CustomerViewComponent';

  menuButtons = [
    {icon: faCar, component: RideViewComponent, variant: 'car'},
    {icon: faBus, component: RideViewComponent, variant: 'public'},
    {icon: faBicycle, component: RideViewComponent, variant: 'bicycle'},
    {icon: faLeaf, component: FootprintViewComponent, variant: ''},
    {icon: faUserFriends, component: SocialViewComponent, variant: ''},
    {icon: faEnvelope, component: MessageViewComponent, variant: ''},
  ];

  constructor(private rideMetaInformationService: RideMetaInformationService,
              private vehicleInformationService: VehicleInformationService) {  }

  ngOnInit() {
    this.loadEmissionData();
  }

  loadEmissionData() {
    this.rideMetaInformationService.getRideMetaInformations().subscribe(data => {
          console.log(data);
    });
  }

  getTotalCO2(value: number) {
    return value + 'kg';
  }

  onMenuButtonClick(component: any, variant: string ) {
    this.menuButtonClick.emit({component, variant});
  }
}
