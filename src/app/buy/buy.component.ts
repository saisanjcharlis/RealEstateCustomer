import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { textChangeRangeIsUnchanged } from 'typescript';
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

  sendMail(){
    $('.ui.modal.shareModal').modal('hide');
  }
  plotNumber:number;
  modelChange(newObj){
    if(newObj==null){
      $('.available').css('fill','#2fce72');
    }
    if($("#"+newObj).length){
      $('.available').css('fill','none');
      $("#"+newObj).css('fill','#2fce72');
      var elHeight = $("#"+newObj).offset().top;
      var windowHeight = $(window).height();
      var offset;
      if (elHeight+200 < windowHeight) {
        offset = elHeight - ((windowHeight / 2) - (elHeight / 2));
      }
      else {
        offset = elHeight-200;
      }

      $('html, body').animate(
        {
          scrollTop: offset,
        },
        100,
        'linear'
      );


    } else {
      // $('.available').css('fill','#2fce72');
      this.plotsList.result.results.map((plot)=>{
        if(plot.available_status==0){
          $('#'+plot.plot_no).css('fill','rgba(255,0,0,0.5)');
          $('#'+plot.plot_no).css('pointer-events','none');
        }
        if(plot.available_status==2){
          $('#'+plot.plot_no).css('fill','rgba(0,0,255,0.5)');
          $('#'+plot.plot_no).css('pointer-events','none');
        }
      });
    }
 
  }
  searchPlot(e){
    this.plotSelected = e.target.value;
    localStorage.setItem('plotSelected',this.plotSelected);
    this.plotSelectedAttr=this.plotsList.result.results.filter((plot)=>{
      return plot.plot_no==this.plotSelected;
    });
  }
  openAttr(e){
    this.plotSelected = e.target.id;
    localStorage.setItem('plotSelected',this.plotSelected);
    this.plotSelectedAttr=this.plotsList.result.results.filter((plot)=>{
      return plot.plot_no==this.plotSelected;
    });
    if(this.plotSelectedAttr[0]){
      this.plotSelectedProps=this.plotSelectedAttr[0];
      
      if(this.plotSelectedProps.available_status==0){
        this.availStatus="Not Available";
      } else if(this.plotSelectedProps.available_status==1){
        this.availStatus="Available";
      } else {
        this.availStatus="Partially Available";
      }
      sessionStorage.setItem('plotSelectedAttr',JSON.stringify(this.plotSelectedAttr));
      $('.ui.modal.plotInfo').modal('show');
    }
   
  }
  addPlot(){
    $('.ui.modal.plotInfo').modal('hide');
    this.routes.navigate(['/payPlans']);

  }
  plotsList;
  projectSelected;
  plotSelectedAttr;
  plotSelectedProps={
    available_status:0,
    plot_sqyards: 1,
    plot_view:'',
    extra_cost: 0
  };
  availStatus;
  ngOnInit() {
    this.projectSelected=JSON.parse(localStorage.getItem('projectSelected'));

    this.plotsList=JSON.parse(localStorage.getItem('plotsData'));
    this.plotsList.result.results.map((plot)=>{
      if(plot.available_status==0){
        $('#'+plot.plot_no).css('fill','rgba(255,0,0,0.5)');
        $('#'+plot.plot_no).css('pointer-events','none');
      }
      if(plot.available_status==2){
        $('#'+plot.plot_no).css('fill','rgba(0,0,255,0.5)');
        $('#'+plot.plot_no).css('pointer-events','none');
      }
    });
    
  }
  ngAfterViewInit() {
    $('.ui.rating').rating();

  }
}
