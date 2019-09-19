import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';
import { HttpClient} from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  selectedValue;
  plotValue;
  constructor(private config: ConfigService, private http: HttpClient) { }
  transactionsList;
  projectList;
  props;
  select(e){
    console.log(e)
    let urlTransactions = `${this.config.url}services/v1/frontendcustomer/gettransactionlist`;
    var loginData = JSON.parse(localStorage.getItem('loginData'));
    this.http.post(urlTransactions,{"token": loginData.token,"params":{"project_id":e.project_id,"passbook_no": e.passbook_no}}).subscribe((data:any) => {
      if(data.success){
        console.log(data)
        localStorage.setItem('transactionSelected',JSON.stringify(data.result.results));
        this.transactionsList= data.result.results;
      }
    });
  }
  ngOnInit() {
    $('table').tablesort();
    this.transactionsList = JSON.parse(localStorage.getItem('transactionSelected'));
    this.props=JSON.parse(localStorage.getItem('passbookList'));
    this.projectList = JSON.parse(localStorage.getItem('projectsList'));
    console.log(this.transactionsList)
  }

}
