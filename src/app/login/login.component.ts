import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { LoginService } from '../../services/login-service.service';
import { ThrowStmt } from '@angular/compiler';
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
  constructor(private loginService: LoginService) { }
  haveAccount(){
     this.hideSignUp = false;
     this.hideSignIn = true;
  }
  dontHaveAccount(){
    this.hideSignUp = true;
    this.hideSignIn = false;
  }
  browseLimited(){
    this.loginService.loginStatus = 'ViewOnlyProjects';
    // this.loginService.loginNew = 'false';
  }
  signIn(){
    this.loginService.loginStatus = 'loggedInProfile';
    // this.loginService.loginNew = 'true';
    // this.loginService.loginStatusSignUp = true;
  }
  signUp(){
    this.loginService.loginStatus = 'loggedInProfile';
    // this.loginService.loginNew = 'false';
    // this.loginService.loginStatusSignUp = false;
  }
  ngOnInit() {
  }

}
