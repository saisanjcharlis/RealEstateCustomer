import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emi-date',
  templateUrl: './emi-date.component.html',
  styleUrls: ['./emi-date.component.css']
})
export class EmiDateComponent implements OnInit {
  now = Date.now();  
  days = 24 * 60 * 60 * 1000; 
  options: any = {  
    format12h: true,
    enabledDateRanges: [  
      { start: new Date(this.now - 10 * this.days), end: new Date(this.now -9 * this.days) }
     ] 
  };  
  date: Date = new Date;  
  
  dateChanged () {  
    console.log(this.date);  
  } 
  constructor() { }

  ngOnInit() {
  }

}
