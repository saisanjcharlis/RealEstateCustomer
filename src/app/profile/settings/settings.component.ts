import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  onHide(hide: boolean){
    if(hide){
      $('.gridContainer').css( "grid-template-columns", "15% 80%" );
    } else {
      $('.gridContainer').css( "grid-template-columns", "4% 90%" );
    }

  }
  ngOnInit() {
  }

}
