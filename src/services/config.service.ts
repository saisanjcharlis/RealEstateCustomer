import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public url: string = 'http://172.16.26.85:3220/';
  constructor() { }
}
