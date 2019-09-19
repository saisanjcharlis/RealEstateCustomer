import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'emi-detail',
  templateUrl: './emi-detail.component.html',
  styleUrls: ['./emi-detail.component.css']
})
export class EmiDetailComponent implements OnInit, OnChanges {
  @Input() showMePartially: boolean;
  @Input() dateSelected: string;
  constructor() { }
  showEmiDetail;
  ngOnInit() {
    
  }
  props;
  ngOnChanges(){
    // var dateString = this.dateSelected;
    // console.log(this.dateSelected)
    console.log("hello")

    if(localStorage.getItem('showEmiDetail')){
      this.showEmiDetail=localStorage.getItem('showEmiDetail');
    } else {
      this.showEmiDetail = 'false';
    }
    this.props=JSON.parse(localStorage.getItem('passbookList'));
  }
}
