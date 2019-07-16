import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { 
  }
  updateProfileCompleteAvatar(){
    $('#profileAvatar').css("background-image","linear-gradient(-90deg, #0066ff 50%, rgba(0, 0, 0, 0) 50%),linear-gradient(0deg, #0066ff 50%, rgba(0, 0, 0, 0) 50%)");
  }
  notification = false;
  hideNotification(e){
      var length = e.target.offsetWidth;
      if(e.target.title == "textNotif"){
        length = e.target.offsetWidth+25;
      }
      $('.notificationHeader').animate({left: "+="+ length + "px"},500);
      setTimeout(function(){ $('.notificationHeader').css("display","none");}, 500);
      
  }
  ngOnInit() {
  }

}
