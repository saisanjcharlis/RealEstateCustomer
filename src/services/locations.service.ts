import { Injectable } from '@angular/core';
import { Marker } from '../models/marker';

@Injectable()
export class LocationsService {

  // @Todo: replace markers by an API
  markers: Marker[] = [
    {
      lat: 17.5848205,
      lng: 78.9354305,
      plotNumbers: "213",
      icon: { url: 'assets/mapIconSale.svg', scaledSize: { width: 40, height: 40 } },
      projectName: "Spectra Galaxy", 
      city: 'Yadagirigutta',
      state: 'Telangana',
      postalcode: '508115',
      projectLink: 'http://example.com',
    },
    {
      lat: 17.070352,
      lng: 78.1998229,
      plotNumbers: "213",
      icon: { url: 'assets/mapIconUpcoming.svg', scaledSize: { width: 40, height: 40 } },
      projectName: "Spectra Viceroyce Residency", 
      city: 'Shadnagar',
      state: 'Telangana',
      postalcode: '509216',
      projectLink: 'http://example.com',
    }
  ];

  constructor() { }

  getMarkers() {
    return this.markers;
  }

}