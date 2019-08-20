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
  hideSignUp=false;
  hideSignIn=true;
  userName="";
  errors=[];
  errors1=[];
  public openModal(){
    $('.ui.modal').modal('show');   
  }
  constructor(private loginService: LoginService, private routes: Router) { }
 
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
  browseLimited(){
    localStorage.setItem('logStatus','false');
    this.routes.navigate(['/projects']);
  }

  signIn(uname: string, p: string){
    console.log("Hello");
    this.errors=[];
    let output = this.loginService.checkusername(uname,p);
    if(output==true){
      $('.ui.modal').modal('hide');  
      this.routes.navigate(['/activity']);
      localStorage.setItem('logStatus','true');
    }
    else{
      if(uname.length==0){
        this.errors.push("Enter Username");
      }
      if(p.length==0){
        this.errors.push("Enter Password");
      }
      if(uname.length > 0 && p.length >0){
        this.errors.push("Wrong Credentials");
      }
    }
  }
  signUp(mobileNumber, otp, password){  
    let minAlphabet = new RegExp("^(?=.*[A-Z])");
    let minNumber = new RegExp("^(?=.*[0-9])");
    let minSpecChar = new RegExp("^(?=.[!@#\$%\^&])");
    let minCount = new RegExp("^(?=.{8,})	");
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
    localStorage.setItem('logStatus','createProfile');
    if(mobileNumber.length !== 10){
      this.errors1.push("Enter Valid Mobile Number");
    }
    if(otp.length==0){
      this.errors1.push("Enter OTP");
    }
    if(password.length==0){
      this.errors1.push("Enter Password");
    }
    if(mobileNumber.length == 10 && otp.length>0 && password.length>0){
      $('.ui.modal').modal('hide');  
      this.routes.navigate(['/createProfile']);
    }
    
  }
  ngOnInit() {
    $(document).scrollTop(0);
    if(localStorage.getItem('logStatus')=='true'){

    } else {
      localStorage.setItem('logStatus','false');
    };
    

  }

}
