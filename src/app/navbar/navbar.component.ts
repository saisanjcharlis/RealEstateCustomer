import { Component, OnInit } from '@angular/core';
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
  initialAvatar=true;
  accountName;
  projectsDisplay = true;
  createProfile = true;
  loginOrSign(){
    let routeActivate = this.route.snapshot.routeConfig.path;
    if(this.accountName=="Login/Sign Up" && (routeActivate == "login" || routeActivate == "")){
      this.loginComp.openModal();
    }
    if(this.accountName=="Login/Sign Up" && routeActivate == "projects"){
      this.router.navigate(['/login']);
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
   
  }
  logout(){
    let routeActivate = this.route.snapshot.routeConfig.path;
    localStorage.setItem('logStatus','false');
    if(routeActivate == "login"){
      this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
      let currentUrl = this.router.url + '?';
      this.router.navigateByUrl(currentUrl)
        .then(() => {
          this.router.navigated = false;
          this.router.navigate([this.router.url]);
        });     
    }
    this.router.navigate(['/login']);
  }
  ngOnInit() {
   
    if(localStorage.getItem('logStatus')=='createProfile'){
     
      this.navViewOnly = true;
      this.accountName = "Complete Profile";
      this.createProfile = false;
      this.initialAvatar=false;
    } else if(localStorage.getItem('logStatus')=='false'){
      this.navViewOnly = false;
      this.accountName = "Login/Sign Up";
      this.initialAvatar=false;
    } else {
      this.navViewOnly = true;
      this.initialAvatar=true;
      this.createProfile = false;
    }
    let avatar = this.initialAvatar;
    if(avatar == true){
      this.accountName = "Hello, John";
    }
    let routeActivate = this.route.snapshot.routeConfig.path;
    if(this.accountName=="Login/Sign Up" && (routeActivate == "login" || routeActivate == "")){
      this.projectsDisplay=false;
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
