import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RouterModule , Router, ActivatedRoute, NavigationStart } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginComponent]
})
export class NavbarComponent implements OnInit {
  constructor(private loginComp: LoginComponent,private route: ActivatedRoute, private router: Router, private loc: Location){

  }
  navViewOnly=true;
  disableProfileAction=true;
  initialAvatar=true;
  buttonsEnable=false;
  accountName;
  projectsDisplay = true;
  createProfile = true;
  loginOrSign(){
    let routeActivate = this.route.snapshot.routeConfig.path;
    if(this.accountName=="Login/Sign Up" && (routeActivate == "login" || routeActivate == "")){
      this.loginComp.openModal();
    }
  }
  mouseHover(e){
    $(e.target).removeClass('basic');
  }
  mouseLeave(e){
    $(e.target).addClass('basic');
  }
  loginActions(){
    let routeActivate = this.route.snapshot.routeConfig.path;
    // if(this.accountName=="Login/Sign Up" && (routeActivate == "login" || routeActivate == "")){
    //   this.loginComp.openModal();
    // }
    if(this.accountName=="Login/Sign Up" && (routeActivate == "projects" || routeActivate == "projectDetail" )){
      this.router.navigate(['/']);
    }
    if(localStorage.getItem('logStatus')=='createProfile'){
      this.router.navigate(['/createProfile']);
    }
  }
  home(){
    let routeActivate = this.route.snapshot.routeConfig.path;
    if(localStorage.getItem('logStatus') !=='createProfile' || routeActivate == "projects"){
      this.router.navigate(['/']);
    }
    if(routeActivate == ""){
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }
    //
   
  }
  logout(){
    let routeActivate = this.route.snapshot.routeConfig.path;
    localStorage.clear();
    if(routeActivate == "login" || routeActivate == ""){
      this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
      let currentUrl = this.router.url + '?';
      this.router.navigateByUrl(currentUrl)
        .then(() => {
          this.router.navigated = false;
          this.router.navigate([this.router.url]);
        });     
    }
    this.router.navigate(['/']);
  }
  ngOnInit() {
     if(localStorage.getItem('logStatus')=='false'){
      this.navViewOnly = false;
      this.accountName = "Login/Sign Up";
      this.disableProfileAction = false;
      this.initialAvatar=false;
    } else {
      this.navViewOnly = true;
      this.initialAvatar=true;
      this.createProfile = false;
    }
    let avatar = this.initialAvatar;
    if(avatar == true){ 
      this.accountName = JSON.parse(localStorage.getItem('loginData')).userinfo.userName;
    }
    let routeActivate = this.route.snapshot.routeConfig.path;
    if(this.accountName=="Login/Sign Up" && (routeActivate == "login" || routeActivate == "")){
      this.projectsDisplay=false;
    }
    if(this.accountName=="Login/Sign Up" && (routeActivate == "login" || routeActivate == "")){
      this.buttonsEnable=true;
    }


    $('#toggle').click(function(e){
      if(e.currentTarget.checked){
          $('.loginNav').addClass("hideLogo");
        }
          if(e.currentTarget.checked && avatar){
             $('.nav').prepend('<a id="avatarMenu" href="/profile"  style="display:flex;align-items:center;"><img class="ui mini avatar image" src="https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1"></a>');
            }
          if(!e.currentTarget.checked){
            $('.loginNav').removeClass("hideLogo");
            $('#avatarMenu').remove();
          }
          if ( $('.spectra-logo-mobile').hasClass("hideLogo") ) {
            $('.spectra-logo-mobile').removeClass("hideLogo");
            return;
          }
          $('.spectra-logo-mobile').addClass("hideLogo");
          $('.mobileNavbar').css('z-index', 2);
    });
    $('.ui.dropdown').dropdown();
    $('.ui.navFlex.dropdown').dropdown({transition: 'drop' }).dropdown({ on: 'hover' });
  }
}
