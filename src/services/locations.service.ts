import { Injectable } from '@angular/core';
import { Marker } from '../models/marker';

@Injectable()
export class LocationsService {
  // localStorage.getItem('projectsDomain');
  // @Todo: replace markers by an API
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
        city: data.city,
        state: data.state,
        postalcode: data.zipcode,
        projectLink: 'http://example.com',
      };
      this.markers.push(obj);
    });
   }

  getMarkers() {
    return this.markers;
  }

}