import { Component, OnInit } from '@angular/core';
import {View} from "../view";

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.scss']
})
export class SettingsViewComponent implements OnInit, View {
  type = 'SettingsViewComponent';

  constructor() { }

  ngOnInit() {
  }



}
