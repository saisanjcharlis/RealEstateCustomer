import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
declare var $:any;
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() sideStatus = new EventEmitter<boolean>();
  sStatus = true;
  hideSidebar(){
    this.sideStatus.emit(!this.sStatus);
    this.sStatus = !this.sStatus;
    $('.sectionHeader').transition('fade right');
    if(this.sStatus){
      $('.arrow').removeClass('right');
      $('.arrow').addClass('left');
    } else {
      $('.arrow').removeClass('left');
      $('.arrow').addClass('right');
     
    }
   
  }
  constructor() { }

  ngOnInit() {
  }

}
