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
  ngOnInit() {
    
  }
  props;
  ngOnChanges(){
    var dateString = this.dateSelected;
    this.props=JSON.parse(localStorage.getItem('passbookList'));
  }
}
