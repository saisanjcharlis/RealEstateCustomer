import { Component, OnInit, HostListener } from '@angular/core';
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
  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(event.target.innerWidth>768)
     {
       $('.dropDownSearch').removeClass('large');
       $('.dropDownSearch').addClass('huge');
     }
     else{
      $('.dropDownSearch').removeClass('huge');
      $('.dropDownSearch').addClass('large');
     }
  }
  hideSignUp=false;
  hideSignIn=true;
  userName="";
  errors=[];
  errors1=[];
  public openModal(){
   console.log("hello");
    $('.ui.modal.modalSign').modal('show');   
  }
  constructor(private loginService: LoginService, private routes: Router) { }
 
  haveAccount(){
     this.errors1=[];
     this.hideSignUp = false;
     this.hideSignIn = true;
  }
  forgotPassword(){
    $('.ui.modal').modal('hide');  
    this.routes.navigate(['/forgotPassword']);
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
  hoverCard(e){
    $(e.target.querySelector('button')).removeClass('basic');
    $(e.target.querySelector('button')).addClass('blue');
    $(e.target).addClass("animate"); 
  }
  hoverCardRemove(e){
    $(e.target.querySelector('button')).removeClass('blue');
    $(e.target.querySelector('button')).addClass('basic');
    $(e.target).removeClass("animate"); 
  }
  signIn(uname: string, p: string){
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
  agentModal(){
    $('.ui.modal.agentModal').modal('show');   
  }
  allotAgent(){
    $('body').toast({
      class: 'success',
      message: `Check mail for Information.`
    });
    $('.toast-box').css("margin-top","50px");
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
      localStorage.setItem('logStatus','createProfile');
      this.routes.navigate(['/createProfile']);
    }
    
  }
  ngOnInit() {
    if(window.innerWidth>768)
    {
      $('.dropDownSearch').removeClass('large');
      $('.dropDownSearch').addClass('huge');
    }
    else{
     $('.dropDownSearch').removeClass('huge');
     $('.dropDownSearch').addClass('large');
    }

    $(document).scrollTop(0);

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
