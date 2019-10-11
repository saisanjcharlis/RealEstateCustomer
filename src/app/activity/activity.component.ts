import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { HttpClient} from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  
  // Variables
  customerName;
  projectList;
  props;
  favList;
  dateString: string = "Select a date";

  constructor(private routes: Router,private config: ConfigService, private http: HttpClient){}
  
  // View Transactions Method
  viewTrans(prop){
    let urlTransactions = `${this.config.url}services/v1/frontendcustomer/gettransactionlist`;
    var loginData = JSON.parse(localStorage.getItem('loginData'));
    // Http Call for Transactions
    this.http.post(urlTransactions,{"token": loginData.token,"params":{"project_id":prop.project_id,"passbook_no": prop.passbook_no}}).subscribe((data:any) => {
      if(data.success){
        // Save transactions for selected if data is success
        localStorage.setItem('transactionSelected',JSON.stringify(data.result.results));
        // Navigate to Transactions
        this.routes.navigate(['/transactions']);
      }
    });
  }
  // View Passbook Details Method
  viewDetails(prop){
    // Detailed Passbooks saved to local storage
    localStorage.setItem('passDetailsSelected',JSON.stringify(prop));
    // Navigate to property Details Page
    this.routes.navigate(['/propDetail',prop.id]);
  }
  // View Project Details Method
  viewProject(id){
      this.projectList.map( (data) => {
        // Project Details for the one selected are saved to local storage
        if(data.id==id){
          localStorage.setItem('projectSelected',JSON.stringify(data));
        }
      });
      // Get neighbourhood data and Property Details from API and save to local storage
      let urlProjectDetails = `${this.config.url}customerlogin/getprojectsdetails`;
      this.http.post(urlProjectDetails,{"params":{"type":"neighbourhood","projectId":id}}).subscribe((data:any) => {
        if(data.success==true){
          localStorage.setItem('neighbourhoodData',JSON.stringify(data.result.results));
          this.http.post(urlProjectDetails,{"params":{"type":"properties","projectId":id}}).subscribe((data:any) => {
            if(data.success==true){
               localStorage.setItem('propertiesDetails',JSON.stringify(data.result.results));
                // Navigate to Project Details Page
               this.routes.navigate(['/projectDetail',id]);
            }
          });
        }
      });

  }
  
  ngAfterViewInit() {
    // Semantic UI Dropdown Initialize
    $('.ui.menued.dropdown').dropdown() ;

  }
  
  ngOnInit() {
     // Semantic UI Calender Initialize
    $('#inline_calendar').calendar({
      type: 'date',
      eventDates: [
        {
          date: new Date(2019,9,10),
          class: 'emiDate'
        },
        {
          date: new Date(2019,10,10),
          class: 'emiDate'
        }
      ],
      // On Select of EMI Date Open Modal
      onSelect(date,mode){
        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "Aug";
        month[8] = "Sept";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
    
        var year = date.getFullYear();
        var monthSelected = month[date.getMonth()];
        var day = date.getDate();
        this.dateString = monthSelected + " " + (day) + ", " + year;
        var emiDate = new Date(date.getFullYear(),date.getMonth(), 10);
        var selectedDate = new Date(date.getFullYear(),date.getMonth(), date.getDate());
        // Check selectedDate with EMI Date
        if( emiDate.getFullYear()==selectedDate.getFullYear() && emiDate.getMonth() == selectedDate.getMonth() && emiDate.getDate() == selectedDate.getDate() ){
          // Show Modal with passbook Details
          $('.ui.emiModal').modal('show');
        }
      }
    });
     // Semantic UI Calender Initialize End
    this.favList = JSON.parse(localStorage.getItem('favList')); // Inititialize Favorites List from local storage
    this.customerName = JSON.parse(localStorage.getItem('customerName')); // Inititialize Customer Name from local storage
    this.props=JSON.parse(localStorage.getItem('passbookList')); // Inititialize Passbooks List from local storage
    if(this.props == null){
      $('#inline_calendar').css('display','none'); // If 0 passbooks dont display calender
    }
    this.projectList = JSON.parse(localStorage.getItem('projectsList'));
  
  }
}
