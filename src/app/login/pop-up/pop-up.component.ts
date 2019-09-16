import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { Router } from '@angular/router';
import { ConfigService } from '../../../services/config.service';
import { HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
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
nextInput(e){
  // $('#otp').focus();
}
signIn(uname: string, p: string){
  localStorage.setItem('logStatus','true');
  localStorage.setItem('newUser','false');
  this.routes.navigate(['/']);
  // this.errors=[];
  // if(uname.length>0 && p.length>0){
  //  let url = `${this.config.url}customerlogin/cutomerauth`;
  //   this.http.post(url,{username:uname,password:p}).subscribe((data:any) => {
  //     if(data.success==true){
  //       $('.ui.modal').modal('hide');  
  //       localStorage.setItem('loginData',JSON.stringify(data.results));
  //       localStorage.setItem('logStatus','true');
  //       localStorage.setItem('newUser','false');

  //       let urlPassbook = `${this.config.url}services/v1/frontendcustomer/getpassbooklist`;
       
  //       var loginData = JSON.parse(localStorage.getItem('loginData'));
       

  //       let urlProfile = `${this.config.url}services/v1/frontendcustomer/getprofileinformation`;
  //       let reqObj = {
  //         "token": loginData.token,
  //         "user_id": loginData.userinfo.user_id
  //       }
  //       console.log(loginData.token)
  //       this.http.post(urlProfile,reqObj).subscribe((data:any) => {
  //         if(data.result.results.length>0){
  //           localStorage.setItem('customerName',JSON.stringify(data.result.results[0].customer_name));
  //         } else {
  //           localStorage.setItem('customerName',JSON.stringify(loginData.userinfo.userName));
  //         }
         
  //       });

  //       if(sessionStorage.getItem('signedUp')=='true'){
  //         this.routes.navigate(['/']);
  //         this.routes.routeReuseStrategy.shouldReuseRoute = function(){return false;};
  //         let currentUrl = this.routes.url + '?';
  //         this.routes.navigateByUrl(currentUrl)
  //         .then(() => {
  //           this.routes.navigated = false;
  //           this.routes.navigate([this.routes.url]);
  //         });
  //       } else {
  //         this.http.post(urlPassbook,{"token":loginData.token,"params":{"customer_user_id":loginData.userinfo.user_id}}).subscribe((data:any) => {
  //           if(data.success==true){
  //             localStorage.setItem('passbookList',JSON.stringify(data.result));
  //             this.routes.navigate(['/activity']);
  //           }
  //         });
         
  //       }
       
        
  //     } else {
  //       this.errors.push("User Not Found");
  //     };
  //   });
  // } else{
  //   if(uname.length==0){
  //     this.errors.push("Enter Username");
  //   }
  //   if(p.length==0){
  //     this.errors.push("Enter Password");
  //   }
  // }

}
otpIcon;
mobilePassed=false;
otpPassed = false;
passwordPassed1 = false;
passwordPassed2 = false;
passwordPassed3 = false;
passwordPassed4 = false;
signUp(mobileNumber, otp, password){  
  var phoneno = /^\d{10}$/;
  this.errors1=[];
  
 
  let minAlphabet = new RegExp("^(?=.*[A-Z])");
  let minNumber = new RegExp("^(?=.*[0-9])");
  let minSpecChar = new RegExp("(?=.[!@#\$%\^&])");
  let minCount = new RegExp("(?=.{8,})");
  if(!mobileNumber.match(phoneno)){
    this.errors1.push("Enter Valid Mobile Number");
    $('#otp').attr('disabled', true);
    $('#password').attr('disabled', true);
  } else {
        if(this.mobilePassed==false){
          let url = `${this.config.url}customerlogin/mobileotp`;
          let mobileObject =  {"params":{"mobile_number":mobileNumber}};
          this.http.post(url,mobileObject).subscribe((data:any) => {
            if(data.success==true){
              this.mobilePassed=true;
              $('#otp').attr('disabled', false);
              $('#password').attr('disabled', false);
            } else {
              this.errors1.push("Mobile Number Already Exists");
            }
            console.log(data.result.mobile_otp);
          });
        } 
       
  }
 
  if(otp.length>0 && otp.length !== 6 && mobileNumber.length == 10){
      this.errors1.push("Enter six digit valid OTP");
  } else if(otp.length == 6){  
    this.otpPassed=true; 
    sessionStorage.setItem('otpIcon','false');
  } else {}
  this.otpIcon=sessionStorage.getItem('otpIcon');
  if(password.length>0){
    if(!minCount.test(password)){
      this.errors1.push("Password must be eight characters or longer");
    } else { this.passwordPassed1=true; }
    if(!minSpecChar.test(password)){
      this.errors1.push("Password must contain at least one special character");
    } else { this.passwordPassed2=true; }
    if(!minNumber.test(password)){
      this.errors1.push("Password must contain at least 1 numeric character");
    } else { this.passwordPassed3=true; }
    if(!minAlphabet.test(password)){
      this.errors1.push("Password must contain at least 1 uppercase alphabetical character");
    } else { this.passwordPassed4=true; }
    if(this.mobilePassed && this.otpPassed && this.passwordPassed1 && this.passwordPassed2 && this.passwordPassed3 && this.passwordPassed4){
        let urlVerify = `${this.config.url}customerlogin/verifyotp`;
        let signUpObject =  {"params":{"mobile_number":mobileNumber,"mobile_otp":otp,"url":"spectra","password":password}};
        this.http.post(urlVerify,signUpObject).subscribe((data:any) => {
          if(data.success==true){
            sessionStorage.setItem('signedUp','true');
            this.signIn(mobileNumber,password);
          } else {
            this.errors1.push("OTP Incorrect");
          }
        });
    }

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
