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
    localStorage.setItem('newUser',"false");
    $('body').toast({
      class: 'success',
      message: `Your passbook has been alloted`
    });
    $('.toast-box').css("margin-top","50px");
  }
  ngOnInit() {

    this.plots =  ['Windstorm','asd'];
  }

}
