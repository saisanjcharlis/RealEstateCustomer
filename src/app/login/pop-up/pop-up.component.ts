import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { Router } from '@angular/router';
import { ConfigService } from '../../../services/config.service';
import { HttpClient} from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate(500)
      ])
    ])
  ]
})
export class PopUpComponent implements OnInit {
  hideSignUp=false;
  hideSignIn=true;
  userName="";
  errors=[];
  errors1=[];
  constructor(private routes: Router, private http: HttpClient, private config: ConfigService) { }
  haveAccount(){
    this.errors1=[];
    this.hideSignUp = false;
    this.hideSignIn = true;
 }
 createAccount(){
  this.errors=[];
  this.hideSignUp = true;
  this.hideSignIn = false;
}
forgotPassword(){
  $('.ui.modal').modal('hide');  
  this.routes.navigate(['/forgotPassword']);
}
signIn(uname: string, p: string){
  
  this.errors=[];
  if(uname.length>0 && p.length>0){
   let url = `${this.config.url}customerlogin/cutomerauth`;
    this.http.post(url,{username:uname,password:p}).subscribe((data:any) => {
      if(data.success==true){
        $('.ui.modal').modal('hide');  
        localStorage.setItem('loginData',JSON.stringify(data.results));
        localStorage.setItem('logStatus','true');
        localStorage.setItem('newUser','false');
        this.routes.navigate(['/']);
        this.routes.routeReuseStrategy.shouldReuseRoute = function(){return false;};
        let currentUrl = this.routes.url + '?';
        this.routes.navigateByUrl(currentUrl)
          .then(() => {
            this.routes.navigated = false;
            this.routes.navigate([this.routes.url]);
          });
      } else {
        this.errors.push("User Not Found");
      };
    });
  } else{
    if(uname.length==0){
      this.errors.push("Enter Username");
    }
    if(p.length==0){
      this.errors.push("Enter Password");
    }
  }
}

signUp(mobileNumber, otp, password){  
  let minAlphabet = new RegExp("^(?=.*[A-Z])");
  let minNumber = new RegExp("^(?=.*[0-9])");
  let minSpecChar = new RegExp("(?=.[!@#\$%\^&])");
  let minCount = new RegExp("(?=.{8,})");
  this.errors1=[];
  if(!minAlphabet.test(password)){
    this.errors1.push("Password must contain at least 1 uppercase alphabetical character");
  }
  if(!minNumber.test(password)){
    this.errors1.push("Password must contain at least 1 numeric character");
  }
  if(!minSpecChar.test(password)){
    this.errors1.push("Password must contain at least one special character");
  }
  if(!minCount.test(password)){
    this.errors1.push("Password must be eight characters or longer");
  }
  
  if(mobileNumber.length !== 10){
    this.errors1.push("Enter Valid Mobile Number");
  }
  if(otp.length==0){
    this.errors1.push("Enter OTP");
  }
  if(password.length==0){
    this.errors1.push("Enter Password");
  }
  if(mobileNumber.length == 10 && otp.length>0 && password.length >0 && minSpecChar.test(password) && minAlphabet.test(password) && minNumber.test(password) && minCount.test(password)){
    $('.ui.modal').modal('hide');  
    localStorage.setItem('logStatus','true');
    this.routes.navigate(['/']);
    this.routes.routeReuseStrategy.shouldReuseRoute = function(){return false;};
    let currentUrl = this.routes.url + '?';
    this.routes.navigateByUrl(currentUrl)
      .then(() => {
        this.routes.navigated = false;
        this.routes.navigate([this.routes.url]);
      });
  }
  
}
  ngOnInit() {
    if(localStorage.getItem('logStatus')=='true'){

    } 
    else {
      localStorage.setItem('logStatus','false');
    };
  }
  ngOnDestroy(){
    $('.ui.modal').modal('hide');  
    $('body .modal').remove();
  }

}
