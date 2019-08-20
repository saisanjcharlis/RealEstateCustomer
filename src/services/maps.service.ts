import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MapsService {

  public lat: number = 17.3850;
  public lng: number = 78.4867;
  public zoom: number = 12;
  public newCoordinators = new Subject();

  public openWindow = new Subject();

  constructor() { }

}