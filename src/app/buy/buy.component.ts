import { Component, OnInit } from '@angular/core';
import { RouterModule , Router, ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ConfigService } from '../../services/config.service';
declare var $:any;
@Component({
  selector: 'buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  id: number;
  private sub: any;
  saveText="Save";
  // plotSelected;
  constructor(private route: ActivatedRoute, private routes: Router,private config: ConfigService,private http: HttpClient) { }
  
  save(e){
    // if(this.saveText=="Save"){
    //  this.saveText="Saved";
    // } else {
    //  this.saveText="Save";
    // }
    // $(e.target).children('i').toggleClass('outline');
    if(localStorage.getItem('logStatus')=='true'){
      var loginData = JSON.parse(localStorage.getItem('loginData'));

          if(this.saveText=="Save"){
            this.saveText="Saved";
            let url = `${this.config.url}services/v1/frontendcustomer/createcustomerfavourites`;
            this.http.post(url,{"token":loginData.token,"params":{"customer_user_id": loginData.userinfo.user_id,"project_id":this.projectSelected.id,"is_active":true}}).subscribe((data:any) => {
            });
          } else {
            this.saveText="Save";
            let url = `${this.config.url}services/v1/frontendcustomer/createcustomerfavourites`;
            this.http.post(url,{"token":loginData.token,"params":{"customer_user_id": loginData.userinfo.user_id,"project_id":this.projectSelected.id,"is_active":false}}).subscribe((data:any) => {
            });
          }
          $(e.target).children('i').toggleClass('outline');
          let urlFav = `${this.config.url}services/v1/frontendcustomer/getcustomerfavourites`;
          this.http.post(urlFav,{"token":loginData.token,"params":{"customer_user_id":loginData.userinfo.user_id}}).subscribe( (data:any) => {
            if(data.success==true){
              let favs = data.result.results.filter( (fav) => {
                return fav.status == 1;
              });
              localStorage.setItem('favList',JSON.stringify(favs));
              if(favs.length == 0){
                localStorage.setItem('favList',null);
              }
            }
          });
      
    } 
   }
   share(){
    $('.ui.modal.shareModal').modal('show');
    
  }
  message;
  fromEmail;
  subject;
  email;
  sendMail(){
    this.subject="View project from Spectra";
    let url = `${this.config.url}services/v1/frontendcustomer/sendrequestemail`;
    var loginData = JSON.parse(localStorage.getItem('loginData'));
    let reqObj ={ 
            "token":loginData.token,
            "params":{ 
              "from_email":this.fromEmail,
              "username": JSON.parse(localStorage.getItem('customerName')),
              "message": "View this project at "+ "http://63.35.27.154/realestate/#"+this.routes.url,
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

    $('.ui.modal.shareModal').modal('hide');
  }
  projectSelected;
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
    this.projectSelected=JSON.parse(localStorage.getItem('projectSelected'));

    if(localStorage.getItem('logStatus')=='true'){
      let favList = JSON.parse(localStorage.getItem('favList'));
      if(favList!=null){
        favList.map((fav)=>{
          if(fav.status==1){
            this.saveText="Saved";
            $('.saveButton').removeClass('outline')
          }
        });
      }
    }
    
  }
  ngAfterViewInit() {
    $('.ui.rating').rating();

  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
