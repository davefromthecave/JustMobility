import { Component, OnInit } from '@angular/core';
import {View} from '../view';
import {RideInformationService} from '../../shared/rideInformation/ride-information.service';

@Component({
  selector: 'app-footprint-view',
  templateUrl: './footprint-view.component.html',
  styleUrls: ['./footprint-view.component.scss']
})
export class FootprintViewComponent implements OnInit, View {
  type = 'FootprintViewComponent';
  // private Userdata in real use case; would come from local storage of customer
  emissions = [
    {date: '2019-06-23', co2kg: 12.6, gasUsage: 3.4},
    {date: '2019-06-22', co2kg: 15.6, gasUsage: 3.7},
    {date: '2019-06-21', co2kg: 4.6, gasUsage: 0.2},
    {date: '2019-06-20', co2kg: 3.6, gasUsage: 0.3},
    {date: '2019-06-19', co2kg: 2.6, gasUsage: 0.2},
    {date: '2019-06-18', co2kg: 17.6, gasUsage: 3.8},
    {date: '2019-06-17', co2kg: 28.6, gasUsage: 3.5}
  ];

  constructor(public rideInformationService: RideInformationService) { }

  ngOnInit() { }


}
