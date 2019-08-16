import { Component, OnInit, HostListener } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(event.target.innerWidth>480)
     {
      this.triggerPropertyViewNormal();
     }
     else{
      this.triggerPropertyView();
     }
  } 
  iconSearch = true;
  imagesList = [];
  location="Hyderabad Real Estate";
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
  addCoBuy(){
    $('.ui.modal.coBuy').modal('setting', 'transition', 'horizontal flip').modal('show');
  }
  triggerPropertyView(){
    $('.hiddenContent').removeClass('hidden');
    $('.visibleContent').removeClass('visible');
    $('.hiddenContent').addClass('visible');
    $('.visibleContent').addClass('hidden');
  }
  triggerPropertyViewNormal(){
    $('.hiddenContent').removeClass('visible');
    $('.visibleContent').removeClass('hidden');
    $('.hiddenContent').addClass('hidden');
    $('.visibleContent').addClass('visible');
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
      $('.filterMenu').transition('fade down');
      $('.filterMenu').css('display','initial');
      $(".projects").css('display','none');
      $(".displayInfo").css("display","none");
    } else {
      $('.filterMenu').transition('fade up');
      $('.filterMenu').css('display','none');
      $('.projects').css('display','flex');
      $(".displayInfo").css("display","block");
    }
    this.filterTrue = !this.filterTrue;
  
  }
  expandSearch(){
    $('.editable').removeAttr("disabled");
    $('.editable').focus();
    $('.editable').css('color','#0066ff');
    this.iconSearch = false;
  }
  cancel(){
    this.iconSearch = true;
    $('.editable').css('color','#000');
    $('.editable').attr("disabled",true);
  }
  ngOnInit() {

    $(document).scrollTop(0);
    $('.ui.checkbox').checkbox();
      if(window.innerWidth>480)
       {
        this.triggerPropertyViewNormal();
       }
       else{
        this.triggerPropertyView();
       }
    

  }
  ngAfterViewInit() {
    this.addCoBuy();
    $('.ui.rating').rating();
  }
  ngOnDestroy(){
    $('body .modals').remove();
  }
}
