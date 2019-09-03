import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  saveText="Save";
  plotSelected;
  plotSelectedPop;
  constructor() { }
  config = {
    fade: true,
    alwaysOn: true,
    neverOn: false,

    // fill
    fill: true,
    fillColor: '#00ff00',
    fillOpacity: 0.6,

    // stroke
    stroke: true,
    strokeColor: '#414143',
    strokeOpacity: 0.8,
    strokeWidth: 1,

    // shadow:
    shadow: true,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 10
  };
  planDefault = 1;
  selectPlan1(e){
    $('.selectedPlan').addClass('basic');
    $(e.target).addClass('selectedPlan');
    $(e.target).removeClass('basic');
    this.planDefault =1;
  }
  selectPlan2(e){
    $('.selectedPlan').addClass('basic');
    $(e.target).addClass('selectedPlan');
    $(e.target).removeClass('basic');
    this.planDefault =2;
  }
  selectPlan3(e){
    $('.selectedPlan').addClass('basic');
    $(e.target).addClass('selectedPlan');
    $(e.target).removeClass('basic');
    this.planDefault =3;
  }
  displayPlot(e){
    this.plotSelected=e.target.title;
    $('.ui.modal.plotInfo').modal('show').modal('refresh');
  }
  save(e){
    if(this.saveText=="Save"){
     this.saveText="Saved";
    } else {
     this.saveText="Save";
    }
    $(e.target).children('i').toggleClass('outline');
   }
   share(){
    $('.ui.modal.shareModal').modal('show');
    
  }
  searchPlotPop(e){

  }
  sendMail(){
    $('.ui.modal.shareModal').modal('hide');
  }
  searchPlot(e){
    this.plotSelected=e.target.value;
    $('.ui.modal.plotInfo').modal('show').modal('refresh');
  }
  plotCart = [];
  addPlot(){
    $('.ui.modal.plotInfo').modal('hide');
    this.plotCart.push(this.plotSelected);
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.ui.rating').rating();
    $('.cartButton').popup({
      popup : $('.cartList'),
      on    : 'click'
    });
  }
}
