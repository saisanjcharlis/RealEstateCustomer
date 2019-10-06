import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit {
  plots;
  props = [];
  projects=["asd"];
  selectedValue;
  constructor(private config: ConfigService, private http: HttpClient, private router:Router) { }
  addPassbook(){
    $('.ui.modal').modal('show');
  }
  mouseHover(e){
    $(e.target).removeClass('basic');
  }
  mouseLeave(e){
    $(e.target).addClass('basic');
  }
  otp;
  passbookNo;
  allotPassbook(){
    console.log(this.selectedValue)
    let urlPassbookOTP = `${this.config.url}services/v1/frontendcustomer/passbookoptverification`;
    var loginData = JSON.parse(localStorage.getItem('loginData'));
    console.log(this.passbookNo)

    let reqObj = {
      "token": loginData.token,
      "params": {
        "project_id":this.selectedValue,"passbook_no":this.passbookNo,"user_id":loginData.userinfo.user_id,"type":"passbook_authentication","otp":this.otp
      }
    }
    this.http.post(urlPassbookOTP,reqObj).subscribe((data:any) => {
      console.log(data)
      if(data.success){
     
        localStorage.setItem('newUser',"false");
        $('body').toast({
          class: 'success',
          message: `Your passbook has been alloted`
        });

        let urlPassbook = `${this.config.url}services/v1/frontendcustomer/getpassbooklist`;
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        let reqObj = {
          "token": loginData.token,
          "user_id": loginData.userinfo.user_id
        }
        this.http.post(urlPassbook,{"token":loginData.token,"params":{"customer_user_id":loginData.userinfo.user_id}}).subscribe((data:any) => {
          if(data.success==true){
            localStorage.setItem('passbookList',JSON.stringify(data.result));
            this.router.navigate(['/passbook']);
            this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
            let currentUrl = this.router.url + '?';
            this.router.navigateByUrl(currentUrl)
            .then(() => {
              this.router.navigated = false;
              this.router.navigate([this.router.url]);
            });

          }
        });
      }
    });   
    $('.toast-box').css("margin-top","50px");
  }
  otpGenerate(){
    let urlPassbookOTP = `${this.config.url}services/v1/frontendcustomer/passbookauthetication`;
    var loginData = JSON.parse(localStorage.getItem('loginData'));
    let reqObj = {
      "token": loginData.token,
      "params": {
        "project_id":this.selectedValue,"passbook_no":this.passbookNo,"user_id":loginData.userinfo.user_id
      }
    }
    this.http.post(urlPassbookOTP,reqObj).subscribe((data:any) => {
      console.log(data)
    });
  }
  viewTrans(prop){
    let urlTransactions = `${this.config.url}services/v1/frontendcustomer/gettransactionlist`;
    var loginData = JSON.parse(localStorage.getItem('loginData'));
    this.http.post(urlTransactions,{"token": loginData.token,"params":{"project_id":prop.project_id,"passbook_no": prop.passbook_no}}).subscribe((data:any) => {
      console.log(data)
      if(data.success){
        localStorage.setItem('transactionSelected',JSON.stringify(data.result.results));
        this.router.navigate(['/transactions']);
      }
    });
  }
  viewDetails(prop){
    localStorage.setItem('passDetailsSelected',JSON.stringify(prop));
    this.router.navigate(['/propDetail',prop.id]);
  }
  viewProject(id){
    // if(id==24){
      this.projectList.map( (data) => {
        if(data.id==id){
          localStorage.setItem('projectSelected',JSON.stringify(data));
        }
      });
      let urlProjectDetails = `${this.config.url}customerlogin/getprojectsdetails`;
      this.http.post(urlProjectDetails,{"params":{"type":"neighbourhood","projectId":id}}).subscribe((data:any) => {
        if(data.success==true){
          localStorage.setItem('neighbourhoodData',JSON.stringify(data.result.results));
          this.http.post(urlProjectDetails,{"params":{"type":"properties","projectId":id}}).subscribe((data:any) => {
            if(data.success==true){
               localStorage.setItem('propertiesDetails',JSON.stringify(data.result.results));
               this.router.navigate(['/projectDetail',id]);
            }
          });
        }
      });
    // } 
  }
  projectList;
  ngOnInit() {
    this.props=JSON.parse(localStorage.getItem('passbookList'));
    this.projectList = JSON.parse(localStorage.getItem('projectsList'));
  }
  ngAfterViewInit(){
    $('.ui.menued.dropdown').dropdown() ;
  }

}
