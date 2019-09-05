import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.css']
})
export class PaymentPlanComponent implements OnInit {
  plotSelected = localStorage.getItem('plotSelected');
  bookPlot = false;
  constructor() { }
  hoverCard(e){
    $(e.target.querySelector('button')).removeClass('basic');
    $(e.target.querySelector('button')).addClass('blue');
    $(e.target).addClass("animate"); 
  }
  hoverCardRemove(e){
    $(e.target.querySelector('button')).removeClass('blue');
    $(e.target.querySelector('button')).addClass('basic');
    $(e.target).removeClass("animate"); 
  }
  viewPaymentStructure(){
    this.bookPlot=true;
  }
  schemeSelect(){
    this.bookPlot=false;
  }
  outrightSelected(){
    $('.ui.modal.terms').modal('show');
  }
  emiSelected(){
    $('.ui.modal.terms').modal('show');
  }
  ngOnInit() {
  }

}
