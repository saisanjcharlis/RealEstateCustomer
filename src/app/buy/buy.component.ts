import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
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
  constructor(private cdr: ChangeDetectorRef,  private routes: Router) { }
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
  plotNumber=0;
  modelChange(newObj){
    if(newObj==null){
      $('.available').css('fill','#2fce72');
    }
  }
  searchPlot(e){
    this.plotSelected=e.target.value;   
    if($("#"+this.plotSelected).length){
      $('.available').css('fill','none');
      $("#"+this.plotSelected).css('fill','#2fce72');
    } else {
      $('.available').css('fill','#2fce72');
      $('body').toast({
        class: 'error',
        message: `Plot Does not Exist`
      });
      $('.toast-box').css("margin-top","50px");
    }
    
  }
  openAttr(e){
    this.plotSelected = e.target.id;
    localStorage.setItem('plotSelected',this.plotSelected);
    $('.ui.modal.plotInfo').modal('show');
  }
  addPlot(){
    $('.ui.modal.plotInfo').modal('hide');
    this.routes.navigate(['/payPlans']);

  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    // $('.available').popup({
    //   popup : $('.plotPopup'),
    //   on    : 'hover'
    // });
    $('.ui.rating').rating();

  }
}
