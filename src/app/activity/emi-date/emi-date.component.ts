import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'emi-date',
  templateUrl: './emi-date.component.html',
  styleUrls: ['./emi-date.component.css']
})
export class EmiDateComponent implements OnInit {
  now = Date.now();  
  days = 24 * 60 * 60 * 1000; 

  emiDates = [new Date(this.now + 10 * this.days),new Date(this.now +11 * this.days)];

  options: any = {  
    format12h: true,
    enabledDateRanges: [  
      { start: this.emiDates[0], end: this.emiDates[1] }
     ] 
  };  
  date: Date = new Date;  
  showVar: boolean = false;
  dateString: string = "Select a date";
  dateChanged () {  
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    
    var year = this.date.getFullYear();
    var monthSelected = month[this.date.getMonth()];
    var day = this.date.getDate();
    this.dateString = monthSelected + " " + (day) + ", " + year;
    if(this.date.getDate() == this.emiDates[1].getDate()){
      this.showVar = true;
    }
    else{
      this.showVar = false;
    }
  } 
  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    // $('.datepicker--cell[style*="background: #FCB332 "]')
    console.log( $('.datepicker--cell[style*="background: #FCB332 "]'));
  //     if( $('.datepicker--cell').css('background') == 'FCB332' ) {
  //     console.log('It equal block');
  //  } else {
  //     console.log('It did not equal block');
  //  }
  }
}
