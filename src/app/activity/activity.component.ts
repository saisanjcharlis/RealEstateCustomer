import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
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
     }
     else{
     }
  } 
  constructor(private routes: Router){}
  public innerWidth: any;
  newUserDisplay = false;
  saveSearch=true;
  locationSelected = "";
  locationSearchEnter(e){
    if(e.target.value.toLowerCase().includes("hyderabad")){
      this.routes.navigate(['/projects']);
    } else {
      localStorage.setItem('projectsDomain', e.target.value.toLowerCase());
      this.routes.navigate(['/projects']);
    }
   
  }
  mouseHover(e){
    $(e.target).removeClass('basic');
  }
  mouseLeave(e){
    $(e.target).addClass('basic');
  }
  selectLocation(e){
    localStorage.setItem('projectsDomain',$(e.target).children('span').text());
    this.routes.navigate(['/projects']);
  }
  ngAfterViewInit() {
    $('.locationButton').popup({
      popup : $('.savedSearchPop'),
      on    : 'click',
      position   : 'bottom left',
    });
  }
  ngOnInit() {
    if(localStorage.getItem('newUser')=="true"){
      this.newUserDisplay = true;
    }

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
    // $('body').toast({
    //   class: 'warning',
    //   message: 'Enter existing passbook details to fetch owned plots.'
    // });
    // $('.toast-box').css("margin-top","50px");
    this.plots =  ['Windstorm', 'Bombasto'];

  }

}
