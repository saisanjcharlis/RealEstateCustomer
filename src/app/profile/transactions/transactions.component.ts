import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  selectedValue;
  constructor() { }
  transactionsList;
  projectList;
  ngOnInit() {
    this.transactionsList = JSON.parse(localStorage.getItem('transactionSelected'));
    this.projectList = JSON.parse(localStorage.getItem('projectsList'));
    console.log(this.transactionsList)
  }

}
