import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hideSignUp=false;
  hideSignIn=true;
  constructor() { }
  haveAccount(){
     this.hideSignUp = false;
     this.hideSignIn = true;
  }
  dontHaveAccount(){
    this.hideSignUp = true;
    this.hideSignIn = false;
  }
  ngOnInit() {
  }

}
