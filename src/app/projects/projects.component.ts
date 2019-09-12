import { Component, OnInit, HostListener } from '@angular/core';
import { Marker } from '../../models/marker';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { LocationsService } from '../../services/locations.service';
import { Location } from '@angular/common';
import { MapsService } from '../../services/maps.service';
import { Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ConfigService } from '../../services/config.service';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
declare var $:any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [LoginComponent]
})
export class ProjectsComponent implements OnInit {
  homeTypes=[];
  plusYes = true;
  locationList=["Shadnagar, TS", "Yadagirigutta, TS"];
  updateResults(val){
    this.locationList=["Shadnagar, TS", "Yadagirigutta, TS"];
    this.locationList=this.locationList.filter( (value)=>{
     return  value.toLowerCase().trim().includes(val.toLowerCase().trim());
    });
  }
  minPriceFilterValue="0+";
  maxPriceFilterValue="Any Price";
  constructor(
    private locationService: LocationsService,
    private mapApiLoader: MapsAPILoader,
    private mapsService: MapsService,
    private login: LoginComponent,
    private router: Router,
    private config: ConfigService,
    private http: HttpClient) {
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
  location="Telangana Real Estate";
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
      "projectName": "Viceroyce Residency",
      "minPrice": 5600000,
      "minPriceParsed": "5.6 Lac",
      "maxPrice": 20000000,
      "minSize": 120,
      "maxSize": 1145,
      "address1": "Allisabguda, Shadnagar ",
      "address2": "TS 509228",
      "saleStatus": "Upcoming",
      "imageUrl": "assets/viceroyceIcon.png",
      "likedStatus": false,
      "rating": 2,
      "postedOn": "04 Aug 2019",
      "state": "hyderabad",
      "zipcode": "509228",
      "lat": "12323213",
      "long": "1321331",
      "homeType": "plots",
      "agents": []
    },
    {
      "projectName": "Spectra Galaxy",
      "minPrice": 7800000,
      "minPriceParsed": "7.8 Lac",
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
      "agents": []
    }
  ];
  mobileFilterOn(){
 
  }
  saveSearch(){
   
   
  }
  projects = this.hyderabadProjects;
  selectLocation(e){
   let locName = $(e.target).children('span').text();
   localStorage.setItem('projectsDomain',$(e.target).children('span').text());
   if(locName.includes('Yadagirigutta')){
     this.locationSelected = "Yadagirigutta, TS";
     this.location = "Telangana Real Estate";
     this.projects=this.hyderabadProjects.filter( (project) =>{
       return project.address1.includes('Yadagirigutta');
     });
     this.lat = 17.5848205;
     this.zoom=12;
     this.lng = 78.9354305;
   }
   if(locName.includes('Shadnagar')){
    this.locationSelected = "Shadnagar, TS";
    this.location="Telangana Real Estate";
    this.projects=this.hyderabadProjects.filter( (project) =>{
      return project.address1.includes('Shadnagar');
    });
    this.lat = 17.070352;
    this.zoom=12;
    this.lng = 78.1998229;
   }
   if(locName.includes('Telangana')){
    this.locationSelected = "Telangana";
    this.location="Telangana Real Estate";
    this.projects=this.hyderabadProjects;
    this.lat = this.mapsService.lat;
    this.zoom=8;
    this.lng = this.mapsService.lng;
   }
  }
  homeTypeFilter(e){
    
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
    

    if(localStorage.getItem('projectsDomain')){
      if('telangana'.includes(localStorage.getItem('projectsDomain'))){ 
        this.locationSelected = "Telangana";
        this.location="Telangana Real Estate";
        this.projects=this.hyderabadProjects;
       } else if('yadagirigutta, ts'.includes(localStorage.getItem('projectsDomain'))) {
         this.locationSelected = "Yadagirigutta, TS";
         this.location = "Telangana Real Estate";
         this.projects=this.hyderabadProjects.filter( (project) => {
           return project.address1.includes('Yadagirigutta');
         });
       } 
        else if('shadnagar, ts'.includes(localStorage.getItem('projectsDomain'))) { 
         this.locationSelected = "Shadnagar, TS";
         this.location = "Telangana Real Estate";
         this.projects=this.hyderabadProjects.filter( (project) => {
          return project.address1.includes('Shadnagar');
        });
       } else {
           this.locationSelected = "";
           this.location="";
           this.projects=[];
       }
   
    }
    

    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
    this.zoom = this.mapsService.zoom;
    if(this.locationSelected.includes("Shadnagar")){
      this.lat = 17.070352;
      this.zoom=12;
      this.lng = 78.1998229;
    }
    if(this.locationSelected.includes("Yadagirigutta")){
      this.lat = 17.5848205;
      this.zoom=12;
      this.lng = 78.9354305;
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
  
  locationSearchEnter(e){
    if('telangana'.includes(e.target.value.toLowerCase()) || 'hyderabad'.includes(e.target.value.toLowerCase())){
      this.locationSelected = "Telangana";
      this.location="Telangana Real Estate";
      this.projects = this.hyderabadProjects; 
    } else if("yadagirigutta".includes(e.target.value.toLowerCase())){
      this.locationSelected = "Yadagirigutta, TS";
      this.location = "Telangana Real Estate";
      this.projects=this.hyderabadProjects.filter( (project) => {
           return project.address1.includes('Yadagirigutta');
      });
    } else if("shadnagar".includes(e.target.value.toLowerCase())){
      this.locationSelected = "Shadnagar, TS";
      this.location = "Telangana Real Estate";
      this.projects=this.hyderabadProjects.filter( (project) => {
           return project.address1.includes('Shadnagar');
      });
    }
    else {
      this.projects = [];
    }
    $('.locationButton').popup('hide');
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
  statusTypeFilter(e){
    // let propLabel=$(e.target).parent().text().trim().toLowerCase();
    // if(e.target.checked == false){
    //     this.projects = this.projects.filter( (project)=>{
    //       return project.saleStatus.toLowerCase().indexOf(propLabel) === -1;
    //     });

    // }
    // else{
    //   this.hyderabadProjects.map((project)=>{
    //     if(project.saleStatus.toLowerCase().includes(propLabel)){
    //       this.projects.push(project);
    //     }
    //   });

    // }
    

  }
  ngAfterViewInit() {
  
    $('.ui.dropdown').dropdown();
    $('.homeButton').popup({
      popup : $('.homePop'),
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
    $('.filterMobile').popup({
      popup : $('.mobileFilterPop'),
      on    : 'click',
      lastResort: true
    });

    $('.ui.rating').rating();
  }
  ngOnDestroy(){
    $('body .modal').remove();
  }
}
