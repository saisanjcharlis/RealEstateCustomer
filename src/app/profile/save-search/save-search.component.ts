import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'save-search',
  templateUrl: './save-search.component.html',
  styleUrls: ['./save-search.component.css']
})
export class SaveSearchComponent implements OnInit {

  constructor() { }
  rename(){
    $('.ui.modal.rename').modal('show');
  }
  delete(){
    $('.ui.modal.delete').modal('show');
  }
  deleteSearch(){
    $('.ui.modal.delete').modal('hide');
  }
  ngOnInit() {
  }

}
