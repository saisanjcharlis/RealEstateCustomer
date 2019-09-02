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
  nextPlan(){
    if(this.planDefault<3){
      this.planDefault++;
    }
  
  }
  prevPlan(){
    if(this.planDefault>1){
      this.planDefault--;
    }
    
  }
  displayPlot(e){
    this.plotSelected=e.target.title;
    $('.ui.modal.plotInfo').modal('show').modal('refresh');
    console.log(e.target.title);
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
  ngOnInit() {
  }

}
