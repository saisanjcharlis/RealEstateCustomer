import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { HttpClient} from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  name;
  email;
  message;
  subject;
  constructor(private routes: Router, private http: HttpClient, private config: ConfigService) { }
  submit(){
    if(localStorage.getItem('logStatus')=='true'){
      this.subject="Message from Customer";
      let url = `${this.config.url}services/v1/frontendcustomer/sendrequestemail`;
      var loginData = JSON.parse(localStorage.getItem('loginData'));
      let reqObj ={ 
              "token":loginData.token,
              "params":{ 
                "from_email":this.email,
                "username":this.name,
                "message": this.message,
                "subject": this.subject,
                "to_email": "charlis@saisanj.com"
              }
            }
       this.http.post(url,reqObj).subscribe((data:any) => {
         console.log(data)
         $('body').toast({
          class: 'success',
          message: `Your message has been sent`
        });
       });
       $('.toast-box').css("margin-top","50px"); 
    } else {
      $('.ui.modal.modalSign').modal('show');  
    }   
  }
  ngOnInit() {
    $('.input2').each(function(){
      $(this).on('blur', function(){
          if($(this).val().trim() != "") {
              $(this).addClass('has-val');
          }
          else {
              $(this).removeClass('has-val');
          }
      })    
    });
  }
}
