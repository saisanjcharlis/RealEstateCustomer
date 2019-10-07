import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BnNgIdleService } from 'bn-ng-idle';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private routes : Router, private bnIdle: BnNgIdleService, private route: ActivatedRoute,){
      this.bnIdle.startWatching(1200).subscribe((res) => {
      if(res && localStorage.getItem('logStatus') !='logout') {
        alert('Session Timeout. Login Again')
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem('logStatus','logout');
        this.routes.navigate(['/']);

      }
    })
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(state.url == '/projects' || state.url.includes('/projectDetail')){
        return true;
      }
      if(localStorage.getItem('customerName')==null){
        alert('Session Timeout. Login Again')
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem('logStatus','logout');
        this.routes.navigate(['/']);
      }
      if(localStorage.getItem('logStatus')=='true'){
        return true;
      } 
      else
      {
        this.routes.navigate(['/login']);
        return false;
      }
  }
}