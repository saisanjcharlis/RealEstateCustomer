import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4",
    "Message 5",
    "Message 6"
  ];
  constructor() { }
  onHide(hide: boolean){
    if(hide){
      $('.gridContainer').css( "grid-template-columns", "15% 80%" );
    } else {
      $('.gridContainer').css( "grid-template-columns", "4% 90%" );
    }

  }
  ngOnInit() {
  }

}
