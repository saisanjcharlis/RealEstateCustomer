import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AgmMap } from '@agm/core';
import { RouterModule , Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ConfigService } from '../../../services/config.service';
declare var $:any;
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  
  saveText="Save";
  projectSelected;
  projects;
  buttonEnable=true;
  plotTab=false;

  lat;
  long;; 
  zoom: number=15;
  
  constructor(private router:Router, private config: ConfigService, private http: HttpClient) { }
  buyLink(){
    if(localStorage.getItem('logStatus')=='true'){
      let urlProjectDetails = `${this.config.url}services/v1/frontendcustomer/getplotsinfo`;
      var token = JSON.parse(localStorage.getItem('loginData')).token;
      this.http.post(urlProjectDetails,{"token": token}).subscribe((data:any) => {
        if(data.success==true){
          console.log(data);
           // localStorage.setItem('plotsData',JSON.stringify(data));
        }
      });
   

      this.router.navigate(['/buy']);
    } else {
      $('.ui.modal.modalSign').modal('show');  
    };
  }
  save(e){
   if(this.saveText=="Save"){
    this.saveText="Saved";
   } else {
    this.saveText="Save";
   }
   $(e.target).children('i').toggleClass('outline');
  }
  mouseHover(e){
    $(e.target).removeClass('basic');
  }
  mouseLeave(e){
    $(e.target).addClass('basic');
  }
  share(){
    $('.ui.modal.shareModal').modal('show');
    
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
  sendMail(){
    $('.ui.modal.shareModal').modal('hide');
  }
  rightDate(){
    $('.itemContainer').animate({left: "-=105px"},500);
  }
  leftDate(){
    $('.itemContainer').animate({left: "+=105px"},500);
  }
  selectDate(e){
    $('.ldpGrayDayOptionContainer.selectedDate').removeClass('selectedDate');
    $(e.target).addClass("selectedDate");
  }
 
  
  openLocationMap(){
    $('.ui.modal.locationMap').modal('show');
  }
  openGMap(){
    $('.ui.modal.googleMap').modal('show');
  }
  plotDetails(){
    $('.gridContainer').css('grid-template-columns','23% 75%');
    $('.gridContainer').css('grid-gap','10px 2%');
    this.plotTab = true;
  }
  plotDetailsReset(){
    $('.gridContainer').css('grid-template-columns','50% 45%');
    $('.gridContainer').css('grid-gap','10px 1rem');
    this.plotTab = false;
  }
  neighbourhoodList;
  propertyDetailList;
  ngOnInit() {
    this.neighbourhoodList=JSON.parse(localStorage.getItem('neighbourhoodData'));
    this.propertyDetailList=JSON.parse(localStorage.getItem('propertiesDetails'))
    this.projectSelected= JSON.parse(localStorage.getItem('projectSelected'));
    this.projects=JSON.parse(localStorage.getItem('projectsList'));
    this.lat=this.projectSelected.latitude;
    this.long=this.projectSelected.longitudes;
    if(localStorage.getItem('logStatus')=='true'){
      this.buttonEnable=false;
    }
    $('.demo.menu .item').tab();
    if(!(window.innerWidth>930)){
        $(".ui.tab.segment").addClass("active");
       }
  }
  ngAfterViewInit() {
    $('.event-modal').modal({
      allowMultiple: true
    });
    $('.ui.rating').rating();
  }
  ngOnDestroy(){
    $('body .modal').remove();
  }
}
