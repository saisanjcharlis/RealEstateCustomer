import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor() { }
  rightDate(){
    $('.itemContainer').animate({left: "-=105px"},500);
  }
  leftDate(){
    $('.itemContainer').animate({left: "+=105px"},500);
  }
  selectDate(e){
    $('.ldpGrayDayOptionContainer.selected').removeClass('selected');
    $(e.target).addClass("selected");
  }
  ngOnInit() {
    $('.ui.rating').rating();
    $('.demo.menu .item').tab();
    if(window.innerWidth>850)
       {
        
       }
       else{
        $(".ui.tab.segment").addClass("active");
       }
  }

}
