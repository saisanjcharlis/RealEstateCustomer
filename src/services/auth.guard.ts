import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private routes : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      return true;
      // if(localStorage.getItem('loginData')!= null){
      //   return true;
      // }
      // else
      // {
      //   this.routes.navigate(['/login']);
      //   return false;
      // }
  }
}