import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    $('.ui.dropdown').dropdown();
    $('#toggle').click(function(e){
          if(e.currentTarget.checked){
            let loggenIn = true;
            if(loggenIn){
              $('.nav').prepend('<a id="avatarMenu" href="" style="display:flex;align-items:center; color:black;"><img class="ui avatar image" src="../../../assets/man.svg">John</a>');
              // $('#createAccount').remove();
            }
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
  }

}
