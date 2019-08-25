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
  minPriceFilterValue="0+";
  maxPriceFilterValue="Any Price";
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
  styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ];
  hyderabadProjects = [
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
      "homeType": "plots",
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
      "homeType": "apartments",
      "beds": [3,4,5],
      "agents": []
    }
  ];
  projects = this.hyderabadProjects;
  selectLocation(e){
   let locName = $(e.target).children('span').text();
   localStorage.setItem('projectsDomain',$(e.target).children('span').text());
   if(locName.includes('Bangalore')){
     this.locationSelected = "Bangalore, KA";
     this.location = "Bangalore Real Estate";
     this.projects=[];
     this.lat = 12.9716;
     this.lng = 77.5946;
   }
   if(locName.includes('Hyderabad')){
    this.locationSelected = "Hyderabad, TS";
    this.location="Hyderabad Real Estate";
    this.projects=this.hyderabadProjects;
    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
   }
   if(locName.includes('Current')){
    this.locationSelected = "Hyderabad, TS";
    this.location="Hyderabad Real Estate";
    this.projects=this.hyderabadProjects;
    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
   }
  }
  clearFilters(e){
    this.locationSelected="";
    $(e.target).removeClass('basic');
    $('body').toast({
      message: 'Clearing Filters',
      class : 'blue',
    });
    $('.toast-box').css("margin-top","50px");
    setTimeout(function(){ 
      $(e.target).addClass('basic'); 
    }, 3000);
    
   
    
    this.projects=this.hyderabadProjects;
  }
  filterTrue = false;
  paths = [
      { lat: 17.364410712210564, lng: 77.87957648390443},
      { lat: 17.460067118859435, lng: 78.00317267531068},
      { lat: 17.54257955735634, lng: 77.89605597609193},
      { lat: 17.623745618515255, lng: 78.04711798781068},
      { lat: 18.72508731475603, lng: 77.84217862243918},
      { lat: 19.036942323532987, lng: 79.20448330993918},
      { lat: 18.41265587905062, lng: 79.34730557556418},
      { lat: 18.016094792514508, lng: 79.36927823181418},
      { lat: 17.48246499888581, lng: 79.58900479431418},
      { lat: 16.947265244343928, lng: 78.77601651306418},
      { lat: 17.020815443417963, lng: 78.19374112243918},
      { lat: 17.367161112721906, lng: 77.89711026306418}];
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
  }
  changeToUpcoming(){
    
    $('.listing').removeClass('activeProject');
    $('.upcoming').addClass('activeProject');
    
  }
  changetoListing(){
    
    $('.listing').addClass('activeProject');
    $('.upcoming').removeClass('activeProject');
  }
  addBed(e){
    
    if($(e.target).hasClass('blue'))
    {
      $(e.target).removeClass('blue');
      $(e.target).addClass('basic');
    } else {
      $(e.target).removeClass('basic');
      $(e.target).addClass('blue');
    }
    

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
    if(localStorage.getItem('projectsDomain').includes('Hyderabad')){
     this.locationSelected = "Hyderabad, TS";
     this.location="Hyderabad Real Estate";
     this.projects=this.hyderabadProjects;
    } else if(localStorage.getItem('projectsDomain').includes('Bangalore')) {
      this.locationSelected = "Bangalore, KA";
      this.location = "Bangalore Real Estate";
      this.projects=[];
    } 
     else if(localStorage.getItem('projectsDomain').includes('Current Location')) {
      this.locationSelected = "Hyderabad, TS";
      this.location = "Hyderabad Real Estate";
      this.projects=this.hyderabadProjects;
    } else {
        this.locationSelected = "";
        this.location="";
        this.projects=[];
    }


    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
    this.zoom = this.mapsService.zoom;
    if(this.locationSelected.includes("Bangalore")){
      this.lat = 12.9716;
      this.lng = 77.5946;
    }
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
  strokeColorMap='#0066ff';
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
  infoWindowOpened = null;
  previous_info_window = null;
  mapClicked(e){
    if (this.previous_info_window != null ) {
      this.previous_info_window.close()
      }  
  }
  markerClick(e){
    this.router.navigate(['/projectDetail']);
  }
  onMouseOver(gm, window) {
    if (this.previous_info_window == null)
      this.previous_info_window = window;
    else{
      this.infoWindowOpened = window;
      this.previous_info_window.close()
    }
    this.previous_info_window = window;
  
    window.open();
  }
  locationSelected = "Hyderabad, TS";
  locationSearch(e){
    if(e.toLowerCase().includes("hyderabad")){
      this.projects = this.hyderabadProjects;
    } else {
      this.projects = [];
    }
  }
  minPriceFilter(e){
    this.projects = this.hyderabadProjects;
    this.minPriceFilterValue = $(e.target).text().substring(0, $(e.target).text().length - 1);
    let minNumber = $(e.target).text().substring(0, $(e.target).text().length - 1).split(',').join('');
    let maxNumber  = this.maxPriceFilterValue.substring(0, $(e.target).text().length - 1).split(',').join('');
    if(this.maxPriceFilterValue=="Any Price"){
      this.projects = this.projects.filter( (project) =>{
        return project.minPrice>= minNumber;
      });
    } else {
      let maxPriceNumber = parseInt(maxNumber, 10);
      this.projects = this.projects.filter( (project) =>{
        return project.minPrice>= minNumber && project.minPrice <= maxPriceNumber;
      });
    }
    
  }
  maxPriceFilter(e){
    this.projects = this.hyderabadProjects;
    this.maxPriceFilterValue = $(e.target).text().substring(0, $(e.target).text().length - 1);
    let maxNumber = $(e.target).text().substring(0, $(e.target).text().length - 1).split(',').join('');
    let minNumber  = this.minPriceFilterValue.substring(0, $(e.target).text().length - 1).split(',').join('');
    if(this.maxPriceFilterValue=="Any Price"){
      this.projects = this.projects.filter( (project) =>{
        return project.minPrice<= maxNumber;
      });
    } else {
      let maxPriceNumber = parseInt(maxNumber, 10);
      let minPriceNumber = parseInt(minNumber, 10);
      this.projects = this.projects.filter( (project) =>{
        return project.minPrice>= minPriceNumber && project.minPrice <= maxPriceNumber;
      });
    }

  }
  homeTypeFilter(e){
    let propLabel=$(e.target).parent().text().trim().toLowerCase();
    if(e.target.checked == false){
        this.projects = this.projects.filter( (project)=>{
          return project.homeType.indexOf(propLabel) === -1;
        });

    }
    else{
      this.hyderabadProjects.map((project)=>{
        if(project.homeType.includes(propLabel)){
          this.projects.push(project);
        }
      });

    }
    

  }
  statusTypeFilter(e){
    let propLabel=$(e.target).parent().text().trim().toLowerCase();
    if(e.target.checked == false){
        this.projects = this.projects.filter( (project)=>{
          return project.saleStatus.toLowerCase().indexOf(propLabel) === -1;
        });

    }
    else{
      this.hyderabadProjects.map((project)=>{
        if(project.saleStatus.toLowerCase().includes(propLabel)){
          this.projects.push(project);
        }
      });

    }
    

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
    $('.moreButton').popup({
      popup : $('.moreFilterPop'),
      on    : 'click'
    });


    if(window.innerWidth>768){
      // this.addCoBuy();
    }
    $('.ui.rating').rating();
  }
  ngOnDestroy(){
    $('body .modal').remove();
  }
}
