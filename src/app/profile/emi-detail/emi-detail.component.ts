import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emi-detail',
  templateUrl: './emi-detail.component.html',
  styleUrls: ['./emi-detail.component.css']
})
export class EmiDetailComponent implements OnInit {
  displayInfo = true;
  constructor() { }
  closeInfo(){
    this.displayInfo=false;
  }
  ngOnInit() {
  }

}
