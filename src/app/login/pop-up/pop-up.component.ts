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
  this.errors=[];
  if(uname.length>0 && p.length>0){
   let url = `${this.config.url}customerlogin/cutomerauth`;
    this.http.post(url,{username:uname,password:p}).subscribe((data:any) => {
      if(data.success==true){
        $('.ui.modal').modal('hide');  
        localStorage.setItem('loginData',JSON.stringify(data.results));
        sessionStorage.setItem('logStatus','true');
        localStorage.setItem('newUser','false');

        let urlPassbook = `${this.config.url}services/v1/frontendcustomer/getpassbooklist`;
       
        var loginData = JSON.parse(localStorage.getItem('loginData'));
       

        let urlProfile = `${this.config.url}services/v1/frontendcustomer/getprofileinformation`;
        let reqObj = {
          "token": loginData.token,
          "user_id": loginData.userinfo.user_id
        }
        // console.log(loginData.token)
       
       
        if(sessionStorage.getItem('signedUp')=='true'){
          this.http.post(urlProfile,reqObj).subscribe((data:any) => {
            if(data.result.results.length>0){
              
              localStorage.setItem('customerName',JSON.stringify(loginData.userinfo.userName));
              localStorage.setItem('profileStatus','incomplete');
              this.routes.navigate(['/']);
              this.routes.routeReuseStrategy.shouldReuseRoute = function(){return false;};
              let currentUrl = this.routes.url + '?';
              this.routes.navigateByUrl(currentUrl)
              .then(() => {
                this.routes.navigated = false;
                this.routes.navigate([this.routes.url]);
              });
            }
          });
         
        } else {
         
          this.http.post(urlPassbook,{"token":loginData.token,"params":{"customer_user_id":loginData.userinfo.user_id}}).subscribe((data:any) => {
           
            if(data.success==true){
              localStorage.setItem('passbookList',JSON.stringify(data.result));
              this.http.post(urlProfile,reqObj).subscribe((data:any) => {
                if(data.result.results.length>0){
                  let dataVerify = {
                    "aadhaar":data.result.results[0].customer_aadharno,
                    "dob": data.result.results[0].customer_dob,
                    "email": data.result.results[0].customer_email,
                    "name": data.result.results[0].customer_name,
                    "pan": data.result.results[0].customer_pan
                  };
                  if(dataVerify.aadhaar == "" || dataVerify.dob =="" || dataVerify.email=="" || dataVerify.name=="" || dataVerify.pan ==""){
                    localStorage.setItem('profileStatus','incomplete');
                  } else {
                    localStorage.setItem('profileStatus','completed');
                  }
                  if(data.result.results[0].customer_name == ""){
                    localStorage.setItem('customerName',JSON.stringify(loginData.userinfo.userName));
                  } else {
                    localStorage.setItem('customerName',JSON.stringify(data.result.results[0].customer_name));
                  } 
                  if(JSON.parse(localStorage.getItem('passbookList')).length ==0){
                    localStorage.setItem('passbookList',null);
                  };
                  this.routes.navigate(['/activity']);
                }
              });
             
            } else {
              localStorage.setItem('passbookList',null);
              this.http.post(urlProfile,reqObj).subscribe((data:any) => {
                if(data.result.results.length>0){
                  let dataVerify = {
                    "aadhaar":data.result.results[0].customer_aadharno,
                    "dob": data.result.results[0].customer_dob,
                    "email": data.result.results[0].customer_email,
                    "name": data.result.results[0].customer_name,
                    "pan": data.result.results[0].customer_pan
                  };
                  if(dataVerify.aadhaar == "" || dataVerify.dob =="" || dataVerify.email=="" || dataVerify.name=="" || dataVerify.pan ==""){
                    localStorage.setItem('profileStatus','incomplete');
                  } else {
                    localStorage.setItem('profileStatus','completed');
                  }
                  if(data.result.results[0].customer_name == ""){
                    localStorage.setItem('customerName',JSON.stringify(loginData.userinfo.userName));
                  } else {
                    localStorage.setItem('customerName',JSON.stringify(data.result.results[0].customer_name));
                  } 
                  this.routes.navigate(['/activity']);
                }
              });
            }
          });
            let urlFav = `${this.config.url}services/v1/frontendcustomer/getcustomerfavourites`;
            this.http.post(urlFav,{"token":loginData.token,"params":{"customer_user_id":loginData.userinfo.user_id}}).subscribe( (data:any) => {
              if(data.success==true){
                let favs = data.result.results.filter( (fav) => {
                  return fav.status == 1;
                });
                localStorage.setItem('favList',JSON.stringify(favs));
                if(favs.length == 0){
                  localStorage.setItem('favList',null);
                }
              } else {
                localStorage.setItem('favList',null);
              }
             
            });
         
        }
       
        
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
otpIcon;
namePassed=false;
mobilePassed=false;
otpPassed = false;
passwordPassed1 = false;
passwordPassed2 = false;
passwordPassed3 = false;
passwordPassed4 = false;
otpGenerate(e,mobileNumber){
      let url = `${this.config.url}customerlogin/mobileotp`;
      let mobileObject =  {"params":{"mobile_number":mobileNumber}};
      this.http.post(url,mobileObject).subscribe((data:any) => {
        if(data.success==true){
          this.mobilePassed=true;
        } else {
          this.errors1.push("Mobile Number Already Exists");
        }
        console.log(data.result.mobile_otp);
      });
  
   
}
signUp(e,name,mobileNumber, otp, password){  
  var phoneno = /^\d{10}$/;
  var validName= new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
  this.errors1=[];
  let minAlphabet = new RegExp("^(?=.*[A-Z])");
  let minNumber = new RegExp("^(?=.*[0-9])");
  let minSpecChar = new RegExp("(?=.[!@#\$%\^&])");
  let minCount = new RegExp("(?=.{8,})");
  if(!validName.test(name)){
    this.errors1.push('Enter Valid Name');
  } else {
    this.namePassed=true;
  }
  if(!mobileNumber.match(phoneno) && this.namePassed){
    this.errors1.push("Enter Valid Mobile Number");
  } 
  if(otp.length>0 && otp.length !== 6 && mobileNumber.length == 10){
      this.errors1.push("Enter six digit valid OTP");
  } 
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
    if(this.mobilePassed && this.passwordPassed1 && this.passwordPassed2 && this.passwordPassed3 && this.passwordPassed4){
        let urlVerify = `${this.config.url}customerlogin/verifyotp`;
        let signUpObject =  {"params":{"mobile_number":mobileNumber,"mobile_otp":otp,"url":"spectra","password":password}};
        this.http.post(urlVerify,signUpObject).subscribe((data:any) => {
          console.log(data)
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
  clearInput(){
    $('input').removeAttr('value');
  }
  ngOnInit() {
    // if(sessionStorage.getItem('logStatus')=='true'){

    // } 
    // else {
    //   sessionStorage.setItem('logStatus','logout');
    // };
  }
  ngOnDestroy(){
    $('.ui.modal').modal('hide');  
    $('body .modal').remove();
   
  }

}
