import { Component, OnInit, ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';
declare var $:any;
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  images = [
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg"
  ];
  labelLayerId: string;
  saveText="Save";
  lat: number=17.0719424;
  long: number=78.2358877; 
  zoom: number=15;
  plotSelected;
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
  projects = [
    {
      "projectName": "Spectra Fortune",
      "minPrice": 5600000,
      "minPriceParsed": "56,00,000",
      "maxPrice": 20000000,
      "minSize": 240,
      "maxSize": 400,
      "address1": "Plot No.31, Balanagar",
      "address2": "Hyderabad, TS 500032",
      "saleStatus": "For Sale",
      "imageUrl": "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg",
      "likedStatus": false,
      "rating": 2,
      "postedOn": "04 Aug 2019",
      "state": "hyderabad",
      "zipcode": "500032",
      "lat": "12323213",
      "long": "1321331",
      "homeType": "plots",
      "beds": [3,4,5],
      "agents": []
    }
  ];
  constructor() { }
  save(e){
   if(this.saveText=="Save"){
    this.saveText="Saved";
   } else {
    this.saveText="Save";
   }
   $(e.target).children('i').toggleClass('outline');
  }
  mouseHover(e){
    $(e.target).removeClass('basic');
  }
  mouseLeave(e){
    $(e.target).addClass('basic');
  }
  share(){
    $('.ui.modal.shareModal').modal('show');
    
  }
  agentModal(){
    $('.ui.modal.agentModal').modal('show');   
  }
  allotAgent(){
    $('body').toast({
      class: 'success',
      message: `Check mail for Information.`
    });
    $('.toast-box').css("margin-top","50px");
  }
  sendMail(){
    $('.ui.modal.shareModal').modal('hide');
  }
  rightDate(){
    $('.itemContainer').animate({left: "-=105px"},500);
  }
  leftDate(){
    $('.itemContainer').animate({left: "+=105px"},500);
  }
  selectDate(e){
    $('.ldpGrayDayOptionContainer.selectedDate').removeClass('selectedDate');
    $(e.target).addClass("selectedDate");
  }
 
  
  openLocationMap(){
    $('.ui.modal.locationMap').modal('show');
  }
  openGMap(){
    $('.ui.modal.googleMap').modal('show');
  }
  displayPlot(e){
    this.plotSelected=e.target.title;
    $('.ui.modal.plotInfo').modal('show').modal('refresh');
    console.log(e.target.title);
  }
  plotTab=false;
  plotDetails(){
    $('.gridContainer').css('grid-template-columns','23% 75%');
    $('.gridContainer').css('grid-gap','10px 2%');
    this.plotTab = true;
  }
  plotDetailsReset(){
    $('.gridContainer').css('grid-template-columns','50% 45%');
    $('.gridContainer').css('grid-gap','10px 1rem');
    this.plotTab = false;
  }
  ngOnInit() {
    $('.demo.menu .item').tab();
    if(window.innerWidth>930)
       {
        
       }
       else{
        $(".ui.tab.segment").addClass("active");
       }
  }
  ngAfterViewInit() {
    $('.event-modal').modal({
      allowMultiple: true
    });
    $('.ui.rating').rating();
  }
  ngOnDestroy(){
    $('body .modal').remove();
  }
}
