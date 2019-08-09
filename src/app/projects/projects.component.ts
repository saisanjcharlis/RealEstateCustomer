import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  iconSearch = true;
  imagesList = [];
  filterTrue = false;
  constructor() {
    for (let i = 0; i < 5; i++) {
      const url = 'https://loremflickr.com/640/480?random=' + (i +1);
      this.imagesList[i] = {
        url: url,
        show: false
    };
    }
   }
  moreFilter(){
    $('.ui.dropdown')
    .dropdown();
    if(this.filterTrue == false){
      $(".displayInfo").css("display","none");
    } else {
      $(".displayInfo").css("display","block");
    }
    this.filterTrue = !this.filterTrue;
  
  }
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
    $('.ui.checkbox').checkbox();
  }

}
