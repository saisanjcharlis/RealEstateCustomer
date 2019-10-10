import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BnNgIdleService } from 'bn-ng-idle';
import { ConfigService } from '../services/config.service';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private routes : Router, private bnIdle: BnNgIdleService, private route: ActivatedRoute, private config:ConfigService, private http:HttpClient){
    //   this.bnIdle.startWatching(1200).subscribe((res) => {
    //   if(res && localStorage.getItem('logStatus') !='logout') {
    //     alert('Session Timeout. Login Again')
    //     localStorage.clear();
    //     sessionStorage.clear();
    //     localStorage.setItem('logStatus','logout');
    //     this.routes.navigate(['/']);

    //   }
    // })
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(state.url == '/projects' || state.url.includes('/projectDetail')){
        return true;
      }


      let currentID= JSON.parse(localStorage.getItem('loginData')).userinfo.user_id;
      let token = JSON.parse(localStorage.getItem('loginData')).token;
      let url = `${this.config.url}services/v1/frontendcustomer/getprofileinformation`;
      let reqObj = {
        "token": token,
        "user_id": currentID
      }
      this.http.post(url,reqObj).subscribe((data:any) => {
        if(data.success==false  && data.error=="can't read token"){
          alert('Session Timeout. Login Again')
          localStorage.clear();
          sessionStorage.clear();
          localStorage.setItem('logStatus','logout');
          this.routes.navigate(['/']);
        }
      });


      // if(localStorage.getItem('customerName')==null){
      //   alert('Session Timeout. Login Again')
      //   localStorage.clear();
      //   sessionStorage.clear();
      //   localStorage.setItem('logStatus','logout');
      //   this.routes.navigate(['/']);
      // }
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