import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit {
  plots;
  constructor() { }
  addPassbook(){
    $('.ui.modal').modal('show');
  }
  allotPassbook(){
    $('.padTop').toast({
      class: 'success',
      message: `Your passbook has been alloted`
    });
  }
  ngOnInit() {

    this.plots =  ['Windstorm', 'Bombasto','asdas'];
  }

}
