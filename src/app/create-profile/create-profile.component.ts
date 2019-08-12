import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  constructor(private routes: Router) { }

//   var reader:any,
// target:EventTarget;
// reader= new FileReader();
// reader.onload = function (imgsrc:any){
// var fileUrl = imgsrc.target.result;
// }


  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (imgsrc: any) => { 
        this.url = imgsrc.target.result;
      }
    }
  }
  ngOnInit() {
    $('#year_first_calendar').calendar({
      type: 'date',
      startMode: 'year'
    });

  }
  uploadPicture(){
    $("#imageUpload").click();
  }
  saveProfile(){
    this.routes.navigate(['/projects']);
    localStorage.setItem('logStatus','true');
  }
}
