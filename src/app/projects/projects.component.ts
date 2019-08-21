import { Component, OnInit, HostListener } from '@angular/core';
import { Marker } from '../../models/marker';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { LocationsService } from '../../services/locations.service';
import {Location} from '@angular/common';
import { MapsService } from '../../services/maps.service';
declare var $:any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(
    private locationService: LocationsService,
    private mapApiLoader: MapsAPILoader,
    private mapsService: MapsService) {
    for (let i = 0; i < 5; i++) {
          const url = 'https://loremflickr.com/640/480?random=' + (i +1);
          this.imagesList[i] = {
            url: url,
            show: false
        };
        }
   }
  public lat: number;
  public lng: number;
  public zoom: number;
  public openedWindow: number;
  public markers: Marker[] = this.locationService.getMarkers();


  icon = { url: 'https://image.flaticon.com/icons/svg/33/33622.svg', scaledSize: { width: 40, height: 40 } };
    
    // placeMarker(position: any) {
    // const lat = position.coords.lat;
    // const lng = position.coords.lng;
    // const plotNumber = position.coords.plotNumbers;
    // const projName = position.coords.projectName;
    // this.markers.push({ lat: lat, lng: lng, plotNumbers: plotNumber,projectName: projName, city: 'asd',state:'sada','postalcode':'21131','projectLink':'asdas'});
    // }
  markerClick(e){
    console.log(e);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(event.target.innerWidth>480)
     {
      this.triggerPropertyViewNormal();
     }
     else{
      this.triggerPropertyView();
     }
  } 
  iconSearch = true;
  imagesList = [];
  location="Hyderabad Real Estate";



  images = [
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/09/Prado1.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/09/Prado1.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/02/galaxy_new.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg",
    "http://www.spectraindia.in/wp-content/uploads/2016/09/Prado1.jpg"
  ];
  filterTrue = false;
  


  addCoBuy(){
    $('.ui.modal.coBuy').modal('setting', 'transition', 'horizontal flip').modal('show');
  }
  triggerPropertyView(){
    $('.hiddenContent').removeClass('hidden');
    $('.visibleContent').removeClass('visible');
    $('.hiddenContent').addClass('visible');
    $('.visibleContent').addClass('hidden');
  }
  triggerPropertyViewNormal(){
    $('.hiddenContent').removeClass('visible');
    $('.visibleContent').removeClass('hidden');
    $('.hiddenContent').addClass('hidden');
    $('.visibleContent').addClass('visible');
  }
  toggleActive(e){
    e.target.classList.toggle("activeProperty");
    console.log(e.target);
  }
  changeToUpcoming(){
    
    $('.listing').removeClass('activeProject');
    $('.upcoming').addClass('activeProject');
    
  }
  changetoListing(){
    
    $('.listing').addClass('activeProject');
    $('.upcoming').removeClass('activeProject');
  }
  moreFilter(){
    $('.ui.dropdown')
    .dropdown();

    if(this.filterTrue == false){
      $('.filterMenu').transition('fade down');
      $('.filterMenu').css('display','initial');
      $(".projects").css('display','none');
      $(".displayInfo").css("display","none");
    } else {
      $('.filterMenu').transition('fade up');
      $('.filterMenu').css('display','none');
      $('.projects').css('display','flex');
      $(".displayInfo").css("display","block");
    }
    this.filterTrue = !this.filterTrue;
  
  }
  expandSearch(){
    $('.editable').removeAttr("disabled");
    $('.editable').focus();
    $('.editable').css('color','#0066ff');
    this.iconSearch = false;
  }
  cancel(){
    this.iconSearch = true;
    $('.editable').css('color','#000');
    $('.editable').attr("disabled",true);
  }
  ngOnInit() {

    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
    this.zoom = this.mapsService.zoom;
    $(document).scrollTop(0);
    $('.ui.checkbox').checkbox();
      if(window.innerWidth>480)
       {
        this.triggerPropertyViewNormal();
       }
       else{
        this.triggerPropertyView();
       }
    

  }
  likedProject(e){
    $(e.target).css('color','#0066ff'); 
    $(e.target).removeClass('outline');
    $(e.target).transition('bounce');
  }
  ngAfterViewInit() {
    if(window.innerWidth>768){
      // this.addCoBuy();
    }
    console.log(this.markers);
    $('.ui.rating').rating();
  }
  ngOnDestroy(){
    $('body .modal').remove();
  }
}
