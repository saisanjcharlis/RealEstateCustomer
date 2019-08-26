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
  password = "admin123";
  currentPassword;
  newPassword;
  updatePasswordModal(){
    $('.ui.modal')
  .modal({
    closable  : false,
    onDeny    : function(){
      return false;
    },
    onApprove : function() {
      var newPass = $('#newPassword');
      if(newPass.val().length<=5 && newPass.val().length>0){
        $('body').toast({
          class: 'warning',
          message: 'Meet Password requirements.'
        });
        $('.toast-box').css("margin-top","50px");
        return false;
      } else if (newPass.val().length>5){
        $('body').toast({
          class: 'success',
          message: 'Password Updated Successfully.'
        });
        $('.toast-box').css("margin-top","50px");
        return true;
      } return false;



      
    }
  })
  .modal('show')
;
  }

  checkString = "Check";
  check(e){
    if(this.password == this.currentPassword){
      $(e.target).removeClass("negative"); 
      $(e.target).addClass("positive"); 
      this.checkString = "Set Password";
    }else{
      alert("Wrong password!");
    }
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
    localStorage.setItem("newUser","true");
    this.routes.navigate(['/activity']);
    localStorage.setItem('logStatus','true');
  }
}
