import { Component, OnInit } from '@angular/core';
import {View} from "../view";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit, View {
  type = 'ProfileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}
