import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { HttpClient} from '@angular/common/http';
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
  constructor(private routes: Router,private config: ConfigService, private http: HttpClient){}
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

    $('#projectEMI').popup({
      popup : $('.emiProjectContent'),
      on    : 'click',
      position   : 'bottom right',
    });
  }
  customerName;
  ngOnInit() {
    if(localStorage.getItem('newUser')=="true"){
      this.newUserDisplay = true;
    }
    this.customerName = JSON.parse(localStorage.getItem('customerName'));

  
  }

}
