import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor() { }

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
