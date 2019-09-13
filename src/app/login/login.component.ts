import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { HttpClient} from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  locationSelected;
  location=["Shadnagar, TS", "Yadagirigutta, TS"];
  updateResults(val){
    this.location=["Shadnagar, TS", "Yadagirigutta, TS"];
    this.location=this.location.filter( (value)=>{
     return  value.toLowerCase().trim().includes(val.toLowerCase().trim());
    });
  }
  searchPlaceholder="Enter a location or zipcode";
  public openModal(){
    $('.ui.modal.modalSign').modal('show');   
  }
  constructor(private routes: Router, private config: ConfigService,private http: HttpClient) { }
  locationSearchEnter(e){
    localStorage.setItem('projectsDomain', e.target.value.toLowerCase());
    this.routes.navigate(['/projects']);
  }
  routeProjects(){
    localStorage.setItem('projectsDomain','telangana');
    this.routes.navigate(['/projects']);
  }
  selectLocation(e){
    console.log($(e.target).children('span').text())
    localStorage.setItem('projectsDomain',$(e.target).children('span').text().toLowerCase());
    this.routes.navigate(['/projects']);
  }
 

 
  hoverCard(e){
    $(e.target.querySelector('button')).removeClass('basic');
    $(e.target.querySelector('button')).addClass('blue');
    $(e.target).addClass("animate"); 
  }
  hoverCardRemove(e){
    $(e.target.querySelector('button')).removeClass('blue');
    $(e.target.querySelector('button')).addClass('basic');
    $(e.target).removeClass("animate"); 
  }
  
  agentModal(){
    $('.ui.modal.agentModal').modal('show');   
  }
  allotAgent(){
    $('body').toast({
      class: 'success',
      message: `Check mail for Information.`
    });
    $('.toast-box').css("margin-top","50px");
  }
  ngOnInit() {

    let url = `${this.config.url}services/v1/frontendcustomer/getprojectslist`;
  
    if(localStorage.getItem('loginData')){
      var token = JSON.parse(localStorage.getItem('loginData')).token;
      this.http.post(url,{"token":token}).subscribe((data:any) => {
        if(data.success==true){
          localStorage.setItem('projectsList',JSON.stringify(data.result));
        } 
      });
   
    }
   
    if(window.innerWidth>768)
    {
      $('.dropDownSearch').removeClass('large');
      $('.dropDownSearch').addClass('huge');
    }
    else{
     this.searchPlaceholder = "Location";
     $('.dropDownSearch').removeClass('huge');
     $('.dropDownSearch').addClass('large');
    }

    $(document).scrollTop(0);
    if(localStorage.getItem('logStatus')=='logout'){
      window.location.reload();
    }
  
    

  }
  ngAfterViewInit() {
    $('.locationButton').popup({
      popup : $('.savedSearchPop'),
      on    : 'click',
      position   : 'bottom left',
    });
  }
  ngOnDestroy(){
    $('.ui.modal').modal('hide');  
    $('body .modal').remove();
  }

}
