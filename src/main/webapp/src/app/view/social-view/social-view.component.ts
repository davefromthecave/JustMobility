import { Component, OnInit } from '@angular/core';
import {View} from "../view";

@Component({
  selector: 'app-social-view',
  templateUrl: './social-view.component.html',
  styleUrls: ['./social-view.component.scss']
})
export class SocialViewComponent implements OnInit, View {
  type = 'SocialViewComponent';

  contacts: {name: string, usage: number, difference: number}[] = [
    {name: 'Petra Hirsch', usage: 13.4, difference: -3},
    {name: 'Hans Zimmer', usage: 15.4, difference: +1},
    {name: 'Fara Mann', usage: 11.7, difference: -6},
    {name: 'Marius Besos', usage: 14.1, difference: -1},
    {name: 'Paula Bischu', usage: 12.8, difference: -4}
  ];

  constructor() { }

  ngOnInit() {
  }

}
