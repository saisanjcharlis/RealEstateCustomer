import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor() { }
  onHide(hide: boolean){
    if(hide){
      $('.gridContainer').css( "grid-template-columns", "15% 80%" );
    } else {
      $('.gridContainer').css( "grid-template-columns", "4% 90%" );
    }

  }
  ngOnInit() {
    $('.pop').popup({
      inline     : true,
      hoverable  : true,
      position   : 'bottom left',
      delay: {
        show: 300,
        hide: 800
      }
    });
    $('#example').DataTable( {
      columnDefs: [
          {
              targets: [ 0, 1, 2 ],
              className: 'mdl-data-table__cell--non-numeric'
          }
      ]
  } );
  }

}
