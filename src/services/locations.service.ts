import { Injectable } from '@angular/core';
import { Marker } from '../models/marker';

@Injectable()
export class LocationsService {

  // @Todo: replace markers by an API
  markers: Marker[] = [
    {
      lat: 17.3850,
      lng: 78.4867,
      plotNumbers: "213",
      projectName: "Spectra Galaxy", 
      city: 'Hyderabad',
      state: 'Telangana',
      postalcode: '500032',
      projectLink: 'http://example.com',
    },
    {
      lat: 17.3850,
      lng: 78.0867,
      plotNumbers: "213",
      projectName: "Spectra Galaxy", 
      city: 'Hyderabad',
      state: 'Telangana',
      postalcode: '500032',
      projectLink: 'http://example.com',
    },
    {
      lat: 17.12,
      lng: 78.4867,
      plotNumbers: "213",
      projectName: "Diamond", 
      city: 'Hyderabad',
      state: 'Telangana',
      postalcode: '500032',
      projectLink: 'http://example.com',
    }
  ];

  constructor() { }

  getMarkers() {
    return this.markers;
  }

}