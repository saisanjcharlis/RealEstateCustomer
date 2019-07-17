import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../../services/login-service.service';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // constructor(private loginService: LoginService) { }
  // loginStat = this.loginService.loginStatus;
  // loginStatusSignedUp = this.loginService.loginStatusSignUp;
  ngOnInit() {
    // let loginN = this.loginService.loginNew ;
    $('.ui.dropdown').dropdown();
    $('#toggle').click(function(e){
          // if(e.currentTarget.checked && loginN == 'true'){
          //     $('.nav').prepend('<a id="avatarMenu" href="" style="display:flex;align-items:center; color:black;"><img class="ui avatar image" src="assets/man.svg">John</a>');
          //   }
          // if(!e.currentTarget.checked){
          //   $('#avatarMenu').remove();
          // }
          if ( $('.spectra-logo-mobile').hasClass("hideLogo") ) {
            $('.spectra-logo-mobile').removeClass("hideLogo");
            return;
          }
          $('.spectra-logo-mobile').addClass("hideLogo");
          $('.mobileNavbar').css('z-index', 2);
    });

    // console.log("loginStatus"+this.loginService.loginStatus+ "\n"+ "loginStatusSignUp"+this.loginService.loginStatusSignUp+"\n"+"loginNew"+this.loginService.loginNew);
 
  }

}
