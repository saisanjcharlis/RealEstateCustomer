import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  updateProfileCompleteAvatar(){
    $('#profileAvatar').css("background-image","linear-gradient(-90deg, #0066ff 50%, rgba(0, 0, 0, 0) 50%),linear-gradient(0deg, #0066ff 50%, rgba(0, 0, 0, 0) 50%)");
  }
  notification = false;
  hideNotification(e){
      var length = e.target.offsetWidth - 20;
      if(e.target.title == "textNotif"){
        length = e.target.offsetWidth+5;
      }
      this.notification = !this.notification;
      if(this.notification){
        $('.notificationHeader').animate({left: "+="+ length + "px"},500);
        $('.textNotif').animate({opacity: 0},500);
        
      } else {
        $('.notificationHeader').animate({left: "0"},500);
        $('.textNotif').animate({opacity: 1},500);
      }

  }
  ngOnInit() {
  }

}
