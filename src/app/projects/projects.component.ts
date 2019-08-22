import { Component, OnInit, HostListener } from '@angular/core';
import { Marker } from '../../models/marker';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { LocationsService } from '../../services/locations.service';
import {Location} from '@angular/common';
import { MapsService } from '../../services/maps.service';
import { Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  homeTypes=[];
  plusYes = true;
  constructor(
    private locationService: LocationsService,
    private mapApiLoader: MapsAPILoader,
    private mapsService: MapsService,
    private router: Router) {
    for (let i = 0; i < 5; i++) {
          const url = 'https://loremflickr.com/640/480?random=' + (i +1);
          this.imagesList[i] = {
            url: url,
            show: false
        };
        }
   }
  public lat: number;
  public lng: number;
  public zoom: number;
  icon;
  public openedWindow: number;
  public markers: Marker[] = this.locationService.getMarkers();


    
    // placeMarker(position: any) {
    // const lat = position.coords.lat;
    // const lng = position.coords.lng;
    // const plotNumber = position.coords.plotNumbers;
    // const projName = position.coords.projectName;
    // this.markers.push({ lat: lat, lng: lng, plotNumbers: plotNumber,projectName: projName, city: 'asd',state:'sada','postalcode':'21131','projectLink':'asdas'});
    // }
  markerClick(e){
    this.router.navigate(['/projectDetail']);
    console.log(e);
  }
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
      "homeType": "plot",
      "beds": [3,4,5],
      "agents": []
    },
    {
      "projectName": "Spectra Galaxy",
      "minPrice": 7800000,
      "minPriceParsed": "78,00,000",
      "maxPrice": 50000000,
      "minSize": 340,
      "maxSize": 800,
      "address1": " 3343 C, Yadagirigutta",
      "address2": "Hyderabad, TS 502012",
      "saleStatus": "For Sale",
      "imageUrl": "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
      "likedStatus": true,
      "rating": 5,
      "postedOn": "23 Jul 2018",
      "state": "hyderabad",
      "zipcode": "500032",
      "lat": "12323213",
      "long": "1321331",
      "homeType": "plot",
      "beds": [1,2,3,4,5],
      "agents": []
    },
    {
      "projectName": "Prado",
      "minPrice": 10000000,
      "minPriceParsed": "1,00,00,000",
      "maxPrice": 50000000,
      "minSize": 400,
      "maxSize": 1200,
      "address1": "21, Road No.31, Jubilee Hills",
      "address2": "Hyderabad, TS 500032",
      "saleStatus": "Sold",
      "imageUrl": "http://www.spectraindia.in/wp-content/uploads/2016/09/Prado1.jpg",
      "likedStatus": false,
      "rating": 4,
      "postedOn": "04 Aug 2019",
      "state": "hyderabad",
      "zipcode": "500032",
      "lat": "12323213",
      "long": "1321331",
      "homeType": "plot",
      "beds": [3,4,5],
      "agents": []
    }
  ];

  images = [
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/09/Prado1.jpgz",
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/09/Prado1.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/09/Prado1.jpg"
  ];
  filterTrue = false;
  
  addPlus(){
    this.plusYes = !this.plusYes;
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

    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
    this.zoom = this.mapsService.zoom;
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
 
  likedProject(e){
    $(e.target).transition('pulse');
    if( $(event.target).hasClass('blue')){
      $(e.target).removeClass('blue'); 
      $(e.target).addClass('outline');
    } else {
      $(e.target).addClass('blue'); 
      $(e.target).removeClass('outline');
     
      $('body').toast({
        message: 'You have liked this project.',
        displayTime: 1000,
        class: 'blue'
      });
    }
   
    $('.toast-box').css("margin-top","50px");
  }
  homeTypeFilter(e){
    let propLabel=$(e.target).parent().text().trim();
    if(e.target.checked == false){
      this.homeTypes=this.homeTypes.filter(function(types) {
        return types.indexOf(propLabel.toLowerCase()) === -1;
      });
    }
    else{
      this.homeTypes.push($(e.target).parent().text().trim().toLowerCase());
    }
    console.log(this.homeTypes);
  }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
    $('.homeButton').popup({
      popup : $('.homePop'),
      on    : 'click'
    });
    $('.bedsButton').popup({
      popup : $('.bedPop'),
      on    : 'click'
    });
    $('.priceButton').popup({
      popup : $('.pricePop'),
      on    : 'click'
    });
    $('.statusButton').popup({
      popup : $('.statusPop'),
      on    : 'click'
    });
    $('.locationButton').popup({
      popup : $('.savedSearchPop'),
      on    : 'click'
    });


    if(window.innerWidth>768){
      // this.addCoBuy();
    }
    console.log(this.markers);
    $('.ui.rating').rating();
  }
  ngOnDestroy(){
    $('body .modal').remove();
  }
}
