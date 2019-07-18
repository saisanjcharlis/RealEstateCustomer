import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  checkusername(uname: string, pwd: string){
    if(uname == "admin" && pwd == "admin123"){
      localStorage.setItem('username',uname);
      return true;
    } else {
      return false;
    }
  }


}
