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
  viewTrans(prop){
    let urlTransactions = `${this.config.url}services/v1/frontendcustomer/gettransactionlist`;
    var loginData = JSON.parse(localStorage.getItem('loginData'));
    console.log(prop)
    this.http.post(urlTransactions,{"token": loginData.token,"params":{"project_id":prop.project_id,"passbook_no": prop.passbook_no}}).subscribe((data:any) => {
      if(data.success){
        localStorage.setItem('transactionSelected',JSON.stringify(data.result.results));
        this.routes.navigate(['/transactions']);
      }
    });
  }
  viewProject(id){
    console.log(this.projectList)
    // if(id==23){
      this.projectList.map( (data) => {
        if(data.id==id){
          localStorage.setItem('projectSelected',JSON.stringify(data));
        }
      });
      let urlProjectDetails = `${this.config.url}customerlogin/getprojectsdetails`;
      this.http.post(urlProjectDetails,{"params":{"type":"neighbourhood","project_id":id}}).subscribe((data:any) => {
        if(data.success==true){
          localStorage.setItem('neighbourhoodData',JSON.stringify(data.result.results));
          this.http.post(urlProjectDetails,{"params":{"type":"properties","project_id":id}}).subscribe((data:any) => {
            if(data.success==true){
               localStorage.setItem('propertiesDetails',JSON.stringify(data.result.results));
               this.routes.navigate(['/projectDetail']);
            }
          });
        }
      });
      
      
      
    // } 
  }
  ngAfterViewInit() {
    $('.ui.menued.dropdown').dropdown() ;
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
  projectList;
  props;
  favList;
  ngOnInit() {
    if(localStorage.getItem('newUser')=="true"){
      this.newUserDisplay = true;
    }
    this.favList = JSON.parse(localStorage.getItem('favList'));
    this.customerName = JSON.parse(localStorage.getItem('customerName'));
    this.props=JSON.parse(localStorage.getItem('passbookList'));
    this.projectList = JSON.parse(localStorage.getItem('projectsList'));
  
  }
}
