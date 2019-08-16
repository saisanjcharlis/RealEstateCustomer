import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.container .event')
    .visibility({
      type       : false,
      transition : 'fade in',
      duration   : 1000
    });
  }

}
