import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  updateProfileCompleteAvatar(){
    $('#profileAvatar').css("background-image","linear-gradient(-90deg, #0066ff 50%, rgba(0, 0, 0, 0) 50%),linear-gradient(0deg, #0066ff 50%, rgba(0, 0, 0, 0) 50%)");
  }
  plots;
  public innerWidth: any;
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
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if(this.innerWidth > 768){
      $(".plotContainer").niceScroll({
            cursorborderradius:10,
            cursorcolor: "#0066ff", 
            cursoropacitymin: 0, 
            cursoropacitymax: 1, 
            cursorwidth: 12, 
            cursorborder: "none", 
            background:"rgba(20,20,20,0.1)",
            zindex: "auto" , 
            scrollspeed: 30,
            mousescrollstep: 40, 
            touchbehavior: true, 
            emulatetouch: false, 
            hwacceleration: true,
            grabcursorenabled: true, 
        
            autohidemode: "leave",  
            iframeautoresize: true,
            preservenativescrolling: false, 
            spacebarenabled: true,
            horizrailenabled: false, 
            enablemousewheel: true, 
            enablekeyboard: true, 
            smoothscroll: true, 
            sensitiverail: false, 
            enablemouselockapi: true, 
            hidecursordelay: 400, 
            nativeparentscrolling: false, 
            cursordragontouch: true, 
            oneaxismousemode: true
            }); 
    }
    $('body').toast({
      class: 'error',
      displayTime: 0,
      message: 'Account discontinued. Contact Customer support.'
    });
    $('body').toast({
      class: 'warning',
      message: 'Enter existing passbook details to fetch owned plots.'
    });

    this.plots =  ['Windstorm', 'Bombasto'];
    
        //If plot not more than 2 don't run this
    // if(this.plots.length > 1){
    //   $(".plotContainer").niceScroll({
    //     cursorborderradius:10,
    //     cursorcolor: "#0066ff", 
    //     cursoropacitymin: 0, 
    //     cursoropacitymax: 1, 
    //     cursorwidth: 12, 
    //     cursorborder: "none", 
    //     background:"rgba(20,20,20,0.1)",
    //     zindex: "auto" , 
    //     scrollspeed: 30,
    //     mousescrollstep: 40, 
    //     touchbehavior: true, 
    //     emulatetouch: false, 
    //     hwacceleration: true,
    //     grabcursorenabled: true, 
    
    //     autohidemode: "leave",  
    //     iframeautoresize: true,
    //     preservenativescrolling: false, 
    //     spacebarenabled: true,
    //     horizrailenabled: false, 
    //     enablemousewheel: true, 
    //     enablekeyboard: true, 
    //     smoothscroll: true, 
    //     sensitiverail: false, 
    //     enablemouselockapi: true, 
    //     hidecursordelay: 400, 
    //     nativeparentscrolling: false, 
    //     cursordragontouch: true, 
    //     oneaxismousemode: true
    //     }); 
    // }
  }
}
