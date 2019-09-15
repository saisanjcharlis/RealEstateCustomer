import { Injectable } from '@angular/core';
import { Marker } from '../models/marker';

@Injectable()
export class LocationsService {
  markers = [];
  projectsApiList;
  constructor() {
    this.projectsApiList=JSON.parse(localStorage.getItem('projectsList'));
    this.projectsApiList.map( (data) => {
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

  getMarkers() {
    return this.markers;
  }

}