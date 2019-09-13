import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit {
  plots;
  projects = [];
  constructor() { }
  addPassbook(){
    $('.ui.modal').modal('show');
  }
  mouseHover(e){
    $(e.target).removeClass('basic');
  }
  mouseLeave(e){
    $(e.target).addClass('basic');
  }
  allotPassbook(){
    localStorage.setItem('newUser',"false");
    $('body').toast({
      class: 'success',
      message: `Your passbook has been alloted`
    });
    $('.toast-box').css("margin-top","50px");
    this.projects.push("Spectra");
  }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('passbookList')));
  }

}
