import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';
import { HttpClient } from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  constructor(private config: ConfigService, private http: HttpClient) { }
  edit=false;
  editEnabled(){
    this.edit=true;
    $('.editable').removeClass('inputDisabled');
    $('.editable').attr('disabled',false);
    $('textarea').removeClass('inputDisabled');
    $('textarea').attr('disabled',false);

  }
  saveProfile(){
    $('.editable').addClass('inputDisabled');
    $('.editable').attr('disabled',true);
    $('textarea').addClass('inputDisabled');
    $('textarea').attr('disabled',true);
    this.edit=false;
    let dobSelected=$('#year_first_calendar').calendar("get date");
    if(dobSelected !=null){
      var month = new Array();
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "Aug";
      month[8] = "Sept";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";
     var year = dobSelected.getFullYear();
     var monthSelected = month[dobSelected.getMonth()];
     var day = dobSelected.getDate();
     var dateString = monthSelected + " " + (day) + ", " + year;
    }
    let token = JSON.parse(localStorage.getItem('loginData')).token;
    let userID = JSON.parse(localStorage.getItem('loginData')).userinfo.user_id;
    let uploadData = {
        "token": token,
        "params" : {
          "customer_name": this.profileData.name,
          "customer_dob": dateString,
          "customer_spouse": this.profileData.fatherOrSpouseName,
          "customer_pr_address_line1": this.profileData.address,
          "customer_email":this.profileData.email,
          "customer_aadharno":this.profileData.aadhar,
          "customer_pan":this.profileData.pan,
          "customer_user_id": userID
        }
    };

    console.log("hell")
    let url = `${this.config.url}services/v1/frontendcustomer/updateprofileinformation`;
    this.http.post(url,uploadData).subscribe((data:any) => {
      console.log(data);
      localStorage.setItem('customerName',JSON.stringify(this.profileData.name));
    });
   
  }
  uploadPicture(){
    $("#imageUpload").click();
  }
  url = '';
  imageURL;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (imgsrc: any) => { 
        this.url = imgsrc.target.result;
        // console.log();
        const byteCharacters = atob(this.url.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {type: 'image/jpeg'});
       
       //retrieving
        var objectURL = URL.createObjectURL(blob);
        this.imageURL=blob;
      }
    }
  }
  profileData={
    name: '',
    username: '',
    phoneNumber: '',
    dob: '',
    fatherOrSpouseName: '',
    address: '',
    email: '',
    pan: '',
    aadhar: ''
  };

  ngOnInit() {
    let currentID= JSON.parse(localStorage.getItem('loginData')).userinfo.user_id;
    let token = JSON.parse(localStorage.getItem('loginData')).token;
    let url = `${this.config.url}services/v1/frontendcustomer/getprofileinformation`;
    let reqObj = {
      "token": token,
      "user_id": currentID
    }
    this.http.post(url,reqObj).subscribe((data:any) => {
      if(data.result.results.length>0){
        this.profileData.name=data.result.results[0].customer_name;
        this.profileData.dob=data.result.results[0].customer_dob;
        this.profileData.fatherOrSpouseName=data.result.results[0].customer_spouse;
        this.profileData.email=data.result.results[0].customer_email;
        this.profileData.address=data.result.results[0].customer_pr_address_line1;
        this.profileData.phoneNumber=data.result.results[0].customer_pr_phone;
        this.profileData.aadhar=data.result.results[0].customer_aadharno;
        this.profileData.pan=data.result.results[0].customer_pan;
      }
      
    });
   
    $('#year_first_calendar').calendar({
      type: 'date',
      startMode: 'year'
    });
    
  }
}
