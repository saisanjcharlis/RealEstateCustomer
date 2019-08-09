import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navViewOnly=true;
  initialAvatar=true;
  createProfile = true;
  ngOnInit() {
   
    if(localStorage.getItem('logStatus')=='createProfile'){
      this.navViewOnly = true;
      this.createProfile = false;
      this.initialAvatar=false;
    } else if(localStorage.getItem('logStatus')=='false'){
      this.navViewOnly = false;
      this.initialAvatar=false;
    } else {
      this.navViewOnly = true;
      this.initialAvatar=true;
      this.createProfile = false;
    }
    let avatar = this.initialAvatar;
    
  
    $('#toggle').click(function(e){
          if(e.currentTarget.checked && avatar){
             $('.nav').prepend('<a id="avatarMenu" style="display:flex;align-items:center;"><img class="ui mini avatar image" src="https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1"></a>');
            }
          if(!e.currentTarget.checked){
            $('#avatarMenu').remove();
          }
          if ( $('.spectra-logo-mobile').hasClass("hideLogo") ) {
            $('.spectra-logo-mobile').removeClass("hideLogo");
            return;
          }
          $('.spectra-logo-mobile').addClass("hideLogo");
          $('.mobileNavbar').css('z-index', 2);
    });
    $('.ui.dropdown')
    .dropdown();
 
  }
}
