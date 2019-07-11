import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  activeTab(e){
    $('.activated').removeClass("activated ");
    $(e.target).addClass("activated");
    }
  ngOnInit() {
    $('.ui.dropdown').dropdown();

    $('.item.navD').click(function(e){
      $('.color').removeClass("change color");
      $(e.target).addClass("change color");
    });


    $('#toggle').click(function(e){
          if(e.currentTarget.checked){
            let loggenIn = true;
            if(loggenIn){
              $('.nav').prepend('<a id="avatarMenu" href="" style="display:flex;align-items:center; color:black;"><img class="ui avatar image" src="../../../assets/man.svg">John</a>');
              $('#createAccount').remove();
            }
            }
          if(!e.currentTarget.checked){
            $('#avatarMenu').remove();
          }
          if ( $('.spectra-logo').hasClass("hideLogo") ) {
            $('.spectra-logo').removeClass("hideLogo");
            return;
          }
          $('.spectra-logo').addClass("hideLogo");
    });
  }

}
