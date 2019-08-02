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
  ngOnChanges(){
    var dateString = this.dateSelected;
  }
}
