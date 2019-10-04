import { Component, OnInit } from '@angular/core';
import { Marker } from '../../../models/marker';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { LocationsService } from '../../../services/locations.service';
import {Location} from '@angular/common';
import { MapsService } from '../../../services/maps.service';
import { Router} from '@angular/router';
import { ConfigService } from '../../../services/config.service';
import { HttpClient} from '@angular/common/http';
import { LoginComponent } from '../../login/login.component';
declare var $:any;
@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

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
   public markers =[];
   iconSearch = true;
   imagesList = [];
   projectsApiList;
   location="Telangana Real Estate";
   locationSelected = "Hyderabad, TS";
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
   projects = [];
   infoWindowOpened = null;
  previous_info_window = null;
  mapClicked(e){
    if (this.previous_info_window != null ) {
      this.previous_info_window.close()
      }  
  }
  markerClick(marker){
    this.projects=this.projectsApiList.filter( (project)=>{
      return this.favListProjectId.includes(project.id.toString())
    });
    // this.projects=this.projectsApiList.filter( (project) =>{
    //   return project.id==marker.id;
    //  });
    this.locationSelected = marker.city+', TS';
    this.location=  marker.state+ "Real Estate";
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
  viewProject(project){
    if(project.id==24){
      this.projectsApiList.map( (data) => {
        if(data.id==project.id){
          localStorage.setItem('projectSelected',JSON.stringify(data));
        }
      });
      let urlProjectDetails = `${this.config.url}customerlogin/getprojectsdetails`;
      this.http.post(urlProjectDetails,{"params":{"type":"neighbourhood","projectId":project.id}}).subscribe((data:any) => {
        if(data.success==true){
          localStorage.setItem('neighbourhoodData',JSON.stringify(data.result.results));
          this.http.post(urlProjectDetails,{"params":{"type":"properties","projectId":project.id}}).subscribe((data:any) => {
            if(data.success==true){
               localStorage.setItem('propertiesDetails',JSON.stringify(data.result.results));
               this.router.navigate(['/projectDetail']);
            }
          });
        }
      });
     
      
    
    } 
    
  }
  favListProjectId=[];
  ngOnInit() {
    this.lat = 17.0754526;
    this.lng = 78.2352672;
    this.zoom = 8;
    if(JSON.parse(localStorage.getItem('favList'))!=null){
      JSON.parse(localStorage.getItem('favList')).map( (project)=>{
        this.favListProjectId.push(project.project_id);
      });
      this.projectsApiList=JSON.parse(localStorage.getItem('projectsList'));
      this.projects=this.projectsApiList.filter( (project)=>{
        return this.favListProjectId.includes(project.id.toString())
      });
    }
    
    
   
    this.projects.map( (data) => {
      var obj={
        lat: data.latitude,
        lng: data.longitudes,
        plotNumbers: "320",
        minArea: data.min_sqyards,
        maxArea: data.max_sqyards,
        minPrice: data.min_sqyards* data.min_amount,
        icon: { url: 'assets/mapIconUpcoming.svg', scaledSize: { width: 40, height: 40 } },
        projectName: data.project_name,
        id:data.id,
        city: data.city,
        state: data.state,
        postalcode: data.zipcode
      };
      this.markers.push(obj);
    });


  }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();


    $('.ui.rating').rating();
  }

}
