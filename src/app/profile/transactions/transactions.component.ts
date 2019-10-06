import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  selectedValue;
  plotValue;
  constructor(private config: ConfigService, private http: HttpClient,private router: Router) { }
  transactionsList;
  projectList;
  props;
  select(e){
    let urlTransactions = `${this.config.url}services/v1/frontendcustomer/gettransactionlist`;
    var loginData = JSON.parse(localStorage.getItem('loginData'));
    this.http.post(urlTransactions,{"token": loginData.token,"params":{"project_id":e.project_id,"passbook_no": e.passbook_no}}).subscribe((data:any) => {
      if(data.success){
        localStorage.setItem('transactionSelected',JSON.stringify(data.result.results));
        this.transactionsList= data.result.results;
        this.propDetails = this.props.filter( (prop)=>{
          return prop.project_id == this.transactionsList[0].project_id && prop.passbook_no == this.transactionsList[0].passbook_no
        });
        this.propDetails = this.propDetails[0];
      }
      if(data.success==false  && data.error=="can't read token"){
        alert('Session Timeout. Login Again')
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem('logStatus','logout');
        this.router.navigate(['/']);
      }
    });
  }
  propDetails;
  ngOnInit() {
    $('table').tablesort();
    this.transactionsList = JSON.parse(localStorage.getItem('transactionSelected'));
    this.props=JSON.parse(localStorage.getItem('passbookList'));
    if(this.transactionsList != null){
      this.select({project_id:this.transactionsList[0].project_id,passbook_no:this.transactionsList[0].passbook_no});
      this.propDetails = this.props.filter( (prop)=>{
        return prop.project_id == this.transactionsList[0].project_id && prop.passbook_no == this.transactionsList[0].passbook_no
      });
      this.propDetails = this.propDetails[0];
      this.plotValue=this.propDetails
    } 

    this.projectList = JSON.parse(localStorage.getItem('projectsList'));
  }

}
