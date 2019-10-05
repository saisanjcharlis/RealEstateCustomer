import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AgmMap } from '@agm/core';
import { RouterModule , Router, ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ConfigService } from '../../../services/config.service';
declare var $:any;
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  id: number;
  private sub: any;
  saveText="Save";
  projectSelected;
  projects;
  buttonEnable=true;
  plotTab=false;
  mapType='satellite';
  lat;
  long;; 
  zoom: number=15;
  
  constructor(private route: ActivatedRoute, private router:Router, private config: ConfigService, private http: HttpClient) { }
  buyLink(){
    if(sessionStorage.getItem('logStatus')=='true'){
      let urlProjectDetails = `${this.config.url}services/v1/frontendcustomer/getplotsinfo`;
      var token = JSON.parse(localStorage.getItem('loginData')).token;
      this.http.post(urlProjectDetails,{"token":token,"params":{"project_id":this.projectSelected.id}}).subscribe((data:any) => {
        if(data.success==true){
           localStorage.setItem('plotsData',JSON.stringify(data.result.results));
           this.router.navigate(['/buy',this.id]);
        }
      });
   

    
    } else {
      $('.ui.modal.modalSign').modal('show');  
    };
  }
  save(e){
  
      if(sessionStorage.getItem('logStatus')=='true'){
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        let urlFav = `${this.config.url}services/v1/frontendcustomer/getcustomerfavourites`;
            if(this.saveText=="Save"){
              this.saveText="Saved";
              let url = `${this.config.url}services/v1/frontendcustomer/createcustomerfavourites`;
              this.http.post(url,{"token":loginData.token,"params":{"customer_user_id": loginData.userinfo.user_id,"project_id":this.projectSelected.id,"is_active":true}}).subscribe((data:any) => {
                this.http.post(urlFav,{"token":loginData.token,"params":{"customer_user_id":loginData.userinfo.user_id}}).subscribe( (data:any) => {
                  if(data.success==true){
                    let favs = data.result.results.filter( (fav) => {
                      return fav.status == 1;
                    });
                    localStorage.setItem('favList',JSON.stringify(favs));
                    if(favs.length == 0){
                      localStorage.setItem('favList',null);
                    }
                  } 
                });
              });
            } else {
              this.saveText="Save";
              let url = `${this.config.url}services/v1/frontendcustomer/createcustomerfavourites`;
              this.http.post(url,{"token":loginData.token,"params":{"customer_user_id": loginData.userinfo.user_id,"project_id":this.projectSelected.id,"is_active":false}}).subscribe((data:any) => {
                this.http.post(urlFav,{"token":loginData.token,"params":{"customer_user_id":loginData.userinfo.user_id}}).subscribe( (data:any) => {
                  if(data.success==true){
                    let favs = data.result.results.filter( (fav) => {
                      return fav.status == 1;
                    });
                    localStorage.setItem('favList',JSON.stringify(favs));
                    if(favs.length == 0){
                      localStorage.setItem('favList',null);
                    }
                  } 
                });
              });
            }
          
           
        $(e.target).children('i').toggleClass('outline');
      } else {
        this.buyLink();
      }
  
  }
  mouseHover(e){
    $(e.target).removeClass('basic');
  }
  mouseLeave(e){
    $(e.target).addClass('basic');
  }
  share(){
    if(sessionStorage.getItem('logStatus')=='true'){
      $('.ui.modal.shareModal').modal('show');
    } else {
      this.buyLink();
    }
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
  message;
  fromEmail;
  subject;
  email;
  sendMail(){
    this.subject="View project from Spectra";
    let url = `${this.config.url}services/v1/frontendcustomer/sendrequestemail`;
    var loginData = JSON.parse(localStorage.getItem('loginData'));
    let reqObj ={ 
            "token":loginData.token,
            "params":{ 
              "from_email":this.fromEmail,
              "username": JSON.parse(localStorage.getItem('customerName')),
              "message": "View this project at "+ "http://63.35.27.154/realestate/#"+this.router.url,
              "subject": this.subject,
              "to_email": "charlis@saisanj.com"
            }
          }
     this.http.post(url,reqObj).subscribe((data:any) => {
       console.log(data)
       $('body').toast({
        class: 'success',
        message: `Your message has been sent`
      });
     });
     $('.toast-box').css("margin-top","50px"); 

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

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
    this.neighbourhoodList=JSON.parse(localStorage.getItem('neighbourhoodData'));
    this.propertyDetailList=JSON.parse(localStorage.getItem('propertiesDetails'))
    this.projectSelected= JSON.parse(localStorage.getItem('projectSelected'));
    this.projects=JSON.parse(localStorage.getItem('projectsList'));
    this.lat=+this.projectSelected.latitude;
    this.long=+this.projectSelected.longitudes;

    


    if(sessionStorage.getItem('logStatus')=='true'){
      let favList = JSON.parse(localStorage.getItem('favList'));
      if(favList!=null){
        favList.map((fav)=>{
          if(fav.status==1 && fav.project_id==this.id){
            this.saveText="Saved";
            $('.saveButton').removeClass('outline')
          }
        });
      }
      
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
    this.sub.unsubscribe();
  }
}
