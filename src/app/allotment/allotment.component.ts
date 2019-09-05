import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-allotment',
  templateUrl: './allotment.component.html',
  styleUrls: ['./allotment.component.css']
})
export class AllotmentComponent implements OnInit {
  plotSelected = localStorage.getItem('plotSelected');
  constructor() { }

  ngOnInit() {
    $('.ui.checkbox')
  .checkbox()
;
  }

}
