import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
    

  }
  saveProfile(){
    this.routes.navigate(['/projects']);
    localStorage.setItem('logStatus','true');
  }
}
