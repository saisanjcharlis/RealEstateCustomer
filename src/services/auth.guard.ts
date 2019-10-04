import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BnNgIdleService } from 'bn-ng-idle';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private routes : Router, private bnIdle: BnNgIdleService){
    this.bnIdle.startWatching(1800).subscribe((res) => {
      if(res && sessionStorage.getItem('logStatus') !='logout') {
        alert("Session Over..Logging Out");
        localStorage.clear();
        sessionStorage.clear();
        sessionStorage.setItem('logStatus','logout');
        this.routes.navigate(['/']);

      }
    })
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      // return true;
      if(sessionStorage.getItem('logStatus')=='true'){
        return true;
      }
      else
      {
        this.routes.navigate(['/login']);
        return false;
      }
  }
}