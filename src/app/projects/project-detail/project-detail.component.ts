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
  lat: number=17.38;
  long: number=78.48; 
  zoom: number=15;
  config = {
    fade: true,
    alwaysOn: true,
    neverOn: false,

    // fill
    fill: true,
    fillColor: '#0066ff',
    fillOpacity: 0.4,

    // stroke
    stroke: true,
    strokeColor: '#4d0ec0',
    strokeOpacity: 1,
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
 
  addCoBuy(){
    $('.ui.modal.coBuy').modal('show');
  }
  openLocationMap(){
    $('.ui.modal.locationMap').modal('show');
  }
  openGMap(){
    $('.ui.modal.googleMap').modal('show');
  }
  openImage1(){
    $('.ui.modal.plotMap1').modal('show');
  }
  openImage2(){
    $('.ui.modal.plotMap2').modal('show');
  }
  openImage3(){
    $('.ui.modal.plotMap3').modal('show');
  }
  ngOnInit() {
    // $('.map').maphilight(
    //   {
    //     alwaysOn: true
    //   }
    // );
    $('.demo.menu .item').tab();
    if(window.innerWidth>930)
       {
        
       }
       else{
        $(".ui.tab.segment").addClass("active");
       }
  }
  ngAfterViewInit() {
  //   $('#plotPlan1').mapster({
  //     fillOpacity: 0.5,
  //     render_highlight: {
  //         fillColor: '2aff00',
  //         stroke: true,
  //     },
  //     render_select: {
  //         fillColor: 'ff000c',
  //         stroke: false,
  //     },
  //     fadeInterval: 50,
  //     mapKey: 'data-key',
  //     areas: [
  //     {
  //         key: '990',
  //         selected: true
  //     },
  //     {
  //         key: '949',
  //         selected: true
  //     },
  //     {
  //         key: '985',
  //         staticState: false
  //     },
  //     {
  //         key: '994',
  //         isSelectable: false
  //     }]
  // });
  //   var basic_opts = {
  //     mapKey: 'data-key'
  // };
  
  // var initial_opts = $.extend({},basic_opts, 
  //     { 
  //         staticState: true,
  //         fillOpacity: 1,
  //         fill: true,
  //         stroke: true,
  //         strokeWidth: 5,
  //         mapKey: 'data-key',
  //       listKey: 'data-key',
  //         strokeColor: '0066ff',
  //         fillColor: '0066ff',
  //         areas: [
  //           {
  //               key: "990",
  //               fillColor: "0066ff"
  //           }
  //           ],
  //           showToolTip: true,
  //           toolTipClose: ["tooltip-click", "area-click"],
  //     });
  
  // $('#plotPlan1').mapster(initial_opts)
  //     .mapster('set',true,'990', {
  //         fill: true,
  //         fillColor: '0066ff'
  //     })
  //     .mapster('snapshot')
  //     .mapster('rebind',basic_opts);



  //   $('#plotPlan1 area').popup({
  //     popup : $('.plotInfoToolTip'),
  //     on    : 'click'
  //   });
    $('.ui.rating').rating();
  }
  ngOnDestroy(){
    $('body .modal').remove();
  }
}
