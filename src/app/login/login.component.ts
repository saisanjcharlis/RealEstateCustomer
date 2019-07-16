import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
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
  ]
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
