import { Component, OnInit } from '@angular/core';
import {View} from '../view';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent implements OnInit, View {
  type = 'MessageViewComponent';

  messages = [
    {
      title: 'New bill',
      sender: 'Mobility',
      content: 'Your new bill was just created!', date: '2019-06-20'
    },
    {
      title: 'Achievement',
      sender: 'Just Mobility',
      content: 'Good Work; You lowered your footprint by using the public transport the last few days', date: '2019-06-21'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
