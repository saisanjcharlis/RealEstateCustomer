import { Component, OnInit } from '@angular/core';
import { Map, SymbolLayout } from 'mapbox-gl';
declare var $:any;
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  images = [
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg"
  ];
  labelLayerId: string;
  saveText="Save";
  constructor() { }
  save(e){
   if(this.saveText=="Save"){
    this.saveText="Saved";
   } else {
    this.saveText="Save";
   }
   $(e.target).children('i').toggleClass('outline');
  }
  share(){

  }
  rightDate(){
    $('.itemContainer').animate({left: "-=105px"},500);
  }
  leftDate(){
    $('.itemContainer').animate({left: "+=105px"},500);
  }
  selectDate(e){
    $('.ldpGrayDayOptionContainer.selectedDate').removeClass('selectedDate');
    $(e.target).addClass("selectedDate");
  }
  onLoad(mapInstance: Map) {
    const layers = mapInstance.getStyle().layers!;

     for (let i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && (<SymbolLayout>layers[i].layout)['text-field']) {
        this.labelLayerId = layers[i].id;
        break;
      }
    }
  }
  addFavorite(){
    $('body').toast({
    message: 'Liked this project',
    class: 'blue', 
    showProgress: 'bottom'
  });
  }
  resizeMap(){
    setTimeout(()=>{    
      window.dispatchEvent(new Event('resize'));
 },0);
  }
  addCoBuy(){
    $('.ui.modal.coBuy').modal('show');
  }
  openLocationMap(){
    $('.ui.modal.locationMap').modal('show');
  }
  ngOnInit() {
    // $('.ui.rating').rating();
    $('.demo.menu .item').tab();
    if(window.innerWidth>930)
       {
        
       }
       else{
        $(".ui.tab.segment").addClass("active");
       }
  }
  ngAfterViewInit() {
    $('.ui.rating').rating();
  }
  ngOnDestroy(){
    $('body .modal').remove();
  }
}
