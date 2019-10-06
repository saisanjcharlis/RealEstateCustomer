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
    // if(project.id==24){
      this.projectsApiList.map( (data) => {
        if(data.id==project.id){
          localStorage.setItem('projectSelected',JSON.stringify(data));
        }
      });
      let urlProjectDetails = `${this.config.url}customerlogin/getprojectsdetails`;
      this.http.post(urlProjectDetails,{"params":{"type":"neighbourhood","projectId":project.id}}).subscribe((data:any) => {
        if(data.success==true){
          console.log(data.result.results)
          localStorage.setItem('neighbourhoodData',JSON.stringify(data.result.results));
          this.http.post(urlProjectDetails,{"params":{"type":"properties","projectId":project.id}}).subscribe((data:any) => {
            if(data.success==true){
               localStorage.setItem('propertiesDetails',JSON.stringify(data.result.results));
               this.router.navigate(['/projectDetail',project.id]);
            }
          });
        }
      });
     
      
    
    // } 
    
  }
   updateResults(val){
     this.locationList=this.locList;
    this.locationList=this.locationList.filter( (value)=>{
     return  value.toLowerCase().trim().includes(val.toLowerCase().trim());
    });
  }
  
  homeTypeFilter(e){
    let propLabel=$(e.target).parent().text().trim().toLowerCase();
    console.log(propLabel)
    if(e.target.checked == false && propLabel == "plots"){
     
        this.projects=[];
    }
    else{
      this.projects=this.projectsApiList;

    }
    
  }
  toggleMap=true;
  toggleMapView(){
   
    if(this.toggleMap){
      $('.mapContainer').toggleClass('mapContainerMobile');
      $('.projectContainer').css('display','none');
      $('.mapButton').css('background','#0066ff');
      $('.mapButton').css('color','white');
    } else {
      $('.mapContainer').toggleClass('mapContainerMobile');
      $('.projectContainer').css('display','block');
      $('.mapButton').css('background','transparent');
      $('.mapButton').css('color','#0066ff');
    }
    this.toggleMap=!this.toggleMap;
   
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
    
   
    localStorage.setItem('projectsDomain','telangana');
    this.projects=this.projectsApiList;
    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
    this.zoom = this.mapsService.zoom;
  }
  buyLink(){
    if(localStorage.getItem('logStatus')=='true'){
    } else {
      $('.ui.modal.modalSign').modal('show');  
    };
  }
  save(e,project){
  
    if(localStorage.getItem('logStatus')=='true'){
      var loginData = JSON.parse(localStorage.getItem('loginData'));
      let urlFav = `${this.config.url}services/v1/frontendcustomer/getcustomerfavourites`;
          if($(e.target).hasClass('outline')){
            let url = `${this.config.url}services/v1/frontendcustomer/createcustomerfavourites`;
            this.http.post(url,{"token":loginData.token,"params":{"customer_user_id": loginData.userinfo.user_id,"project_id":project.id,"is_active":true}}).subscribe((data:any) => {
              this.http.post(urlFav,{"token":loginData.token,"params":{"customer_user_id":loginData.userinfo.user_id}}).subscribe( (data:any) => {
                if(data.success==true){
                  let favs = data.result.results.filter( (fav) => {
                    return fav.status == 1;
                  });
                  localStorage.setItem('favList',JSON.stringify(favs));
                  if(favs.length == 0){
                    localStorage.setItem('favList',null);
                  }
                } 
              });
            });
          } else {
            let url = `${this.config.url}services/v1/frontendcustomer/createcustomerfavourites`;
            this.http.post(url,{"token":loginData.token,"params":{"customer_user_id": loginData.userinfo.user_id,"project_id":project.id,"is_active":false}}).subscribe((data:any) => {
              this.http.post(urlFav,{"token":loginData.token,"params":{"customer_user_id":loginData.userinfo.user_id}}).subscribe( (data:any) => {
                if(data.success==true){
                  let favs = data.result.results.filter( (fav) => {
                    return fav.status == 1;
                  });
                  localStorage.setItem('favList',JSON.stringify(favs));
                  if(favs.length == 0){
                    localStorage.setItem('favList',null);
                  }
                } 
              });
            });
          }
          $(e.target).transition('pulse');
          $(e.target).toggleClass('outline');
    } else {
      this.buyLink();
    }

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
    if($(window).width()<1000){
      this.toggleMapView();
    }
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
    let minNumber = $(e.target).text().substring(0, $(e.target).text().length - 1).split(',').join('');
    let maxNumber  = this.maxPriceFilterValue;
    this.minPriceFilterValue = minNumber;
    if(this.maxPriceFilterValue=="Any Price" || this.maxPriceFilterValue==""){
      this.projects = this.projects.filter( (project) =>{
        return project.min_sqyards*project.min_amount>= minNumber;
      });
    } else {
      let maxPriceNumber = parseInt(maxNumber, 10);
      this.projects = this.projects.filter( (project) =>{
        return project.min_sqyards*project.min_amount>= minNumber && project.min_sqyards*project.min_amount <= maxPriceNumber;
      });
    }
    
  }
  minPriceChange(e){
    this.projects = this.projectsApiList;
    let maxNumber  = this.maxPriceFilterValue;
    // console.log(e.substring(0, $(e.target).text().length - 1));
    // this.minPriceFilterValue = e.text().substring(0, $(e.target).text().length - 1);
    if(this.maxPriceFilterValue=="Any Price" || this.maxPriceFilterValue==""){
      this.projects = this.projects.filter( (project) =>{
        return project.min_sqyards*project.min_amount>= e;
      });
    } else {
      let maxPriceNumber = parseInt(maxNumber, 10);
      this.projects = this.projects.filter( (project) =>{
        return project.min_sqyards*project.min_amount>= e && project.min_sqyards*project.min_amount <= maxPriceNumber;
      });
    }
  }
  maxPriceFilter(e){
    this.projects = this.projectsApiList;
    let maxNumber = $(e.target).text().substring(0, $(e.target).text().length).split(',').join('');
    let minNumber  = this.minPriceFilterValue.substring(0, this.minPriceFilterValue.length).split(',').join('');
    this.maxPriceFilterValue = maxNumber;
    if(this.maxPriceFilterValue=="Any Price" || this.maxPriceFilterValue==""){
      this.projects = this.projects.filter( (project) =>{
        return project.min_sqyards*project.min_amount>= parseInt(minNumber, 10);
      });
    } else {
      let maxPriceNumber = parseInt(maxNumber, 10);
      let minPriceNumber = parseInt(minNumber, 10);
      this.projects = this.projects.filter( (project) =>{
        return project.min_sqyards*project.min_amount>= minPriceNumber && project.min_sqyards*project.min_amount <= maxPriceNumber;
      });
    }

  }
  maxPriceChange(e){
    this.projects = this.projectsApiList;
    let minNumber  = this.minPriceFilterValue;
    if(e==""){
      this.projects = this.projects.filter( (project) =>{
        return project.min_sqyards*project.min_amount>= parseInt(minNumber, 10);
      });
    } else {
      let minPriceNumber = parseInt(minNumber, 10);
      this.projects = this.projects.filter( (project) =>{
        return project.min_sqyards*project.min_amount>= minPriceNumber && project.min_sqyards*project.min_amount <= e;
      });
    }

  }
  sortParam;
  sortProject(e){
    if(e =="priceHigh"){
      this.projects.sort( (b,a)=>{
        return a.min_amount*a.min_sqyards-b.min_amount*b.min_sqyards;
      });
    }
    if(e=="priceLow"){
      this.projects.sort( (b,a)=>{
        return b.min_amount*b.min_sqyards-a.min_amount*a.min_sqyards;
      });
    }
    if(e=="newest"){
      this.projects.sort( (b,a)=>{
        return b.created_at.getTime()-a.created_at.getTime();
      });
    }
    if(e=="squareMax"){
      this.projects.sort( (a,b)=>{
        return b.max_sqyards-a.max_sqyards;
      });
    }
    if(e=="squareMin"){
      this.projects.sort( (a,b)=>{
        return b.min_sqyards-a.min_sqyards;
      });
    }
  }
  statusTypeFilter(e){
    let propLabel=$(e.target).parent().text().trim().toLowerCase();
    if(e.target.checked == false && propLabel == "for sale"){
      // this.projects = this.projects.filter( (project)=>{
        //   console.log(project)
        //   return project.saleStatus.toLowerCase().indexOf(propLabel) === -1;
        // });
        this.projects=[];
    }
    else{
      this.projects=this.projectsApiList;

    }
    

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
       this.lat=+project.latitude;
       this.lng=+project.longitudes;
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
       this.lat=+project.latitude;
       this.lng=+project.longitudes;
       this.zoom=12;
       this.locationSelected = project.city+', TS';
       this.location=  project.state+ "Real Estate";
     }
    });
    if(!isNaN(+e.target.value)){
      this.projects=this.projectsApiList.filter( (project) =>{
        return project.zipcode ==e.target.value;
      });
    }
    
    this.projectsApiList.map( (project)=>{
      if(project.zipcode == e.target.value){
        this.locationSelected = project.city+', TS';
        this.location=project.state+ "Real Estate";
        this.zoom=12;
        this.lat= +project.latitude;
        this.lng= +project.longitudes;
      }
    });
    $('.locationButton').popup('hide');
  }
  locList=[];
  ngOnInit() {
    
    this.projectsApiList=JSON.parse(localStorage.getItem('projectsList'));
    this.projectsApiList.map( (data) => {
      this.locList.push(data.city);
      data.created_at = new Date(Date.parse(data.created_at));
      data.favStatus=false;
      if(localStorage.getItem('logStatus')=='true'){
        let favList = JSON.parse(localStorage.getItem('favList'));
        if(favList!=null){
          favList.map((fav)=>{
            if(fav.status==1 && fav.project_id==data.id){
              data.favStatus=true;
            }
          });
        }
      }
    });
    if(localStorage.getItem('projectsDomain')){
      this.lat = 17.0754526;
      this.lng = 78.2352672;
      this.zoom=8;
      var loc=localStorage.getItem('projectsDomain');
      this.projects=this.projectsApiList.filter( (project) =>{
        return project.project_address.toLowerCase().includes(loc);
       });
       this.projectsApiList.map( (project)=>{
        if(project.project_address.toLowerCase().includes(loc)){
          this.lat= +project.latitude;
          this.lng= +project.longitudes;
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
      if(!isNaN(+loc)){
        this.projects=this.projectsApiList.filter( (project) =>{
          return project.zipcode ==loc;
        });
      }
      
      this.projectsApiList.map( (project)=>{
        if(project.zipcode == loc){
          this.locationSelected = project.city+', TS';
          this.location=project.state+ "Real Estate";
          this.zoom=12;
          this.lat= +project.latitude;
          this.lng= +project.longitudes;
        }
      });
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
