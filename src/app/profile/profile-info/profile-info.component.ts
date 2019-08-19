import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  constructor() { }
  cancel=false;
  options="Edit Profile";
  cancelEdit(){
    this.cancel = false;
    $('.editDisabled').attr("disabled");
    $('.editDisabled').removeClass('editEnabled');
    this.options="Edit";
    $('.edit').removeClass("green");
    $('.edit').addClass("blue");
    $('.editButton').css("display","none");
  }
  editEnabled(){
    if(this.options == "Save Profile"){
      $('body').toast({
        message: 'Profile Update Successfully',
        class: 'green', 
        showProgress: 'bottom'
      });
      this.cancelEdit();
    } else {
      this.cancel = true;
      $('.editDisabled').removeAttr("disabled");
      $('.editDisabled').addClass('editEnabled');
      this.options="Save Profile";
      $('.edit').removeClass("blue");
      $('.edit').addClass("green");
      $('.editButton').css("display","initial");
    }



  }
 
  uploadPicture(){
    $("#imageUpload").click();
  }
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
  onHide(hide: boolean){
    if(hide){
      $('.gridContainer').css( "grid-template-columns", "15% 80%" );
    } else {
      $('.gridContainer').css( "grid-template-columns", "4% 90%" );
    }

  }
  ngOnInit() {

    
  }
}
