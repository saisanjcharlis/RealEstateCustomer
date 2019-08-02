import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  iconSearch = true;
  constructor() { }
  expandSearch(){
    $(".container, .input").addClass("active");
    $("input[type='text']").focus();
    this.iconSearch = false;
  }
  cancel(){
    $(".container, .input").removeClass("active");
    $(".input").val("");
    this.iconSearch = true;
  }
  ngOnInit() {
    $(document).scrollTop(0);
  }

}
