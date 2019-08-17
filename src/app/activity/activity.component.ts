import { Component, OnInit, HostListener } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  showEMI = true;
  showtrans = false;
  showFeed = false;
  plots;
  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(event.target.innerWidth>1025)
     {
      $('.feed').css('display', 'block');
      $('.transHide').css('display', 'initial');
     }
     else{
      $('.feed').css('display', 'none');
      $('.transHide').css('display', 'none');
     }
  } 
  updateProfileCompleteAvatar(){
    $('#profileAvatar').css("background-image","linear-gradient(-90deg, #0066ff 50%, rgba(0, 0, 0, 0) 50%),linear-gradient(0deg, #0066ff 50%, rgba(0, 0, 0, 0) 50%)");
  } 
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
public dateHide(): void {
  $('.emiDate').css('display', 'none');
  this.showEMI = false;
}
public dateShow(): void {
  this.showEMI = true;
  $('.emiDate').css('display', 'initial');
}
public feedHide(): void {
  $('.feed').css('display', 'none');
  this.showFeed = false;
}
public feedShow(): void {
  $('.feed').css('display', 'block');
  this.showFeed = true;
}
public transHide(): void{
  $('.transHide').css('display', 'none');
  this.showtrans = false;
}
public transShow(): void {
  this.showtrans = true;
  $('.transHide').css('display', 'initial');
}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 768){
      $(".plotContainers").niceScroll({
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
      class: 'warning',
      message: 'Enter existing passbook details to fetch owned plots.'
    });
    $('.toast-box').css("margin-top","50px");
    this.plots =  ['Windstorm', 'Bombasto'];

  }

}
