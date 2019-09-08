import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages = [
    "Message 1",
    "Message 2"
  ];
  constructor() { }
  ngOnInit() {
  }

}
