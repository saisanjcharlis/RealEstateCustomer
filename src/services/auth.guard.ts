import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BnNgIdleService } from 'bn-ng-idle';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private routes : Router, private bnIdle: BnNgIdleService, private route: ActivatedRoute,){
      this.bnIdle.startWatching(600).subscribe((res) => {
      if(res && sessionStorage.getItem('logStatus') !='logout') {
        alert('Session Timeout. Login Again')
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
      if(state.url == '/projects' || state.url.includes('/projectDetail')){
        return true;
      }
      if(localStorage.getItem('customerName')==null){
        alert('Session Timeout. Login Again')
        localStorage.clear();
        sessionStorage.clear();
        sessionStorage.setItem('logStatus','logout');
        this.routes.navigate(['/']);
      }
      // let routeActivate = this.route.snapshot.routeConfig.path;
      // if(routeActivate == "projects" && sessionStorage.getItem('logStatus')=='false'){
      //   this.routes.navigate(['/login']);
      //   return false;
      // }
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