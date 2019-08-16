import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { LoginService } from '../../services/login-service.service';
import { RouterModule , Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate(500)
      ])
    ])
  ],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  hideSignUp=true;
  hideSignIn=false;
  constructor(private loginService: LoginService, private routes: Router) { }
  haveAccount(){
     this.hideSignUp = false;
     this.hideSignIn = true;
  }
  createAccount(){
    this.hideSignUp = true;
    this.hideSignIn = false;
  }
  browseLimited(){
    localStorage.setItem('logStatus','false');
    this.routes.navigate(['/projects']);
  }
  signIn(uname: string, p: string){
    let output = this.loginService.checkusername(uname,p);
    if(output==true){
      this.routes.navigate(['/activity']);
      localStorage.setItem('logStatus','true');
    }
    else{
      alert("Wrong Credentials");
    }
  }
  signUp(){   
    localStorage.setItem('logStatus','createProfile');
    this.routes.navigate(['/createProfile']);
  }
  ngOnInit() {
    $(document).scrollTop(0);

  }

}
