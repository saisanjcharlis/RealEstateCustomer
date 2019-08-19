import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'plot-info-container',
  templateUrl: './plot-info-container.component.html',
  styleUrls: ['./plot-info-container.component.css']
})
export class PlotInfoContainerComponent implements OnInit {

  constructor() { }
  ngOnInit() {

  }
  ngAfterViewInit() {
    $('.ui.rating').rating();
  }
}
