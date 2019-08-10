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
  images = [
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/09/Prado1.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/09/Prado1.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/09/Prado1.jpg"
  ];
  thumbnail=true;
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
  triggerView(){
    this.thumbnail = !this.thumbnail;
  }
  toggleActive(e){
    e.target.classList.toggle("activeProperty");
    console.log(e.target);
  }
  changeToUpcoming(){
    
    $('.listing').removeClass('activeProject');
    $('.upcoming').addClass('activeProject');
    
  }
  changetoListing(){
    
    $('.listing').addClass('activeProject');
    $('.upcoming').removeClass('activeProject');
  }
  moreFilter(){
    $('.ui.dropdown')
    .dropdown();

    if(this.filterTrue == false){
      $('.filterMenu').css('display','initial');
      $('.projects').css('display','none');
      $(".displayInfo").css("display","none");
    } else {
      $('.filterMenu').css('display','none');
      $('.projects').css('display','flex');
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
