import { Component, OnInit } from '@angular/core';
import { Marker } from '../../../models/marker';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { LocationsService } from '../../../services/locations.service';
import {Location} from '@angular/common';
import { MapsService } from '../../../services/maps.service';
import { Router} from '@angular/router';
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
     }
   ];
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
   projects = this.hyderabadProjects;
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
  ngOnInit() {
    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
    this.zoom = 15;
    console.log(this.lat,this.lng,this.zoom)
  }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();


    $('.ui.rating').rating();
  }

}
