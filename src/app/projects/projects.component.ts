import { Component, OnInit } from '@angular/core';
import { Marker } from '../../models/marker';
import { MapsAPILoader } from '@agm/core';
import { LocationsService } from '../../services/locations.service';
import { MapsService } from '../../services/maps.service';
import { Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ConfigService } from '../../services/config.service';
import { HttpClient} from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [LoginComponent]
})
export class ProjectsComponent implements OnInit {
  homeTypes=[];
  locationList=[];
  minPriceFilterValue="0+";
  maxPriceFilterValue="Any Price";
  public lat: number;
  public lng: number;
  public zoom: number;
  icon;
  locationSelected = "Hyderabad, TS";
  projectsApiList;
  public openedWindow: number;
  public markers: Marker[] = this.locationService.getMarkers();

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
  projects=[];

  constructor(
    private locationService: LocationsService,
    private mapApiLoader: MapsAPILoader,
    private mapsService: MapsService,
    private login: LoginComponent,
    private router: Router,
    private config: ConfigService,
    private http: HttpClient) {
   }
   viewProject(project){
    if(project.id==23){
      localStorage.setItem('projectSelected',JSON.stringify(project));
      let urlProjectDetails = `${this.config.url}services/v1/frontendcustomer/getprojectdetails`;
      var token = JSON.parse(localStorage.getItem('loginData')).token;
      this.http.post(urlProjectDetails,{"token": token,"params":{"project_id":project.id,"type":"neighbourhood"}}).subscribe((data:any) => {
        if(data.success==true){
          console.log(data);
          // localStorage.setItem('neighbourhoodData',JSON.stringify(data));
        }
      });
      this.http.post(urlProjectDetails,{"token": token,"params":{"project_id":project.id,"type":"properties"}}).subscribe((data:any) => {
        if(data.success==true){
          console.log(data);
           // localStorage.setItem('propertiesDetails',JSON.stringify(data));
        }
      });
      
      this.router.navigate(['/projectDetail']);
    } 
    
  }
   updateResults(val){
    this.projectsApiList.map( (data) => {
      this.locationList.push(data.city);
    });
    this.locationList=this.locationList.filter( (value)=>{
     return  value.toLowerCase().trim().includes(val.toLowerCase().trim());
    });
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
    
   
    
    this.projects=this.projectsApiList;
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
  markerClick(marker){
    this.projects=this.projectsApiList.filter( (project) =>{
      return project.id==marker.id;
     });
    this.locationSelected = marker.city+', TS';
    this.location=  marker.state+ "Real Estate";
    // this.router.navigate(['/projectDetail']);
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
 
  
  minPriceFilter(e){
    this.projects = this.projectsApiList;
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
    this.projects = this.projectsApiList;
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
  selectLocation(e){
    let locName = $(e.target).children('span').text().toLowerCase();
    localStorage.setItem('projectsDomain',$(e.target).children('span').text().toLowerCase());
 
    this.projects=this.projectsApiList.filter( (project) =>{
     return project.project_address.toLowerCase().includes(locName);
    });
    this.zoom=12;
    this.projectsApiList.map( (project)=>{
     if(project.project_address.toLowerCase().includes(locName)){
       this.lat=project.latitude;
       this.lng=project.longitudes;
       this.locationSelected = project.city+', TS';
       this.location=  project.state+ "Real Estate";
     }
    });
       if(locName.includes('telangana') || locName.includes('hyderabad')){
         this.locationSelected = "Telangana";
         this.location="Telangana Real Estate";
         this.projects=this.projectsApiList;
         this.lat = this.mapsService.lat;
         this.zoom=8;
         this.lng = this.mapsService.lng;
       }
   }
   locationSearchEnter(e){
    
    this.projects=this.projectsApiList.filter( (project) =>{
      return project.project_address.toLowerCase().includes(e.target.value.toLowerCase());
     });

     if('telangana'.includes(e.target.value.toLowerCase()) || 'hyderabad'.includes(e.target.value.toLowerCase())){
      this.locationSelected = "Telangana";
      this.location="Telangana Real Estate";
      this.projects = this.projectsApiList; 
      this.lat = this.mapsService.lat;
      this.zoom=8;
      this.lng = this.mapsService.lng;
    } 
   
    this.projectsApiList.map( (project)=>{
     if(project.project_address.toLowerCase().includes(e.target.value.toLowerCase())){
       this.lat=project.latitude;
       this.lng=project.longitudes;
       this.zoom=12;
       this.locationSelected = project.city+', TS';
       this.location=  project.state+ "Real Estate";
     }
    });
    $('.locationButton').popup('hide');
  }
  
  ngOnInit() {
   
    this.projectsApiList=JSON.parse(localStorage.getItem('projectsList'));
    this.projectsApiList.map( (data) => {
      this.locationList.push(data.city);
    });
    if(localStorage.getItem('projectsDomain')){

      var loc=localStorage.getItem('projectsDomain');
      this.projects=this.projectsApiList.filter( (project) =>{
        return project.project_address.toLowerCase().includes(loc);
       });
       this.projectsApiList.map( (project)=>{
        if(project.project_address.toLowerCase().includes(loc)){
          this.lat=project.latitude;
          this.lng=project.longitudes;
          this.zoom=12;
          this.locationSelected = project.city+', TS';
          this.location=project.state+ "Real Estate";
        }
       });

       if(loc.includes('telangana') || loc.includes('hyderabad')){
        this.locationSelected = "Telangana";
        this.location="Telangana Real Estate";
        this.projects=this.projectsApiList;
        this.lat = this.mapsService.lat;
        this.zoom=8;
        this.lng = this.mapsService.lng;
      }
    } else {
      //In case did not routed from search location
      this.projects = this.projectsApiList;
      this.lat = this.mapsService.lat;
      this.lng = this.mapsService.lng;
      this.zoom = this.mapsService.zoom;
    }
    $(document).scrollTop(0);
    $('.ui.checkbox').checkbox();
  
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
