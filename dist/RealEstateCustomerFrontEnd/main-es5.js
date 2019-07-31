(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-profile/create-profile.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-profile/create-profile.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"padTop\">\n  <span class=\"sectionHeader\">\n    Create Profile\n  </span>\n  <button class=\"ui button desktopButton saveProfileDesktop\" (click)=\"saveProfile()\"  type=\"submit\">Save<i class=\"arrow right icon\" style=\"color:white;\"></i></button>\n  <div style=\"clear:both;\"></div>\n  <div class=\"container\">\n    <div><span class=\"cancelForm\" routerLink=\"/login\">Cancel<i style=\"margin-left:5px;\" class=\"close icon\"></i></span></div>\n    <div style=\"clear: both;\"></div>\n    <form style=\"padding:30px 15px;\" class=\"ui form\">\n      <div>\n            <div class=\"avatar\">\n              <!-- <svg class=\"editButton\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M0.986181 8.97657C0.986181 13.1963 4.54204 16.6485 8.96794 16.6485C13.3939 16.6485 16.9497 13.1963 16.9497 8.97657C16.9497 4.75688 13.3939 1.30469 8.96794 1.30469C4.54204 1.30469 0.986181 4.75688 0.986181 8.97657Z\" fill=\"#0066FF\" stroke=\"white\"/>\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.23375 5.51578C6.0875 5.36954 6.0875 5.13331 6.23375 4.98708L7.11125 4.10967C7.18131 4.03946 7.27643 4 7.37562 4C7.47482 4 7.56994 4.03946 7.64 4.10967L8.375 4.84459L6.96875 6.2507L6.23375 5.51578ZM12.5 8.96917L8.75 5.21956L7.34375 6.62566L11.0938 10.3753H12.5V8.96917ZM11.75 9.62535H11.405L8.405 6.62566L8.75 6.2807L11.75 9.28038V9.62535ZM5 11.5002H14V13H5V11.5002Z\" fill=\"white\"/>\n                </svg> -->\n                <svg class=\"editButton\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M0.500097 12.8886C0.500097 19.366 5.95563 24.6485 12.7249 24.6485C19.4942 24.6485 24.9497 19.366 24.9497 12.8886C24.9497 6.41113 19.4942 1.12866 12.7249 1.12866C5.95563 1.12866 0.500097 6.41113 0.500097 12.8886Z\" fill=\"#0066FF\" stroke=\"white\"/>\n                  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.78208 7.35787C8.57083 7.1304 8.57083 6.76293 8.78208 6.53546L10.0496 5.1706C10.1508 5.06138 10.2882 5 10.4315 5C10.5747 5 10.7121 5.06138 10.8133 5.1706L11.875 6.31381L9.84375 8.50109L8.78208 7.35787ZM17.8333 12.7298L12.4167 6.89709L10.3854 9.08436L15.8021 14.9171H17.8333V12.7298ZM16.75 13.7505H16.2517L11.9183 9.08436L12.4167 8.54775L16.75 13.2139V13.7505ZM7 16.6669H20V19H7V16.6669Z\" fill=\"white\"/>\n                </svg>\n                  \n            <img src=\"https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1\" />\n          </div>\n          <div class=\"field\">\n            <label>First Name</label>\n            <input type=\"text\" name=\"first-name\" >\n          </div>\n          <div class=\"field\">\n            <label>Last Name</label>\n            <input type=\"text\" name=\"last-name\" >\n          </div>\n          <div class=\"field disabled\">\n            <label>Password</label>\n            <input type=\"password\" value=\"admin123\" name=\"password\" >\n          </div>\n          <div class=\"update\"><span>Update Password</span></div>\n          <div class=\"field\">\n            <label>Email</label>\n            <input type=\"email\" name=\"email\" >\n          </div>\n          <div class=\"field disabled\">\n            <label>Phone Number</label>\n            <input type=\"number\" value=\"9435350679\" name=\"phNo\" >\n          </div>\n          <div class=\"update\"><span>Update Phone Number</span></div>\n          \n      </div>\n      <div>\n        <div class=\"field\">\n            <label>Address</label>\n            <textarea rows=\"2\"></textarea>\n        </div>\n        <div class=\"field\">\n          <label>Date Of Birth</label>\n          <div class=\"ui calendar\" id=\"year_first_calendar\">\n            <div class=\"ui input left icon\">\n              <i class=\"calendar icon\"></i>\n              <input type=\"text\" placeholder=\"Date\">\n            </div>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label>Aadhar Number</label>\n          <input type=\"number\" name=\"aadhar-number\" >\n        </div>\n        <div class=\"field\">\n          <label>Pan Number</label>\n          <input type=\"text\" name=\"pan-number\" >\n        </div>\n        <div class=\"field\">\n          <label>Payment Method</label>\n          <select class=\"ui fluid dropdown\">\n            <option value=\"\">Select</option>\n            <option value=\"cash\">Cash</option>\n            <option value=\"cash\">Card</option>\n            <option value=\"cash\">Online</option>\n            <option value=\"cash\">Cheque</option>\n        </select>\n        </div>\n        <div class=\"field\" style=\"margin-top:20px;float:right;\">\n          <i class=\"large credit card icon creditCard\"></i>\n          <span class=\"payMethod\">Add Payment Method</span>\n        </div>\n      </div>\n     \n      \n      <!-- <button class=\"ui button\" type=\"submit\">Submit</button> -->\n    </form> \n  </div>   \n  <button class=\"ui button mobileButton saveProfile\" (click)=\"saveProfile()\"  type=\"submit\">Save<i class=\"arrow right icon\" style=\"color:white;\"></i></button>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bodyLogin\">\n    <div class=\"mobileIntro\">\n            <div style=\"text-align: center;\">\n              <h1 style=\"color:white;\">SPECTRA</h1>\n              <span style=\"color:white; font-weight: 800;\">Powered By </span><img alt=\"marketfront-logo\" class=\"marketfront-logo\" align=\"top\"\n              src=\"http://redlily.marketfront.in/img/marketfront-logo.png\"/>\n              <a (click)=\"browseLimited()\" routerLink=\"/projects\"><button class=\"whiteBtn\">Browse Projects<i class=\"fa fa-fw fa-chevron-right\"></i></button></a>\n            </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"form-container sign-up-container\">\n            <form [@itemAnim] action=\"\" onSubmit=\"\" class=\"sign-up-contain\" *ngIf=\"hideSignUp\">\n              <h3><span>Sign up</span> to experience the most efficient way of communication</h3>\n              <div class=\"inputContainer\">\n                <input id=\"phoneno\" type=\"tel\" placeholder=\"Enter Mobile Number\" autocomplete=\"false\" required />\n                <label for=phoneno></label>\n              </div>\n              <div class=\"inputContainer\">\n                <!-- <span class=\"resendText\">Wait30s</span> Wait for 30 second icon -->\n                <i class=\"resendText spinner icon\"></i>\n                 <!-- <i class=\"resend redo icon\"></i> -->\n                 <input id=\"otp\" type=\"text\" placeholder=\"Enter OTP\" autocomplete=\"false\" required />\n                 <label for=otp></label>\n              </div>\n              <div class=\"inputContainer\">\n                <input id=\"password\" type=\"password\" placeholder=\"Choose a Password\" autocomplete=\"false\" required />\n               <label for=password></label>\n              </div>\n              <div class=\"buttonCont\">\n                <button class=\"yellowBtn\" type=\"submit\" (click)=\"signUp()\" routerLink=\"/createProfile\">Let's Go<i class=\"fa fa-fw fa-chevron-right\"></i></button>\n                <button class=\"blueBtn\" (click)=\"haveAccount()\">I already have an account<i class=\"fa fa-fw fa-chevron-right\"></i></button>\n              </div>\n            </form>\n            <form [@itemAnim] action=\"\" (ngSubmit)=\"signIn(u1.value,p2.value)\" *ngIf=\"hideSignIn\">\n              <h3><span>Sign in</span> using your username and password</h3>\n              <div class=\"inputContainer\">\n                <input id=\"signInUsername\" #u1 type=\"text\" placeholder=\"Username\" autocomplete=\"false\" required />\n                <label for=username></label>\n              </div>\n              <div class=\"inputContainer\">\n                <input id=\"signInPassword\" #p2 type=\"password\" placeholder=\"Password\" autocomplete=\"false\" required />\n              <label for=password></label>\n              </div>\n              <a href=\"#\" style=\"font-weight: 800;\"><span>Forgot your password</span></a>\n              <div class=\"buttonCont\">\n                <button class=\"yellowBtn\" type=\"submit\">Sign In<i class=\"fa fa-fw fa-chevron-right\"></i></button>\n                <button class=\"blueBtn\" (click)=\"dontHaveAccount()\">Don't have an account?<i class=\"fa fa-fw fa-chevron-right\"></i></button>\n              </div>\n            </form>\n        </div>\n        <div class=\"form-container side-info displayNone\">\n          <form>\n            <div style=\"text-align: left;\">\n                <img alt=\"spectra-logo\" class=\"spectra-logo\" src=\"../../../assets/spectra.png\"/>\n                <br>\n              <span style=\"color:white;\">Powered By</span><img alt=\"marketfront-logo\" class=\"marketfront-logo\" align=\"top\"\n              src=\"http://redlily.marketfront.in/img/marketfront-logo.png\"/>\n              <h1>Buy your dream plot</h1>\n              <a (click)=\"browseLimited()\" routerLink=\"/projects\"><button class=\"whiteBtn\">Browse Projects<i class=\"fa fa-fw fa-chevron-right\"></i></button></a>\n              <div class=\"info\">\n                <a href=\"#\" style=\"margin-right:10px;\">Terms of Use</a><a href=\"#\">Social</a>\n              </div>\n            </div>\n          </form>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"desktop navbar\">\n    <div class=\"toprow\">\n        <img routerLink=\"/login\" style=\"cursor:pointer;\" alt=\"spectra-logo\" class=\"ui image spectra-logo\" src=\"assets/spectra.png\"/>\n        <div class=\"navItems\">\n          <a *ngIf=\"createProfile\"  class=\"item navFlex\" routerLink=\"/createProfile\" routerLinkActive=\"colorJoin change\">\n              <i class=\"navIcon plus icon large\"></i>\n              <span>Join</span>\n          </a>\n          <a class=\"item navFlex\" routerLink=\"/projects\" routerLinkActive=\"color change\">\n              <i class=\"navIcon home icon large\"></i>\n              <span>Projects</span>\n          </a>\n          <a  [ngClass]=\"{'disabledIcon':!initialAvatar}\" class=\"item navFlex\" routerLink=\"/passbook\" routerLinkActive=\"color change\">\n              <i class=\"navIcon university icon large\"></i>\n              <span>Passbook</span>\n          </a>\n          <a  [ngClass]=\"{'disabledIcon':!initialAvatar}\" class=\"item navFlex\" routerLink=\"/transactions\" routerLinkActive=\"color change\">\n            <i class=\"navIcon exchange icon large\"></i>\n            <span>Transactions</span>\n         </a>\n         <a class=\"item navFlex ui dropdown\" style=\"margin-left:80px !important;\">\n              <i class=\"navIcon bell outline icon large\"></i>\n              <div *ngIf=\"initialAvatar\" class=\"floating ui circular label\" style=\"background-color: #FCB332; color:white; font-size:0.75; opacity: 0.8; margin-top:14px !important; margin-right:24px!important;\">2</div>\n              <span>Notification</span>\n              <div class=\"menu\">\n                  <div class=\"header notificationHeader\">Notifications</div>\n                  <a class=\"item itemProfile\">Complete your profile details\n                    <br><br>\n                   <span class=\"importantText\">Aadhar is mandatory for real estate transactions</span> \n                  </a>\n                  <a class=\"item itemProfile\">Pay your EMI for plot 314 by 24th July\n                      <br><br>\n                      <button class=\"ui mini  yellow button\">Pay Now</button>\n                  </a>\n                  \n            </div>\n         </a>\n         <div [ngClass]=\"{'disabledIcon':!initialAvatar}\" class=\"navFlex item ui pointing dropdown\">\n                <!-- <img class=\"ui mini image\" style=\"display:block;margin-left:12px;\" id=\"profileAvatar\" src=\"https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1\" /> -->\n                \n              <i class=\"navIcon user circle icon large\"></i>\n              <span>Hello, John</span>\n              <div class=\"menu\">\n                    <a class=\"item itemProfile\" routerLink=\"/profile\" style=\"font-size:14px;\">View Your Profile</a>\n                    <div class=\"divider\"></div>\n                    <div class=\"header dropHeader\">Account</div>\n                    <a class=\"item itemProfile\" routerLink=\"/help\"><i class=\"question circle icon\"></i>Help</a>\n                    <a class=\"item itemProfile\" routerLink=\"/settings\"><i class=\"cog icon \"></i>Settings</a>\n                    <a class=\"item itemProfile\" routerLink=\"/login\"><i class=\"sign out alternate icon \"></i>Logout</a>\n              </div>\n          </div>\n         </div>\n    </div>\n</div>\n<div class=\"mobileNavbar mobileNav\">\n    <div>\n      <input id=\"toggle\" type=\"checkbox\">  \n      <label class=\"toggle-container\" for=\"toggle\">\n        <span class=\"button button-toggle\"></span>\n      </label>\n      <nav class=\"nav\">\n        <a *ngIf=\"createProfile\" routerLink=\"/login\" routerLinkActive=\"activated\" id=\"createAccount\" class=\"nav-item\"><i style=\"color:#FCB332;\" class=\"plus icon\"></i>Join</a>\n        <a *ngIf=\"navViewOnly\" [ngClass]=\"{'disabled':!initialAvatar}\" routerLink=\"/profile\" routerLinkActive=\"activated\" class=\"nav-item\" ><i class=\"user outline icon\"></i>Profile</a>\n        <a  routerLink=\"/projects\" routerLinkActive=\"activated\" class=\"nav-item\" ><i class=\"home icon\"></i><span>Projects</span></a>\n        <a *ngIf=\"navViewOnly\" [ngClass]=\"{'disabled':!initialAvatar}\" routerLink=\"/passbook\" routerLinkActive=\"activated\" class=\"nav-item\" ><i class=\"clipboard icon\"></i>Passbook</a>\n        <a *ngIf=\"navViewOnly\" [ngClass]=\"{'disabled':!initialAvatar}\" routerLink=\"/transactions\" routerLinkActive=\"activated\" class=\"nav-item\" ><i class=\"exchange icon\"></i>Transactions</a>\n        <a *ngIf=\"navViewOnly\" [ngClass]=\"{'disabled':!initialAvatar}\" routerLink=\"/notifications\" routerLinkActive=\"activated\" class=\"nav-item\"><i class=\"envelope outline icon\"></i>Notifications</a> \n        <a routerLink=\"/support\" routerLinkActive=\"activated\" class=\"nav-item\" ><i class=\"question circle outline icon\"></i>Support</a> \n        <a *ngIf=\"navViewOnly\" class=\"nav-item\" routerLink=\"/login\"><i class=\"sign out alternate icon \"></i>Logout</a>\n      </nav>\n      </div>\n      <div>\n        <!-- <img alt=\"spectra-logo\" class=\"ui image spectra-logo-mobile\" src=\"assets/spectra.png\"/> -->\n      </div>\n</div>\n  \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pagenotfound/pagenotfound.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pagenotfound/pagenotfound.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n    <div class=\"notfound\">\n        <div class=\"notfound-404\">\n            <h3>Oops! Page not found</h3>\n            <h1><span style=\"color:#0066ff;\">4</span><span style=\"color:#FCB332;\">0</span><span style=\"color:#0066ff;\">4</span></h1>\n        </div>\n        <h2>we are sorry, but the page you requested was not found</h2>\n        <button class=\"ui secondary button\" routerLink=\"/login\">Back to Home</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/passbook/passbook.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/passbook/passbook.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"padTop\">\n        <span class=\"sectionHeader\">\n            Passbook\n        </span>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/emi-date/emi-date.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/emi-date/emi-date.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dateContainer\"> \n    <air-datepicker [airOptions]=\"options\" [(airDate)]=\"date\"  (airChange)=\"dateChanged()\"></air-datepicker> \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/emi-detail/emi-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/emi-detail/emi-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"EMIHeader\">\n    EMI Details\n</div>\n<div class=\"container\">\n    <div class=\"form-container detailedInfo\">\n      <ul class=\"list\">\n          <li>Spectra Fortune, Plot No 314</li>\n          <li>BJIPD2659A</li>\n          <li>15000\n                  <svg class=\"alignRs\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M10.4119 5.44376C10.6945 5.44376 10.9239 5.21695 10.9239 4.9375C10.9239 4.65805 10.6945 4.43124 10.4119 4.43124H5.97504C5.69245 4.43124 5.4631 4.65805 5.4631 4.9375C5.4631 5.21695 5.69245 5.44376 5.97504 5.44376H7.51088C8.05019 5.44376 8.50202 5.80145 8.6495 6.28743H5.97504C5.69245 6.28743 5.4631 6.51424 5.4631 6.79369C5.4631 7.07314 5.69245 7.29995 5.97504 7.29995H8.4884C8.27204 7.60511 7.91496 7.8062 7.51088 7.8062H5.97504C5.75057 7.8062 5.55184 7.95143 5.48572 8.16328C5.41948 8.37525 5.50072 8.60551 5.68632 8.73096L9.44067 11.2622C9.52928 11.3217 9.62902 11.35 9.72864 11.35C9.89249 11.35 10.0536 11.2731 10.1526 11.1293C10.3109 10.8978 10.2516 10.5826 10.0181 10.4252L7.63036 8.81538C8.56214 8.7668 9.33418 8.14239 9.6119 7.29995H10.4119C10.6945 7.29995 10.9239 7.07314 10.9239 6.79369C10.9239 6.51424 10.6945 6.28743 10.4119 6.28743H9.69451C9.64602 5.98104 9.53753 5.69478 9.37442 5.44376H10.4119Z\" fill=\"#0066FF\" stroke=\"#0066FF\" stroke-width=\"0.3\"/>\n                  <path d=\"M8.1935 0.549927C4.05357 0.549927 0.684937 3.88113 0.684937 7.97506C0.684937 12.069 4.05357 15.4001 8.1935 15.4001C12.3334 15.4001 15.7019 12.069 15.7019 7.97506C15.7019 3.88113 12.3334 0.549927 8.1935 0.549927V0.549927ZM8.1935 14.3876C4.61801 14.3876 1.70883 11.5107 1.70883 7.97506C1.70883 4.4393 4.61801 1.56244 8.1935 1.56244C11.7689 1.56244 14.678 4.4393 14.678 7.97506C14.678 11.5107 11.7689 14.3876 8.1935 14.3876V14.3876Z\" fill=\"#0066FF\" stroke=\"#0066FF\" stroke-width=\"0.5\"/>\n                  </svg>\n                  \n                \n                 \n            </li>\n      </ul>\n    </div>\n    <div class=\"form-container fields \">\n      <ul class=\"list\">\n          <li>Project Info</li>\n          <li>Passbook</li>\n          <li>Amount due</li>\n      </ul>\n    </div>\n</div>\n\n\n\n<div class=\"dContainer\">\n  <span class=\"selectedDate\">13th March 2019</span>\n  <div class=\"gridContainer\">\n    <span >Project Info</span><span>Spectra Fortune, <br>Plot No. 314</span>\n    <span >Amount Due</span><span>Rs. 15000</span>\n    <span >Last Payment<br> Date</span><span>18th March 1994</span>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/plot-info-container/plot-info-container.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/plot-info-container/plot-info-container.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"form-container projectInfo\">\n            <div style=\"width: 100%;\">\n                    <span style=\"font-size:12px; font-weight: bolder;\">Spectra Fortune</span>\n                    <br>\n                    <span style=\"font-size:12px; font-weight: bold; opacity: 0.5;\">Plot No. 314</span>\n                    <svg class=\"positionNav\" width=\"8\" height=\"13\" viewBox=\"0 0 8 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M0.212402 11.5781L4.7924 6.98815L0.212402 2.39815L1.6224 0.988148L7.6224 6.98815L1.6224 12.9881L0.212402 11.5781Z\" fill=\"#0066FF\"/>\n                    </svg>\n            </div>\n            \n        </div>\n        <div class=\"form-container fields \">\n                <!-- <img src=\"../../../assets/prado.jpg\" alt=\"Smiley face\"> -->\n                <img src=\"http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg\" alt=\"Project Image\" >                       \n        </div>\n</div>\n\n\n<div class=\"dContainer\">\n             <div class=\"plotContainer\">\n                     <div class=\"plotOwned\">\n                        <span class=\"projectName\">Spectra Fortune</span>\n                        <span class=\"plotNumber\">Plot No. 314</span>\n                        <span class=\"emiAmount\">EMI - 9600</span>\n                     </div>\n                     <img src=\"http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg\" alt=\"Project Image\" > \n             </div>\n             <div class=\"ui divider\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"padTop\">\n    <span class=\"heading\">Profile</span>\n    <div class=\"notificationHeader\" (click)=\"hideNotification($event)\">\n      <span title=\"textNotif\" class=\"textNotif\">Pay dues on time</span>\n    </div>\n    <div class=\"avatar\">\n      <img id=\"profileAvatar\" width=\"70\" src=\"https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1\" />\n      <!-- <button (click)=\"updateProfileCompleteAvatar()\">sad</button> -->\n    </div>\n    <span class=\"profileName\">John Wick</span>\n  <br>\n  <span class=\"sectionHeader\">\n    Plots Owned\n  </span>\n  <plot-info-container></plot-info-container>\n  <plot-info-container></plot-info-container>\n  <span class=\"sectionHeader\">\n    Upcoming EMI's\n  </span>\n  <emi-date></emi-date>\n  <emi-detail></emi-detail>\n  <span class=\"sectionHeader\">\n    Recent Transactions\n  </span>\n  <recent-trans></recent-trans>\n  <recent-trans></recent-trans>\n</div>\n\n\n<div class=\"dPadTop\">\n   <!-- \n        <div class=\"header\">Plots Owned</div> \n        <plot-info-container></plot-info-container>\n        <plot-info-container></plot-info-container>\n  </div>\n  </div> -->\n\n\n  <div>\n    \n    <div style=\"background-color: white; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);position: relative;\">\n      <div style=\"height:40px; background-color: #0066ff;\"></div>\n          <img class=\"profilePic\" width=\"70\" src=\"https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1\" />\n      <div style=\"color:#0066ff;font-weight: bold; text-align: center;margin-bottom:10px;margin-top:65px;\">John Snow</div>\n      <div class=\"gridContainer\">\n          <span class=\"info\">Account Status</span><span class=\"label-info\">Verified</span>\n          <span class=\"info\">Plots Owned</span><span class=\"label-info\">2</span>\n          <span class=\"info\">Date of Joining</span><span class=\"label-info\">12/02/2019</span>\n      </div>\n      <i class=\"user edit large icon\" style=\"color:#0066ff; float:right;margin-top:10px; margin-right:20px; cursor: pointer;\"></i>\n      <div style=\"clear:both; margin-bottom:10px;\"></div>\n    </div>\n\n    <div class=\"emiContainer1\">\n      <div class=\"emiHeader\">Upcoming EMI's</div>\n      <emi-date></emi-date>\n      <emi-detail></emi-detail>\n    </div>\n\n    <div>\n      <div class=\"header\">Recent Transactions</div> \n      <recent-trans></recent-trans>\n      <recent-trans></recent-trans>\n      <recent-trans></recent-trans>\n    </div>\n\n  </div>\n\n  <div>\n    <div class=\"plotHeader\">Plots Owned</div> \n    <div style=\"background-color: white;\">\n      <plot-info-container></plot-info-container>\n      <plot-info-container></plot-info-container>\n    </div>\n  </div>\n\n  <div class=\"emiContainer2\">\n    <div class=\"emiHeader\">Upcoming EMI's</div>\n    <emi-date></emi-date>\n    <emi-detail></emi-detail>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/recent-trans/recent-trans.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/recent-trans/recent-trans.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"form-container detailedInfo\">\n          <ul class=\"list\">\n              <li class=\"transID\">Transaction ID: 652343242</li>\n              <li class=\"emiAmount\" style=\" font-weight: bold;\">15000\n                    <svg class=\"alignRs\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path d=\"M10.4119 5.44376C10.6945 5.44376 10.9239 5.21695 10.9239 4.9375C10.9239 4.65805 10.6945 4.43124 10.4119 4.43124H5.97504C5.69245 4.43124 5.4631 4.65805 5.4631 4.9375C5.4631 5.21695 5.69245 5.44376 5.97504 5.44376H7.51088C8.05019 5.44376 8.50202 5.80145 8.6495 6.28743H5.97504C5.69245 6.28743 5.4631 6.51424 5.4631 6.79369C5.4631 7.07314 5.69245 7.29995 5.97504 7.29995H8.4884C8.27204 7.60511 7.91496 7.8062 7.51088 7.8062H5.97504C5.75057 7.8062 5.55184 7.95143 5.48572 8.16328C5.41948 8.37525 5.50072 8.60551 5.68632 8.73096L9.44067 11.2622C9.52928 11.3217 9.62902 11.35 9.72864 11.35C9.89249 11.35 10.0536 11.2731 10.1526 11.1293C10.3109 10.8978 10.2516 10.5826 10.0181 10.4252L7.63036 8.81538C8.56214 8.7668 9.33418 8.14239 9.6119 7.29995H10.4119C10.6945 7.29995 10.9239 7.07314 10.9239 6.79369C10.9239 6.51424 10.6945 6.28743 10.4119 6.28743H9.69451C9.64602 5.98104 9.53753 5.69478 9.37442 5.44376H10.4119Z\" fill=\"#0066FF\" stroke=\"#0066FF\" stroke-width=\"0.3\"/>\n                      <path d=\"M8.1935 0.549927C4.05357 0.549927 0.684937 3.88113 0.684937 7.97506C0.684937 12.069 4.05357 15.4001 8.1935 15.4001C12.3334 15.4001 15.7019 12.069 15.7019 7.97506C15.7019 3.88113 12.3334 0.549927 8.1935 0.549927V0.549927ZM8.1935 14.3876C4.61801 14.3876 1.70883 11.5107 1.70883 7.97506C1.70883 4.4393 4.61801 1.56244 8.1935 1.56244C11.7689 1.56244 14.678 4.4393 14.678 7.97506C14.678 11.5107 11.7689 14.3876 8.1935 14.3876V14.3876Z\" fill=\"#0066FF\" stroke=\"#0066FF\" stroke-width=\"0.5\"/>\n                      </svg>\n                    \n                     \n                </li>\n          </ul>\n        </div>\n        <div class=\"form-container fields \">\n              <span class=\"dateInfo\" >21/12/2019</span>\n        </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/project/project.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/project/project.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"form-container projectInfo\">\n            <div style=\"width: 100%;\">\n                    <span style=\"font-size:12px; font-weight: bolder;\">Spectra Fortune</span>\n                    <br>\n                    <span style=\"font-size:12px; font-weight: bold;\">Sanath Nagar</span>\n                    <br>\n                    <span style=\"font-size:12px; font-weight: bold; opacity: 0.5;\">Plot No. 314</span>\n                    <svg class=\"positionNav\" width=\"8\" height=\"13\" viewBox=\"0 0 8 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M0.212402 11.5781L4.7924 6.98815L0.212402 2.39815L1.6224 0.988148L7.6224 6.98815L1.6224 12.9881L0.212402 11.5781Z\" fill=\"#0066FF\"/>\n                    </svg>\n            </div>\n            \n        </div>\n        <div class=\"form-container fields \">\n                <img src=\"http://www.spectraindia.in/wp-content/uploads/2016/10/fortune.jpg\" alt=\"Project Image\" >                       \n        </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"padTop\">\n    <span class=\"sectionHeader\">\n        Available Projects\n    </span>\n</div>\n<div style=\"height:100vh;padding-bottom: 1000px; width:auto;padding-top: 100px;\">\n    sad\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/transactions/transactions.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transactions/transactions.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"padTop\">\n    <span class=\"sectionHeader\">\n        Transactions\n    </span>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _passbook_passbook_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passbook/passbook.component */ "./src/app/passbook/passbook.component.ts");
/* harmony import */ var _create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-profile/create-profile.component */ "./src/app/create-profile/create-profile.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/auth.guard */ "./src/services/auth.guard.ts");











var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'profile', canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'createProfile', component: _create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_8__["CreateProfileComponent"] },
    { path: 'transactions', component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_9__["TransactionsComponent"] },
    { path: 'passbook', component: _passbook_passbook_component__WEBPACK_IMPORTED_MODULE_7__["PassbookComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'RealEstateCustomerFrontEnd';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_air_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-air-datepicker */ "./node_modules/angular2-air-datepicker/fesm5/angular2-air-datepicker.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_plot_info_container_plot_info_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/plot-info-container/plot-info-container.component */ "./src/app/profile/plot-info-container/plot-info-container.component.ts");
/* harmony import */ var _profile_emi_detail_emi_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/emi-detail/emi-detail.component */ "./src/app/profile/emi-detail/emi-detail.component.ts");
/* harmony import */ var _profile_recent_trans_recent_trans_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/recent-trans/recent-trans.component */ "./src/app/profile/recent-trans/recent-trans.component.ts");
/* harmony import */ var _profile_emi_date_emi_date_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/emi-date/emi-date.component */ "./src/app/profile/emi-date/emi-date.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _passbook_passbook_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./passbook/passbook.component */ "./src/app/passbook/passbook.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./create-profile/create-profile.component */ "./src/app/create-profile/create-profile.component.ts");
/* harmony import */ var _projects_project_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projects/project/project.component */ "./src/app/projects/project/project.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/auth.guard */ "./src/services/auth.guard.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _profile_plot_info_container_plot_info_container_component__WEBPACK_IMPORTED_MODULE_11__["PlotInfoContainerComponent"],
                _profile_emi_detail_emi_detail_component__WEBPACK_IMPORTED_MODULE_12__["EmiDetailComponent"],
                _profile_recent_trans_recent_trans_component__WEBPACK_IMPORTED_MODULE_13__["RecentTransComponent"],
                _profile_emi_date_emi_date_component__WEBPACK_IMPORTED_MODULE_14__["EmiDateComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"],
                _passbook_passbook_component__WEBPACK_IMPORTED_MODULE_17__["PassbookComponent"],
                _create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_19__["CreateProfileComponent"],
                _projects_project_project_component__WEBPACK_IMPORTED_MODULE_20__["ProjectComponent"],
                _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_22__["TransactionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular2_air_datepicker__WEBPACK_IMPORTED_MODULE_5__["Angular2AirDatepickerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"]
            ],
            providers: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-profile/create-profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-profile/create-profile.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padTop{\n    padding-top: 80px;\n}\n@media all and (min-width: 769px) {\n    .mobileButton{\n        display: none;\n    }\n}\n@media all and (max-width: 768px) {\n    .desktopButton{\n        display: none;\n    }\n}\n.sectionHeader{\n    border-radius: 0px 15px 15px 0px;\n    background-color: #0066FF;\n    color:white;\n    display: inline-block;\n    margin-top:15px;\n    padding: 5px 10px 5px 15px ;\n    margin-bottom: 20px;\n}\n.container {\n\tbackground-color: #fff;\n\tborder-radius: 5px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\twidth: 90%;\n\tmax-width: 90%;\n    min-height: 480px;\n    margin:0 auto;\n    margin-bottom:60px;\n}\n.saveProfile{\n    background-color: #0066ff;\n    color:white; \n    float:right;\n    margin-right:5%; \n    margin-top:5%;\n    margin-bottom: 5%;\n    cursor: pointer;\n}\n.saveProfileDesktop{\n    background-color: #0066ff;\n    color:white; \n    float:right;\n    margin-right:5%; \n    margin-top:5%;\n    margin-bottom: 2%;\n    cursor: pointer;\n}\n.saveProfileDesktop:hover{\n    background-color:#134da5;\n    color:white;\n}\n.saveProfile:hover{\n    background-color:#0d55c0;\n    color:white;\n}\nform label{\n    /* font-weight: 600 !important; */\n}\n.creditCard{\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    margin-left:10px;\n    color:#828282;\n}\n.payMethod{\n    text-transform: uppercase;\n    color:#2FCE72;\n    margin-left:10px;\n    cursor: pointer;\n    font-weight: 700;\n}\n.avatar{\n    margin-left:14.5px;\n    margin-top:10px;\n    position: relative;\n    margin-bottom:50px;\n}\n.avatar img{\n    left:50%;\n    width:70px;\n    position: absolute;\n    -webkit-transform:translate(-50%,-50%);\n            transform:translate(-50%,-50%);\n    border-radius: 50%;\n    border-width: 4px;\n    padding: 4px;\n    background-image: linear-gradient(-90deg, rgb(250, 250, 250) 50%, rgba(0, 0, 0, 0) 50%),\n                      linear-gradient(0deg, rgb(250, 250, 250) 100%, rgba(0, 0, 0, 0) 50%);\n}\n.editButton{\n    position: absolute;\n    left:50%;\n    -webkit-transform:translate(50%,20%);\n            transform:translate(50%,20%);\n    /* margin-top:10px; */\n    z-index: 1;\n}\n@media all and (min-width: 769px) {\n    .avatar img{\n        width:100px;\n        padding: 5px;\n    }\n    .editButton{\n        -webkit-transform:translate(90%,40%);\n                transform:translate(90%,40%);\n    }\n}\n.cancelForm{\n    float:right;cursor:pointer;font-weight: bold;opacity:0.25;margin-right:15px;margin-top:10px;\n}\n.update{\n    text-align: right;\n    cursor: pointer;\n    opacity: 0.8;\n    text-transform: uppercase;\n    font-weight: bold;\n\tcolor:#2FCE72;\n}\nform{\n    display:grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    align-items: center;\n    grid-gap: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXByb2ZpbGUvY3JlYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7QUFDQTtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7SUFDZiwyQ0FBMkM7Q0FDOUMsVUFBVTtDQUNWLGNBQWM7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFFBQVE7SUFDUixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFLOUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1o7MEZBQ3NGO0FBQzFGO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksb0NBQTRCO2dCQUE1Qiw0QkFBNEI7SUFDaEM7QUFDSjtBQUNBO0lBQ0ksV0FBVyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsZUFBZTtBQUMvRjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtDQUNwQixhQUFhO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWiwyREFBMkQ7SUFDM0QsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZFRvcHtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgLm1vYmlsZUJ1dHRvbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5kZXNrdG9wQnV0dG9ue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbi5zZWN0aW9uSGVhZGVye1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2RkY7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTVweCA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb250YWluZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcblx0d2lkdGg6IDkwJTtcblx0bWF4LXdpZHRoOiA5MCU7XG4gICAgbWluLWhlaWdodDogNDgwcHg7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOjYwcHg7XG59XG4uc2F2ZVByb2ZpbGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcbiAgICBjb2xvcjp3aGl0ZTsgXG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OjUlOyBcbiAgICBtYXJnaW4tdG9wOjUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zYXZlUHJvZmlsZURlc2t0b3B7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcbiAgICBjb2xvcjp3aGl0ZTsgXG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OjUlOyBcbiAgICBtYXJnaW4tdG9wOjUlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zYXZlUHJvZmlsZURlc2t0b3A6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTM0ZGE1O1xuICAgIGNvbG9yOndoaXRlO1xufVxuLnNhdmVQcm9maWxlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IzBkNTVjMDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbmZvcm0gbGFiZWx7XG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50OyAqL1xufVxuLmNyZWRpdENhcmR7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIGNvbG9yOiM4MjgyODI7XG59XG4ucGF5TWV0aG9ke1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IzJGQ0U3MjtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLmF2YXRhcntcbiAgICBtYXJnaW4tbGVmdDoxNC41cHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOjUwcHg7XG59XG4uYXZhdGFyIGltZ3tcbiAgICBsZWZ0OjUwJTtcbiAgICB3aWR0aDo3MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci13aWR0aDogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCByZ2IoMjUwLCAyNTAsIDI1MCkgNTAlLCByZ2JhKDAsIDAsIDAsIDApIDUwJSksXG4gICAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigyNTAsIDI1MCwgMjUwKSAxMDAlLCByZ2JhKDAsIDAsIDAsIDApIDUwJSk7XG59XG5cbi5lZGl0QnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OjUwJTtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwyMCUpO1xuICAgIC8qIG1hcmdpbi10b3A6MTBweDsgKi9cbiAgICB6LWluZGV4OiAxO1xufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAuYXZhdGFyIGltZ3tcbiAgICAgICAgd2lkdGg6MTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gICAgLmVkaXRCdXR0b257XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoOTAlLDQwJSk7XG4gICAgfVxufVxuLmNhbmNlbEZvcm17XG4gICAgZmxvYXQ6cmlnaHQ7Y3Vyc29yOnBvaW50ZXI7Zm9udC13ZWlnaHQ6IGJvbGQ7b3BhY2l0eTowLjI1O21hcmdpbi1yaWdodDoxNXB4O21hcmdpbi10b3A6MTBweDtcbn1cbi51cGRhdGV7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRjb2xvcjojMkZDRTcyO1xufVxuZm9ybXtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWdhcDogMTByZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/create-profile/create-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-profile/create-profile.component.ts ***!
  \************************************************************/
/*! exports provided: CreateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProfileComponent", function() { return CreateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CreateProfileComponent = /** @class */ (function () {
    function CreateProfileComponent(routes) {
        this.routes = routes;
    }
    CreateProfileComponent.prototype.ngOnInit = function () {
        $('#year_first_calendar').calendar({
            type: 'date',
            startMode: 'year'
        });
    };
    CreateProfileComponent.prototype.saveProfile = function () {
        this.routes.navigate(['/projects']);
        localStorage.setItem('logStatus', 'true');
    };
    CreateProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CreateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-profile',
            template: __webpack_require__(/*! raw-loader!./create-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-profile/create-profile.component.html"),
            styles: [__webpack_require__(/*! ./create-profile.component.css */ "./src/app/create-profile/create-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateProfileComponent);
    return CreateProfileComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Roboto:100,600,800');\n@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n@import 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900';\n.bodyLogin{\n    background-color: #FCB332;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tfont-family: 'Roboto', sans-serif;\n\theight: 100%;\n}\nh3{\n\tfont-weight: 300 ;\n\tmargin-bottom: 50px;\n}\nh3 span{\n\tfont-weight: bold;\n}\nform {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tpadding: 0 50px;\n\theight: 100%;\n}\n.mobileIntro{\n\tmargin-bottom:10px;\n}\n@media all and (min-width: 769px) {\n\t.mobileIntro{\n\t\tdisplay: none;\n\t}\t\n}\n.container {\n\tbackground-color: #fff;\n\tborder-radius: 10px;\n  \tbox-shadow: 0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.22);\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 850px;\n\tmax-width: 90%;\n\tmin-height: 480px;\n}\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\theight: 100%;\n\ttransition: all 0.6s ease-in-out;\n}\n.side-info {\n\tleft: 0;\n\twidth: 50%;\n\t/* background-color: #000000; */\n\tbackground:rgba(0, 0, 0, 0.8);\n\t/* background-image: url(\"../../../assets/house.png\"); */\n\t\n\t\n}\n.sign-up-container {\n\tright: 0;\n\twidth: 50%;\n\topacity: 1;\n}\n@media all and (max-width: 768px) {\n\t.sign-up-container{\n\t\twidth:100%;\n\t}\n\t.displayNone{\n\t\tdisplay: none;\n\t}\n}\ninput::-webkit-input-placeholder{\n\ttext-transform: uppercase;\n}\ninput::-moz-placeholder{\n\ttext-transform: uppercase;\n}\ninput::-ms-input-placeholder{\n\ttext-transform: uppercase;\n}\ninput::placeholder{\n\ttext-transform: uppercase;\n}\n.inputContainer{\n  display: flex;\n  width: 100%;\n  flex-direction: row-reverse;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n  padding-bottom: 3px;\n  margin-bottom: 40px;\n}\ninput{\n  outline: none;\n  border: 0;\n  background: transparent;\n  flex: 1 0 auto;\n  font-size: 13px;\n  letter-spacing: 2px;\n  font-weight: 300;\n}\ninput:focus ~ label {\n\topacity: 1;\n}\n.inputContainer label{\n\tfont-family: FontAwesome;\n\tfont-size: 14px;\n\topacity: .1;\n\ttransition: opacity .5s ease;\n  }\n.inputContainer label::before {\n\talign-items: center;\n\tcolor: #000;\n\tdisplay: flex;\n\theight: 30px;\n\tjustify-content: center;\n\twidth: 30px;\n  }\ninput:focus ~ label {\n\topacity: 1;\n  }\ninput[type='text'] ~ label::before {\n\tcontent: \"\\f007\";\n  }\ninput[type='tel'] ~ label::before {\n\tcontent: \"\\f095\";\n  }\ninput[type='password'] ~ label::before {\n\tcontent: \"\\f023\";\n  }\n.marketfront-logo{\n\twidth:35%;\n}\n.info{\n\tmargin-top:100px !important;\n}\n.info a{\n\tcolor: #FCB332 !important;\n}\nh1{\n\ttext-transform: uppercase;\n\tcolor:white;\n\tfont-size:3em ;\n}\n.buttonCont{\n\twidth:100%;\n\tdisplay: flex;\n}\n.yellowBtn{\n\tbackground: #FCB332;\n\tcolor: black;\n\tflex: 1 0 auto;\n}\n.whiteBtn{\n\tbackground:white;\n\tcolor: black;\n\twidth: 100%;\n\n}\n.blueBtn{\n\tmargin-left:10px;\n\tbackground: #0066ff;\n\tcolor: white;\n\tflex: 1 0 auto;\n}\nbutton {\n\talign-items: center;\n\t\n\tborder: 0;\n\tborder-radius: 3px;\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);\n\tdisplay: flex;\n\tfont-family: \"Lato\", sans-serif;\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tjustify-content: center;\n\tmargin-top: 20px;\n\toutline: none;\n\tpadding: 10px 9px 10px 11px;\n  }\nbutton .fa {\n\tfont-size: 12px;\n\tmargin-left: auto;\n\tfloat:right;\n\tposition: relative;\n\ttop: 1px;\n  }\nbutton:hover {\n\t-webkit-transform: scale(1.02);\n\t\t\ttransform: scale(1.02);\n  }\nbutton:active {\n\t-webkit-transform: scale(0.99);\n\t\t\ttransform: scale(0.99);\n  }\n.resend{\n\t  -webkit-transform: translateY(8px);\n\t          transform: translateY(8px);\n  }\n.resendText{\n\t-webkit-transform: translateY(8px);\n\t        transform: translateY(8px);\n\topacity: 0.5;\n\tcolor:#0066ff;\n  }\n.resendText:after, .resendText:before{\n\t  box-sizing: initial !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RUFBeUU7QUFDekUsNkVBQTZFO0FBQzdFLDBFQUEwRTtBQUUxRTtJQUNJLHlCQUF5QjtDQUM1QixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsaUNBQWlDO0NBQ2pDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLFlBQVk7QUFDYjtBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQztFQUNDLGFBQWE7Q0FDZDtBQUNEO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsbUJBQW1CO0dBQ2pCOytCQUM0QjtDQUM5QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFlBQVk7Q0FDWixnQ0FBZ0M7QUFDakM7QUFFQTtDQUNDLE9BQU87Q0FDUCxVQUFVO0NBQ1YsK0JBQStCO0NBQy9CLDZCQUE2QjtDQUM3Qix3REFBd0Q7OztBQUd6RDtBQUdBO0NBQ0MsUUFBUTtDQUNSLFVBQVU7Q0FDVixVQUFVO0FBQ1g7QUFDQTtDQUNDO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyxhQUFhO0NBQ2Q7QUFDRDtBQUVBO0NBQ0MseUJBQXlCO0FBQzFCO0FBRkE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFGQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUZBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtDQUNDLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsV0FBVztDQUNYLDRCQUE0QjtFQUMzQjtBQUNGO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixXQUFXO0VBQ1Y7QUFFQTtDQUNELFVBQVU7RUFDVDtBQUNBO0NBQ0QsZ0JBQWdCO0VBQ2Y7QUFDQTtDQUNELGdCQUFnQjtFQUNmO0FBQ0E7Q0FDRCxnQkFBZ0I7RUFDZjtBQUVGO0NBQ0MsU0FBUztBQUNWO0FBR0E7Q0FDQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLFdBQVc7Q0FDWCxjQUFjO0FBQ2Y7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0FBQ2Q7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFdBQVc7O0FBRVo7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGNBQWM7QUFDZjtBQUNDO0NBQ0EsbUJBQW1COztDQUVuQixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLDRFQUE0RTtDQUM1RSxhQUFhO0NBQ2IsK0JBQStCO0NBQy9CLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsMkJBQTJCO0VBQzFCO0FBQ0E7Q0FDRCxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsUUFBUTtFQUNQO0FBQ0E7Q0FDRCw4QkFBOEI7R0FDNUIsc0JBQXNCO0VBQ3ZCO0FBQ0E7Q0FDRCw4QkFBOEI7R0FDNUIsc0JBQXNCO0VBQ3ZCO0FBQ0E7R0FDQyxrQ0FBMEI7V0FBMUIsMEJBQTBCO0VBQzNCO0FBQ0E7Q0FDRCxrQ0FBMEI7U0FBMUIsMEJBQTBCO0NBQzFCLFlBQVk7Q0FDWixhQUFhO0VBQ1o7QUFDQTtHQUNDLDhCQUE4QjtFQUMvQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsNjAwLDgwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzoxMDAsMzAwLDQwMCw3MDAsOTAwJztcblxuLmJvZHlMb2dpbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNCMzMyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5oM3tcblx0Zm9udC13ZWlnaHQ6IDMwMCA7XG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5oMyBzcGFue1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbmZvcm0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogMCA1MHB4O1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2JpbGVJbnRyb3tcblx0bWFyZ2luLWJvdHRvbToxMHB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcblx0Lm1vYmlsZUludHJve1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cdFxufVxuLmNvbnRhaW5lciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIFx0Ym94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgXG5cdFx0XHQwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHdpZHRoOiA4NTBweDtcblx0bWF4LXdpZHRoOiA5MCU7XG5cdG1pbi1oZWlnaHQ6IDQ4MHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcbn1cblxuLnNpZGUtaW5mbyB7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiA1MCU7XG5cdC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7ICovXG5cdGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjgpO1xuXHQvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaG91c2UucG5nXCIpOyAqL1xuXHRcblx0XG59XG5cblxuLnNpZ24tdXAtY29udGFpbmVyIHtcblx0cmlnaHQ6IDA7XG5cdHdpZHRoOiA1MCU7XG5cdG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuc2lnbi11cC1jb250YWluZXJ7XG5cdFx0d2lkdGg6MTAwJTtcblx0fVxuXHQuZGlzcGxheU5vbmV7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXJ7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaW5wdXRDb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5pbnB1dHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxleDogMSAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XG5cdG9wYWNpdHk6IDE7XG59XG4uaW5wdXRDb250YWluZXIgbGFiZWx7XG5cdGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRvcGFjaXR5OiAuMTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZTtcbiAgfVxuLmlucHV0Q29udGFpbmVyIGxhYmVsOjpiZWZvcmUge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRjb2xvcjogIzAwMDtcblx0ZGlzcGxheTogZmxleDtcblx0aGVpZ2h0OiAzMHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0d2lkdGg6IDMwcHg7XG4gIH1cblxuICBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcblx0b3BhY2l0eTogMTtcbiAgfVxuICBpbnB1dFt0eXBlPSd0ZXh0J10gfiBsYWJlbDo6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYwMDdcIjtcbiAgfVxuICBpbnB1dFt0eXBlPSd0ZWwnXSB+IGxhYmVsOjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjA5NVwiO1xuICB9XG4gIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10gfiBsYWJlbDo6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYwMjNcIjtcbiAgfVxuXG4ubWFya2V0ZnJvbnQtbG9nb3tcblx0d2lkdGg6MzUlO1xufVxuXG5cbi5pbmZve1xuXHRtYXJnaW4tdG9wOjEwMHB4ICFpbXBvcnRhbnQ7XG59XG4uaW5mbyBhe1xuXHRjb2xvcjogI0ZDQjMzMiAhaW1wb3J0YW50O1xufVxuaDF7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGNvbG9yOndoaXRlO1xuXHRmb250LXNpemU6M2VtIDtcbn1cblxuLmJ1dHRvbkNvbnR7XG5cdHdpZHRoOjEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG4ueWVsbG93QnRue1xuXHRiYWNrZ3JvdW5kOiAjRkNCMzMyO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZsZXg6IDEgMCBhdXRvO1xufVxuLndoaXRlQnRue1xuXHRiYWNrZ3JvdW5kOndoaXRlO1xuXHRjb2xvcjogYmxhY2s7XG5cdHdpZHRoOiAxMDAlO1xuXG59XG4uYmx1ZUJ0bntcblx0bWFyZ2luLWxlZnQ6MTBweDtcblx0YmFja2dyb3VuZDogIzAwNjZmZjtcblx0Y29sb3I6IHdoaXRlO1xuXHRmbGV4OiAxIDAgYXV0bztcbn1cbiBidXR0b24ge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcblx0Ym9yZGVyOiAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCksIDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0b3V0bGluZTogbm9uZTtcblx0cGFkZGluZzogMTBweCA5cHggMTBweCAxMXB4O1xuICB9XG4gIGJ1dHRvbiAuZmEge1xuXHRmb250LXNpemU6IDEycHg7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRmbG9hdDpyaWdodDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDFweDtcbiAgfVxuICBidXR0b246aG92ZXIge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICB9XG4gIGJ1dHRvbjphY3RpdmUge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICB9XG4gIC5yZXNlbmR7XG5cdCAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gIH1cbiAgLnJlc2VuZFRleHR7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xuXHRvcGFjaXR5OiAwLjU7XG5cdGNvbG9yOiMwMDY2ZmY7XG4gIH1cbiAgLnJlc2VuZFRleHQ6YWZ0ZXIsIC5yZXNlbmRUZXh0OmJlZm9yZXtcblx0ICBib3gtc2l6aW5nOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service.service */ "./src/services/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, routes) {
        this.loginService = loginService;
        this.routes = routes;
        this.hideSignUp = true;
        this.hideSignIn = false;
    }
    LoginComponent.prototype.haveAccount = function () {
        this.hideSignUp = false;
        this.hideSignIn = true;
    };
    LoginComponent.prototype.dontHaveAccount = function () {
        this.hideSignUp = true;
        this.hideSignIn = false;
    };
    LoginComponent.prototype.browseLimited = function () {
        localStorage.setItem('logStatus', 'false');
    };
    LoginComponent.prototype.signIn = function (uname, p) {
        var output = this.loginService.checkusername(uname, p);
        if (output == true) {
            this.routes.navigate(['/profile']);
            localStorage.setItem('logStatus', 'true');
        }
        else {
            alert("Wrong Credentials");
        }
    };
    LoginComponent.prototype.signUp = function () {
        localStorage.setItem('logStatus', 'createProfile');
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)
                    ])
                ])
            ],
            providers: [_services_login_service_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mobileNavbar{\n    overflow: hidden;\n    background: white;\n    position:fixed;\n    width:100%;\n    display: flex;\n    z-index: 1;\n    /* justify-content:space-between; */\n    align-items: center;\n    box-shadow: 0 4px 2px -1px rgba(0,0,0,.2);\n}\n.desktop{\n  z-index: 1;\n}\n.hideLogo{\n    display: none !important;\n}\n@media all and (min-width: 769px) {\n\t.mobileNav{\n\t\tdisplay: none;\n  }\n}\n@media all and (max-width: 768px) {\n\t.desktop{\n    display: none;\n  }\n}\n.spectra-logo{\n    margin-right:20px;\n}\n.navbar{\n    /* overflow: hidden; */\n    background: white;\n    position:fixed;\n    width:100%;\n    box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);\n}\n.toprow{\n    display: flex;\n    padding-left:20px;\n    padding-right:20px;\n    position: relative;\n    align-items: center;\n    justify-content: space-between;\n}\n.item{\n    font-weight: bold;\n    cursor: pointer;\n}\n.navItems{\n  display: flex;\n  position: relative;\n}\n.navFlex{\n  display: flex;\n  flex-direction: column;\n  font-weight: bold;\n  border-radius: 5px;\n  padding:8px 8px;\n  align-items: center;\n}\n.navIcon{\n  color:#414143;\n  -webkit-transform: translateX(2px);\n          transform: translateX(2px);\n}\n.navItems span{\n  color:#414143;\n}\n.color{\n  background-color: #0066ff;\n}\n.colorJoin{\n  background-color: #FCB332;\n}\n.change span{\n  color:white !important;\n}\n.change i{\n  color:white !important;\n}\na{\n  text-decoration: none;\n}\n/* Toggle Functionality */\n#toggle {\n    display: none;\n  }\n#toggle:checked ~ .toggle-container .button-toggle {\n    box-shadow: 0 0 0 750px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);\n  }\n#toggle:checked ~ .toggle-container .button-toggle:before {\n    -webkit-transform: translateY(-50%) rotate(45deg) scale(1);\n            transform: translateY(-50%) rotate(45deg) scale(1);\n  }\n#toggle:checked ~ .toggle-container .button-toggle:after {\n    -webkit-transform: translateY(-50%) rotate(-45deg) scale(1);\n            transform: translateY(-50%) rotate(-45deg) scale(1);\n  }\n#toggle:checked ~ .nav {\n    margin-bottom: 100px;\n    pointer-events: auto;\n    -webkit-transform: translate(50px, 50px);\n            transform: translate(50px, 50px);\n  }\n#toggle:checked ~ .nav .nav-item {\n    color: #0066ff;\n    letter-spacing: 0;\n    height: 40px;\n    line-height: 40px;\n    margin-top: 0;\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n    transition: 0.5s, opacity 0.1s;\n  }\n#toggle:checked ~ .nav .nav-item:nth-child(1) {\n    transition-delay: 0.15s;\n  }\n#toggle:checked ~ .nav .nav-item:nth-child(1):before {\n    transition-delay: 0.15s;\n  }\n#toggle:checked ~ .nav .nav-item:nth-child(2) {\n    transition-delay: 0.1s;\n  }\n#toggle:checked ~ .nav .nav-item:nth-child(2):before {\n    transition-delay: 0.1s;\n  }\n#toggle:checked ~ .nav .nav-item:nth-child(3) {\n    transition-delay: 0.05s;\n  }\n#toggle:checked ~ .nav .nav-item:nth-child(3):before {\n    transition-delay: 0.05s;\n  }\n#toggle:checked ~ .nav .nav-item:nth-child(4) {\n    transition-delay: 0s;\n  }\n#toggle:checked ~ .nav .nav-item:nth-child(4):before {\n    transition-delay: 0s;\n  }\n#toggle:checked ~ .nav .nav-item:before {\n    opacity: 0;\n  }\n/* Toggle Button */\n.button-toggle {\n    position: absolute;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    margin: 25px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    border-radius: 100%;\n    transition: 0.6s;\n  }\n.button-toggle:hover {\n    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);\n  }\n.button-toggle:before, .button-toggle:after {\n    position: absolute;\n    content: '';\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background-color: #0066ff;\n    border-radius: 5px;\n    transition: 0.5s;\n  }\n.button-toggle:before {\n    -webkit-transform: translateY(-50%) rotate(45deg) scale(0);\n            transform: translateY(-50%) rotate(45deg) scale(0);\n  }\n.button-toggle:after {\n    -webkit-transform: translateY(50%) rotate(-45deg) scale(0);\n            transform: translateY(50%) rotate(-45deg) scale(0);\n  }\n/* Menu */\n.nav {\n    display: inline-block;\n    margin: 15px 15px 10px;\n    pointer-events: none;\n    transition: 0.5s;\n  }\n.nav-item {\n    position: relative;\n    display: inline-block;\n    float: left;\n    clear: both;\n    color: transparent;\n    font-size: 14px;\n    cursor: pointer;\n    letter-spacing: -6.2px;\n    height: 7px;\n    line-height: 7px;\n    text-transform: uppercase;\n    white-space: nowrap;\n    -webkit-transform: scaleY(0.2);\n            transform: scaleY(0.2);\n    transition: 0.5s, opacity 1s;\n  }\n.nav-item.activated:after{\n    content: '';\n    position: absolute;\n    top: -5px;\n    left: -65px;\n    bottom: -5px;\n    border: #0066ff 3px solid;\n  }\n.nav-item:nth-child(1) {\n    transition-delay: 0s;\n  }\n.nav-item:nth-child(1):before {\n    transition-delay: 0s;\n  }\n.nav-item:nth-child(2) {\n    transition-delay: 0.05s;\n  }\n.nav-item:nth-child(2):before {\n    transition-delay: 0.05s;\n  }\n.nav-item:nth-child(3) {\n    transition-delay: 0.1s;\n  }\n.nav-item:nth-child(3):before {\n    transition-delay: 0.1s;\n  }\n.nav-item:nth-child(4) {\n    transition-delay: 0.15s;\n  }\n.nav-item:nth-child(4):before {\n    transition-delay: 0.15s;\n  }\n.nav-item:nth-child(1) {\n    letter-spacing: -10px;\n  }\n.nav-item:nth-child(2) {\n    letter-spacing: -10px;\n  }\n.nav-item:nth-child(3) {\n    letter-spacing: -10px;\n  }\n.nav-item:nth-child(n + 4) {\n    letter-spacing: -8px;\n    margin-top: -7px;\n    opacity: 0;\n  }\n.nav-item:before {\n    position: absolute;\n    content: '';\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background-color: #0066ff;\n    -webkit-transform: translateY(-50%) scaleY(5);\n            transform: translateY(-50%) scaleY(5);\n    transition: 0.5s;\n  }\n#profileAvatar{\n    border-radius: 50%;\n    border-width: 4px;\n    padding: 3px;\n    background-image: linear-gradient(-90deg, #29DB45 50%, rgba(0, 0, 0, 0) 50%),\n                      linear-gradient(0deg, #29DB45 100%, rgba(0, 0, 0, 0) 50%);\n  }\n.disabled{\n    pointer-events: none;\n    cursor: default;\n  }\n.disabledIcon{\n    pointer-events: none;\n    cursor: default;\n    opacity: 0.4;\n  }\n.dropHeader{\n    color:#0066ff !important;\n    letter-spacing: 2px;\n    font-size:12px !important;\n  }\n.itemProfile{\n    color:#414143 !important;\n    font-weight: bold !important;\n  }\n.notificationHeader{\n    color:#0066ff !important;\n    letter-spacing: 2px;\n    font-size:12px !important;\n  }\n.importantText{\n    color: #FCB332 !important; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7Q0FDQztFQUNDLGFBQWE7RUFDYjtBQUNGO0FBQ0E7Q0FDQztJQUNHLGFBQWE7RUFDZjtBQUNGO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBR0UseUJBQXlCO0FBQ3pCO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSwrRUFBK0U7RUFDakY7QUFDQTtJQUNFLDBEQUFrRDtZQUFsRCxrREFBa0Q7RUFDcEQ7QUFDQTtJQUNFLDJEQUFtRDtZQUFuRCxtREFBbUQ7RUFDckQ7QUFDQTtJQUNFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsd0NBQWdDO1lBQWhDLGdDQUFnQztFQUNsQztBQUNBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixVQUFVO0lBQ1YsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQiw4QkFBOEI7RUFDaEM7QUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDQSxrQkFBa0I7QUFDbEI7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLDZFQUE2RTtFQUMvRTtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLDBEQUFrRDtZQUFsRCxrREFBa0Q7RUFDcEQ7QUFDQTtJQUNFLDBEQUFrRDtZQUFsRCxrREFBa0Q7RUFDcEQ7QUFFQSxTQUFTO0FBQ1Q7SUFDRSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsNEJBQTRCO0VBQzlCO0FBRUM7SUFDQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7QUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxnQkFBZ0I7RUFDbEI7QUFDQTtJQUtFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaOytFQUMyRTtFQUM3RTtBQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7RUFDakI7QUFDQTtJQUNFLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLDRCQUE0QjtFQUM5QjtBQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2JpbGVOYXZiYXJ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgei1pbmRleDogMTtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMXB4IHJnYmEoMCwwLDAsLjIpO1xufVxuLmRlc2t0b3B7XG4gIHotaW5kZXg6IDE7XG59XG4uaGlkZUxvZ297XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcblx0Lm1vYmlsZU5hdntcblx0XHRkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuZGVza3RvcHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5zcGVjdHJhLWxvZ297XG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG59XG4ubmF2YmFye1xuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCByZ2JhKDAsMCwwLC4yKTtcbn1cbi50b3Byb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaXRlbXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2SXRlbXN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdkZsZXh7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6OHB4IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXZJY29ue1xuICBjb2xvcjojNDE0MTQzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcbn1cbi5uYXZJdGVtcyBzcGFue1xuICBjb2xvcjojNDE0MTQzO1xufSBcbi5jb2xvcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcbn1cbi5jb2xvckpvaW57XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0IzMzI7XG59XG4uY2hhbmdlIHNwYW57XG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XG59XG4uY2hhbmdlIGl7XG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XG59XG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiAgXG4gIC8qIFRvZ2dsZSBGdW5jdGlvbmFsaXR5ICovXG4gICN0b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gICN0b2dnbGU6Y2hlY2tlZCB+IC50b2dnbGUtY29udGFpbmVyIC5idXR0b24tdG9nZ2xlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCA3NTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gICN0b2dnbGU6Y2hlY2tlZCB+IC50b2dnbGUtY29udGFpbmVyIC5idXR0b24tdG9nZ2xlOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XG4gIH1cbiAgI3RvZ2dsZTpjaGVja2VkIH4gLnRvZ2dsZS1jb250YWluZXIgLmJ1dHRvbi10b2dnbGU6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgfVxuICAjdG9nZ2xlOmNoZWNrZWQgfiAubmF2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCA1MHB4KTtcbiAgfVxuICAjdG9nZ2xlOmNoZWNrZWQgfiAubmF2IC5uYXYtaXRlbSB7XG4gICAgY29sb3I6ICMwMDY2ZmY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzLCBvcGFjaXR5IDAuMXM7XG4gIH1cbiAgI3RvZ2dsZTpjaGVja2VkIH4gLm5hdiAubmF2LWl0ZW06bnRoLWNoaWxkKDEpIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgfVxuICAjdG9nZ2xlOmNoZWNrZWQgfiAubmF2IC5uYXYtaXRlbTpudGgtY2hpbGQoMSk6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgfVxuICAjdG9nZ2xlOmNoZWNrZWQgfiAubmF2IC5uYXYtaXRlbTpudGgtY2hpbGQoMikge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gIH1cbiAgI3RvZ2dsZTpjaGVja2VkIH4gLm5hdiAubmF2LWl0ZW06bnRoLWNoaWxkKDIpOmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgfVxuICAjdG9nZ2xlOmNoZWNrZWQgfiAubmF2IC5uYXYtaXRlbTpudGgtY2hpbGQoMykge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICB9XG4gICN0b2dnbGU6Y2hlY2tlZCB+IC5uYXYgLm5hdi1pdGVtOm50aC1jaGlsZCgzKTpiZWZvcmUge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICB9XG4gICN0b2dnbGU6Y2hlY2tlZCB+IC5uYXYgLm5hdi1pdGVtOm50aC1jaGlsZCg0KSB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIH1cbiAgI3RvZ2dsZTpjaGVja2VkIH4gLm5hdiAubmF2LWl0ZW06bnRoLWNoaWxkKDQpOmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIH1cbiAgI3RvZ2dsZTpjaGVja2VkIH4gLm5hdiAubmF2LWl0ZW06YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC8qIFRvZ2dsZSBCdXR0b24gKi9cbiAgLmJ1dHRvbi10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogMC42cztcbiAgfVxuICAuYnV0dG9uLXRvZ2dsZTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgLmJ1dHRvbi10b2dnbGU6YmVmb3JlLCAuYnV0dG9uLXRvZ2dsZTphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuICAuYnV0dG9uLXRvZ2dsZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpIHNjYWxlKDApO1xuICB9XG4gIC5idXR0b24tdG9nZ2xlOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKTtcbiAgfVxuICBcbiAgLyogTWVudSAqL1xuICAubmF2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMTBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIFxuICAubmF2LWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC02LjJweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBsaW5lLWhlaWdodDogN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjIpO1xuICAgIHRyYW5zaXRpb246IDAuNXMsIG9wYWNpdHkgMXM7XG4gIH1cbiAgXG4gICAubmF2LWl0ZW0uYWN0aXZhdGVkOmFmdGVye1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01cHg7XG4gICAgbGVmdDogLTY1cHg7XG4gICAgYm90dG9tOiAtNXB4O1xuICAgIGJvcmRlcjogIzAwNjZmZiAzcHggc29saWQ7XG4gIH1cbiAgLm5hdi1pdGVtOm50aC1jaGlsZCgxKSB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIH1cbiAgLm5hdi1pdGVtOm50aC1jaGlsZCgxKTpiZWZvcmUge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICB9XG4gIC5uYXYtaXRlbTpudGgtY2hpbGQoMikge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICB9XG4gIC5uYXYtaXRlbTpudGgtY2hpbGQoMik6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbiAgfVxuICAubmF2LWl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICB9XG4gIC5uYXYtaXRlbTpudGgtY2hpbGQoMyk6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICB9XG4gIC5uYXYtaXRlbTpudGgtY2hpbGQoNCkge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICB9XG4gIC5uYXYtaXRlbTpudGgtY2hpbGQoNCk6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgfVxuICAubmF2LWl0ZW06bnRoLWNoaWxkKDEpIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLTEwcHg7XG4gIH1cbiAgLm5hdi1pdGVtOm50aC1jaGlsZCgyKSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xMHB4O1xuICB9XG4gIC5uYXYtaXRlbTpudGgtY2hpbGQoMykge1xuICAgIGxldHRlci1zcGFjaW5nOiAtMTBweDtcbiAgfVxuICAubmF2LWl0ZW06bnRoLWNoaWxkKG4gKyA0KSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC04cHg7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5uYXYtaXRlbTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiAnJztcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlWSg1KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gICNwcm9maWxlQXZhdGFye1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItd2lkdGg6IDRweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgIzI5REI0NSA1MCUsIHJnYmEoMCwgMCwgMCwgMCkgNTAlKSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzI5REI0NSAxMDAlLCByZ2JhKDAsIDAsIDAsIDApIDUwJSk7XG4gIH1cbiAgLmRpc2FibGVke1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICAuZGlzYWJsZWRJY29ue1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgLmRyb3BIZWFkZXJ7XG4gICAgY29sb3I6IzAwNjZmZiAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcbiAgfVxuICAuaXRlbVByb2ZpbGV7XG4gICAgY29sb3I6IzQxNDE0MyAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5vdGlmaWNhdGlvbkhlYWRlcntcbiAgICBjb2xvcjojMDA2NmZmICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXNpemU6MTJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5pbXBvcnRhbnRUZXh0e1xuICAgIGNvbG9yOiAjRkNCMzMyICFpbXBvcnRhbnQ7IFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.navViewOnly = true;
        this.initialAvatar = true;
        this.createProfile = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('logStatus') == 'createProfile') {
            this.navViewOnly = true;
            this.createProfile = false;
            this.initialAvatar = false;
        }
        else if (localStorage.getItem('logStatus') == 'false') {
            this.navViewOnly = false;
            this.initialAvatar = false;
        }
        else {
            this.navViewOnly = true;
            this.initialAvatar = true;
            this.createProfile = false;
        }
        var avatar = this.initialAvatar;
        $('#toggle').click(function (e) {
            if (e.currentTarget.checked && avatar) {
                $('.nav').prepend('<a id="avatarMenu" href="" style="display:flex;align-items:center; color:black;"><img class="ui avatar image" src="assets/man.svg">John</a>');
            }
            if (!e.currentTarget.checked) {
                $('#avatarMenu').remove();
            }
            if ($('.spectra-logo-mobile').hasClass("hideLogo")) {
                $('.spectra-logo-mobile').removeClass("hideLogo");
                return;
            }
            $('.spectra-logo-mobile').addClass("hideLogo");
            $('.mobileNavbar').css('z-index', 2);
        });
        $('.ui.dropdown')
            .dropdown();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    box-sizing: border-box;\n  }\n  \n  body {\n    padding: 0;\n    margin: 0;\n  }\n  \n  #notfound {\n    position: relative;\n    height: 100vh;\n  }\n  \n  #notfound .notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  \n  .notfound {\n    max-width: 520px;\n    width: 100%;\n    line-height: 1.4;\n    text-align: center;\n  }\n  \n  .notfound .notfound-404 {\n    position: relative;\n    height: 240px;\n  }\n  \n  .notfound .notfound-404 h1 {\n    font-family: 'Montserrat', sans-serif;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    font-size: 252px;\n    font-weight: 900;\n    margin: 0px;\n    color: #262626;\n    text-transform: uppercase;\n    letter-spacing: -40px;\n    margin-left: -20px;\n  }\n  \n  .notfound .notfound-404 h1>span {\n    text-shadow: -8px 0px 0px #fff;\n  }\n  \n  .notfound .notfound-404 h3 {\n    font-family: 'Cabin', sans-serif;\n    position: relative;\n    font-size: 16px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #262626;\n    margin: 0px;\n    letter-spacing: 3px;\n    padding-left: 6px;\n  }\n  \n  .notfound h2 {\n    font-family: 'Cabin', sans-serif;\n    font-size: 20px;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: #000;\n    margin-top: 0px;\n    margin-bottom: 25px;\n  }\n  \n  @media only screen and (max-width: 767px) {\n    .notfound .notfound-404 {\n      height: 200px;\n    }\n    .notfound .notfound-404 h1 {\n      font-size: 200px;\n    }\n  }\n  \n  @media only screen and (max-width: 480px) {\n    .notfound .notfound-404 {\n      height: 162px;\n    }\n    .notfound .notfound-404 h1 {\n      font-size: 162px;\n      height: 150px;\n      line-height: 162px;\n    }\n    .notfound h2 {\n      font-size: 16px;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBRVksc0JBQXNCO0VBQ2hDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUix3Q0FBd0M7WUFFaEMsZ0NBQWdDO0VBQzFDOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUix3Q0FBd0M7WUFFaEMsZ0NBQWdDO0lBQ3hDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixhQUFhO01BQ2Isa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlbm90Zm91bmQvcGFnZW5vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI25vdGZvdW5kIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgI25vdGZvdW5kIC5ub3Rmb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLm5vdGZvdW5kIHtcbiAgICBtYXgtd2lkdGg6IDUyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjQwcHg7XG4gIH1cbiAgXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgZm9udC1zaXplOiAyNTJweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC00MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgfVxuICBcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDE+c3BhbiB7XG4gICAgdGV4dC1zaGFkb3c6IC04cHggMHB4IDBweCAjZmZmO1xuICB9XG4gIFxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdDYWJpbicsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMyNjI2MjY7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgfVxuICBcbiAgLm5vdGZvdW5kIGgyIHtcbiAgICBmb250LWZhbWlseTogJ0NhYmluJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gICAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xuICAgICAgZm9udC1zaXplOiAyMDBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gICAgICBoZWlnaHQ6IDE2MnB4O1xuICAgIH1cbiAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgICBmb250LXNpemU6IDE2MnB4O1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNjJweDtcbiAgICB9XG4gICAgLm5vdGZvdW5kIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pagenotfound',
            template: __webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/passbook/passbook.component.css":
/*!*************************************************!*\
  !*** ./src/app/passbook/passbook.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padTop{\n    padding-top: 80px;\n}\n@media all and (min-width: 769px) {\n\t.padTop{\n\t\tdisplay: none;\n  }\n}\n.sectionHeader{\n    border-radius: 0px 15px 15px 0px;\n    background-color: #0066FF;\n    color:white;\n    display: inline-block;\n    margin-top:15px;\n    padding: 5px 10px 5px 15px ;\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc2Jvb2svcGFzc2Jvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0M7RUFDQyxhQUFhO0VBQ2I7QUFDRjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFzc2Jvb2svcGFzc2Jvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRUb3B7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuXHQucGFkVG9we1xuXHRcdGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5zZWN0aW9uSGVhZGVye1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2RkY7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTVweCA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/passbook/passbook.component.ts":
/*!************************************************!*\
  !*** ./src/app/passbook/passbook.component.ts ***!
  \************************************************/
/*! exports provided: PassbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassbookComponent", function() { return PassbookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PassbookComponent = /** @class */ (function () {
    function PassbookComponent() {
    }
    PassbookComponent.prototype.ngOnInit = function () {
    };
    PassbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-passbook',
            template: __webpack_require__(/*! raw-loader!./passbook.component.html */ "./node_modules/raw-loader/index.js!./src/app/passbook/passbook.component.html"),
            styles: [__webpack_require__(/*! ./passbook.component.css */ "./src/app/passbook/passbook.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PassbookComponent);
    return PassbookComponent;
}());



/***/ }),

/***/ "./src/app/profile/emi-date/emi-date.component.css":
/*!*********************************************************!*\
  !*** ./src/app/profile/emi-date/emi-date.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateContainer{\n    background-color: white; \n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n@media all and (max-width: 459px) {\n    .dateContainer{\n        margin: 20px;\n    }\n}\n@media all and  (min-width:460px) and (max-width: 768px) {\n    .dateContainer{\n        margin: 20px 15%;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9lbWktZGF0ZS9lbWktZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDJDQUEyQztBQUMvQztBQUNBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2VtaS1kYXRlL2VtaS1kYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1OXB4KSB7XG4gICAgLmRhdGVDb250YWluZXJ7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICB9XG59XG5AbWVkaWEgYWxsIGFuZCAgKG1pbi13aWR0aDo0NjBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmRhdGVDb250YWluZXJ7XG4gICAgICAgIG1hcmdpbjogMjBweCAxNSU7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/profile/emi-date/emi-date.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/emi-date/emi-date.component.ts ***!
  \********************************************************/
/*! exports provided: EmiDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmiDateComponent", function() { return EmiDateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmiDateComponent = /** @class */ (function () {
    function EmiDateComponent() {
        this.now = Date.now();
        this.days = 24 * 60 * 60 * 1000;
        this.options = {
            format12h: true,
            enabledDateRanges: [
                { start: new Date(this.now - 10 * this.days), end: new Date(this.now - 9 * this.days) }
            ]
        };
        this.date = new Date;
    }
    EmiDateComponent.prototype.dateChanged = function () {
        console.log(this.date);
    };
    EmiDateComponent.prototype.ngOnInit = function () {
    };
    EmiDateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'emi-date',
            template: __webpack_require__(/*! raw-loader!./emi-date.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/emi-date/emi-date.component.html"),
            styles: [__webpack_require__(/*! ./emi-date.component.css */ "./src/app/profile/emi-date/emi-date.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmiDateComponent);
    return EmiDateComponent;
}());



/***/ }),

/***/ "./src/app/profile/emi-detail/emi-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/profile/emi-detail/emi-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media all and (min-width: 769px) {\n\t.container, .EMIHeader{\n\t\tdisplay: none;\n  }\n}\n@media all and (max-width: 768px) {\n\t.dContainer{\n\t\tdisplay: none;\n\t}\n}\n.dContainer{\n\tfont-size:12px;\n\tmargin-top:20px;\n\tcolor:white;\n\t\n}\n.gridContainer{\n\tdisplay: grid;\n\tbackground-color: #414143;\n\tpadding:10px 0 10px 15px;\n    letter-spacing: 0.7px;\n    font-weight: bold;\n    grid-template-columns: auto auto;\n}\n.container {\n\tbackground-color: #fff;\n    box-shadow: inset 0px 0px 0px 2px rgba(234,234,234,1);\n\tposition: relative;\n    overflow: hidden;\n    margin: 15px auto;\n    border-radius: 4px;\n\twidth: 90%;\n\tmax-width: 90%;\n\tmargin-top:20px !important;\n\theight:auto;\n\tmin-height: 80px;\n}\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\theight: 100%;\n}\n.EMIHeader{\n\tcolor:#0066FF;\n\tfont-weight: bold;\n\tmargin-left:5%;\n    margin-top:15px;\n}\n@media all and  (min-width:460px) and (max-width: 768px) {\n    .EMIHeader{\n\t\tmargin-left:15%;\n\t}\n\t.container{\n\t\twidth: 70%;\n\t\tmax-width: 70%;\n\t}\n}\n.detailedInfo {\n\tright: 0;\n\twidth: 65%;\n\tcolor: #0066FF;\n}\n.fields {\n\tleft: 0;\n\twidth: 35%;\n\tcolor:white;\n\tbackground:#0066FF;\n}\n.list{\n\tlist-style-type: none;\n\tfont-size: 12px;\n\tfont-weight: bold;\n\tpadding-left: 10px !important;\n}\n.alignRs{\n\t-webkit-transform: translateY(3px);\n\t        transform: translateY(3px);\n}\n.selectedDate{\n\tbackground-color: #FCB332;\n\tcolor:#414143;\n\tdisplay: block;\n\tpadding:5px 0 5px 15px;\n\tfont-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9lbWktZGV0YWlsL2VtaS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDO0VBQ0MsYUFBYTtFQUNiO0FBQ0Y7QUFDQTtDQUNDO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsV0FBVzs7QUFFWjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6Qix3QkFBd0I7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7QUFDcEM7QUFDQTtDQUNDLHNCQUFzQjtJQUNuQixxREFBcUQ7Q0FDeEQsa0JBQWtCO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckIsVUFBVTtDQUNWLGNBQWM7Q0FDZCwwQkFBMEI7Q0FDMUIsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixZQUFZO0FBQ2I7QUFFQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsY0FBYztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJO0VBQ0YsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsVUFBVTtFQUNWLGNBQWM7Q0FDZjtBQUNEO0FBRUE7Q0FDQyxRQUFRO0NBQ1IsVUFBVTtDQUNWLGNBQWM7QUFDZjtBQUdBO0NBQ0MsT0FBTztDQUNQLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQiw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLGtDQUEwQjtTQUExQiwwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixpQkFBaUI7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2VtaS1kZXRhaWwvZW1pLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcblx0LmNvbnRhaW5lciwgLkVNSUhlYWRlcntcblx0XHRkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuZENvbnRhaW5lcntcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG4uZENvbnRhaW5lcntcblx0Zm9udC1zaXplOjEycHg7XG5cdG1hcmdpbi10b3A6MjBweDtcblx0Y29sb3I6d2hpdGU7XG5cdFxufVxuLmdyaWRDb250YWluZXJ7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDM7XG5cdHBhZGRpbmc6MTBweCAwIDEwcHggMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG59XG4uY29udGFpbmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggcmdiYSgyMzQsMjM0LDIzNCwxKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXHR3aWR0aDogOTAlO1xuXHRtYXgtd2lkdGg6IDkwJTtcblx0bWFyZ2luLXRvcDoyMHB4ICFpbXBvcnRhbnQ7XG5cdGhlaWdodDphdXRvO1xuXHRtaW4taGVpZ2h0OiA4MHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4uRU1JSGVhZGVye1xuXHRjb2xvcjojMDA2NkZGO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLWxlZnQ6NSU7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xufVxuQG1lZGlhIGFsbCBhbmQgIChtaW4td2lkdGg6NDYwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5FTUlIZWFkZXJ7XG5cdFx0bWFyZ2luLWxlZnQ6MTUlO1xuXHR9XG5cdC5jb250YWluZXJ7XG5cdFx0d2lkdGg6IDcwJTtcblx0XHRtYXgtd2lkdGg6IDcwJTtcblx0fVxufVxuXG4uZGV0YWlsZWRJbmZvIHtcblx0cmlnaHQ6IDA7XG5cdHdpZHRoOiA2NSU7XG5cdGNvbG9yOiAjMDA2NkZGO1xufVxuXG5cbi5maWVsZHMge1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMzUlO1xuXHRjb2xvcjp3aGl0ZTtcblx0YmFja2dyb3VuZDojMDA2NkZGO1xufVxuLmxpc3R7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0cGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uYWxpZ25Sc3tcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59XG4uc2VsZWN0ZWREYXRle1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkNCMzMyO1xuXHRjb2xvcjojNDE0MTQzO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzo1cHggMCA1cHggMTVweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/profile/emi-detail/emi-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/emi-detail/emi-detail.component.ts ***!
  \************************************************************/
/*! exports provided: EmiDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmiDetailComponent", function() { return EmiDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmiDetailComponent = /** @class */ (function () {
    function EmiDetailComponent() {
    }
    EmiDetailComponent.prototype.ngOnInit = function () {
    };
    EmiDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'emi-detail',
            template: __webpack_require__(/*! raw-loader!./emi-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/emi-detail/emi-detail.component.html"),
            styles: [__webpack_require__(/*! ./emi-detail.component.css */ "./src/app/profile/emi-detail/emi-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmiDetailComponent);
    return EmiDetailComponent;
}());



/***/ }),

/***/ "./src/app/profile/plot-info-container/plot-info-container.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/profile/plot-info-container/plot-info-container.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media all and (min-width: 769px) {\n\t.container{\n\t\tdisplay: none;\n  }\n}\n@media all and (max-width: 768px) {\n\t.dContainer{\n\t\tdisplay: none;\n  }\n}\n.dContainer{\n\t/* margin-top:40px; */\n\twidth: 100%;\n}\n.container {\n\tbackground-color: #FAFAFA;\n\tborder-radius: 5px;\n\tbox-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), \n\t\t\t\t0px 3px 4px rgba(0, 0, 0, 0.12), \n\t\t\t\t0px 1px 5px rgba(0, 0, 0, 0.2);\n\tposition: relative;\n    overflow: hidden;\n    margin: 15px auto;\n\twidth: 90%;\n\tmax-width: 90%;\n\tmin-height: 92.88px;\n}\n@media all and  (min-width:460px) and (max-width: 768px) {\n\t.container{\n\t\twidth: 70%;\n\t\tmax-width: 70%;\n\t}\n}\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\theight: 100%;\n}\n.projectInfo {\n    right: 0;\n\twidth: 65%;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-left: 15px;\n}\n.positionNav{\n\tfloat:right;\n\tmargin-right: 15px;\n\tmargin-top:-5px;\n}\n.fields {\n\tleft: 0;\n\twidth: 35%;\n\t\n}\n.fields img{\n\n  width: 100%;\n  height: 100%;\n  /* height: 50px; */\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.plotContainer{\n\tdisplay: flex;\n\t/* overflow: hidden; */\n\tjustify-content: space-between;\n}\n.plotOwned{\n\tmargin-top:10px;\n\tmargin-left:10px;\n}\n.plotNumber{\n\tfont-size: 10px;\n\ttext-transform: uppercase;\n\tmargin-bottom:5px;\n\tletter-spacing: 1px;\n\tdisplay: block;\n}\n.projectName{\n\tfont-size: 18px;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tmargin-bottom:5px;\n\tletter-spacing: 0.8px;\n\tdisplay: block;\n}\n.emiAmount{\n\tfont-size: 14px;\n\ttext-transform: uppercase;\n\t\n\tletter-spacing: 1px;\n\tdisplay: block;\n\topacity: 0.6;\n}\n.plotContainer img{\n\twidth: auto;\n\theight: 80px;\n\tmargin-top:10px;\n\tborder-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wbG90LWluZm8tY29udGFpbmVyL3Bsb3QtaW5mby1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDO0VBQ0MsYUFBYTtFQUNiO0FBQ0Y7QUFDQTtDQUNDO0VBQ0MsYUFBYTtFQUNiO0FBQ0Y7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixXQUFXO0FBQ1o7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEI7O2tDQUVpQztDQUNqQyxrQkFBa0I7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCLFVBQVU7Q0FDVixjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQztFQUNDLFVBQVU7RUFDVixjQUFjO0NBQ2Y7QUFDRDtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixZQUFZO0FBQ2I7QUFFQTtJQUNJLFFBQVE7Q0FDWCxVQUFVO0NBQ1YsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsT0FBTztDQUNQLFVBQVU7O0FBRVg7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3QjtBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsY0FBYztBQUNmO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YseUJBQXlCOztDQUV6QixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLFlBQVk7QUFDYjtBQUNBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wbG90LWluZm8tY29udGFpbmVyL3Bsb3QtaW5mby1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG5cdC5jb250YWluZXJ7XG5cdFx0ZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LmRDb250YWluZXJ7XG5cdFx0ZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmRDb250YWluZXJ7XG5cdC8qIG1hcmdpbi10b3A6NDBweDsgKi9cblx0d2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCBcblx0XHRcdFx0MHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgXG5cdFx0XHRcdDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG5cdHdpZHRoOiA5MCU7XG5cdG1heC13aWR0aDogOTAlO1xuXHRtaW4taGVpZ2h0OiA5Mi44OHB4O1xufVxuQG1lZGlhIGFsbCBhbmQgIChtaW4td2lkdGg6NDYwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuY29udGFpbmVye1xuXHRcdHdpZHRoOiA3MCU7XG5cdFx0bWF4LXdpZHRoOiA3MCU7XG5cdH1cbn1cbi5mb3JtLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9qZWN0SW5mbyB7XG4gICAgcmlnaHQ6IDA7XG5cdHdpZHRoOiA2NSU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5wb3NpdGlvbk5hdntcblx0ZmxvYXQ6cmlnaHQ7XG5cdG1hcmdpbi1yaWdodDogMTVweDtcblx0bWFyZ2luLXRvcDotNXB4O1xufVxuXG4uZmllbGRzIHtcblx0bGVmdDogMDtcblx0d2lkdGg6IDM1JTtcblx0XG59XG4uZmllbGRzIGltZ3tcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBoZWlnaHQ6IDUwcHg7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnBsb3RDb250YWluZXJ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wbG90T3duZWR7XG5cdG1hcmdpbi10b3A6MTBweDtcblx0bWFyZ2luLWxlZnQ6MTBweDtcbn1cbi5wbG90TnVtYmVye1xuXHRmb250LXNpemU6IDEwcHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdG1hcmdpbi1ib3R0b206NXB4O1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbi5wcm9qZWN0TmFtZXtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLWJvdHRvbTo1cHg7XG5cdGxldHRlci1zcGFjaW5nOiAwLjhweDtcblx0ZGlzcGxheTogYmxvY2s7XG59XG4uZW1pQW1vdW50e1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRkaXNwbGF5OiBibG9jaztcblx0b3BhY2l0eTogMC42O1xufVxuLnBsb3RDb250YWluZXIgaW1ne1xuXHR3aWR0aDogYXV0bztcblx0aGVpZ2h0OiA4MHB4O1xuXHRtYXJnaW4tdG9wOjEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/plot-info-container/plot-info-container.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/profile/plot-info-container/plot-info-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: PlotInfoContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotInfoContainerComponent", function() { return PlotInfoContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlotInfoContainerComponent = /** @class */ (function () {
    function PlotInfoContainerComponent() {
    }
    PlotInfoContainerComponent.prototype.ngOnInit = function () {
    };
    PlotInfoContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'plot-info-container',
            template: __webpack_require__(/*! raw-loader!./plot-info-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/plot-info-container/plot-info-container.component.html"),
            styles: [__webpack_require__(/*! ./plot-info-container.component.css */ "./src/app/profile/plot-info-container/plot-info-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlotInfoContainerComponent);
    return PlotInfoContainerComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padTop{\n    padding-top: 80px;\n}\n\n.dPadTop{\n    padding: 80px 3% 50px 3%;\n    display:grid;\n    grid-gap: 3%;\n    grid-template-columns: 25% 44% 25% ;\n \n}\n\n.emiContainer1{\n    margin-top:40px;\n}\n\n@media all and  (min-width:769px) and (max-width: 1024px) {\n\t\n    .dPadTop{\n        grid-gap: 3%;\n        grid-template-columns: 35% 62%;\n    \n    }\n    .emiContainer2{\n        display: none;\n    }\n}\n\n@media all and (min-width: 769px) {\n\t.padTop{\n\t\tdisplay: none;\n  }\n}\n\n@media all and (min-width: 1025px) {\n\t.emiContainer1{\n\t\tdisplay: none;\n  }\n}\n\n@media all and (max-width: 768px) {\n\t.dPadTop{\n\t\tdisplay: none;\n  }\n}\n\n.heading{\n    font-size:18px;\n    margin-left:14.5px;\n    text-transform: uppercase;\n    color:#0066FF;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n    line-height: 21px;\n}\n\n.avatar{\n    margin-left:14.5px;\n    margin-top:10px;\n}\n\n.avatar img{\n    border-radius: 50%;\n    border-width: 4px;\n    padding: 4px;\n    background-image: linear-gradient(-90deg, #FCB332 50%, rgba(0, 0, 0, 0) 50%),\n                      linear-gradient(0deg, #FCB332 50%, rgba(0, 0, 0, 0) 50%);\n}\n\n.profilePic{\n    position: absolute;\n    left: 50%;\n    top:10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    border-radius: 50%;\n    border-width: 4px;\n    padding: 4px;\n    background-image: linear-gradient(-90deg, white 50%, rgba(0, 0, 0, 0) 50%),\n                      linear-gradient(0deg, white 100%, rgba(0, 0, 0, 0) 50%);\n}\n\n.profileName{\n    font-weight: bold;\n    font-size: 13px;\n    color: #0066FF;\n    margin-left:14.5px;\n    margin-top:10px;\n}\n\n.sectionHeader{\n    border-radius: 0px 15px 15px 0px;\n    background-color: #0066FF;\n    color:white;\n    display: inline-block;\n    margin-top:15px;\n    padding: 5px 10px 5px 15px ;\n\n}\n\n.notificationHeader{\n    border-radius: 15px 0px 0px 15px;\n    background-color: #FCB332;\n    color:white;\n    height: 29px;\n    float:right;\n    position: relative;\n    padding: 5px 10px 5px 15px ;\n}\n\n.gridContainer{\n    display: grid;\n    letter-spacing: 0.7px;\n    font-weight: bold;\n    font-size:12px;\n    grid-template-columns: auto auto;\n}\n\n.info{\n    text-align: right;\n    margin-right:10px;\n}\n\n.label-info{\n    margin-left:10px;\n    margin-bottom:4px;\n}\n\n.header{\n    width: 100%;\n    margin-top:40px;\n\tcolor:white;\n\tbackground-color: #0066ff;\n\tpadding:10px 0 10px 5px;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n}\n\n.emiHeader{\n    width: 100%;\n\tcolor:white;\n\tbackground-color: #0066ff;\n\tpadding:10px 0 10px 5px;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n}\n\n.plotHeader{\n    width: 100%;\n\tcolor:white;\n\tbackground-color: #0066ff;\n\tpadding:10px 0 10px 5px;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQ0FBbUM7O0FBRXZDOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTs7SUFFSTtRQUNJLFlBQVk7UUFDWiw4QkFBOEI7O0lBRWxDO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBQ0E7Q0FDQztFQUNDLGFBQWE7RUFDYjtBQUNGOztBQUNBO0NBQ0M7RUFDQyxhQUFhO0VBQ2I7QUFDRjs7QUFDQTtDQUNDO0VBQ0MsYUFBYTtFQUNiO0FBQ0Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUtJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaOzhFQUMwRTtBQUM5RTs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFLM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1o7NkVBQ3lFO0FBQzdFOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDJCQUEyQjs7QUFFL0I7O0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtDQUNsQixXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7Q0FDZCxXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7Q0FDZCxXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZFRvcHtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbn1cblxuLmRQYWRUb3B7XG4gICAgcGFkZGluZzogODBweCAzJSA1MHB4IDMlO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLWdhcDogMyU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNDQlIDI1JSA7XG4gXG59XG4uZW1pQ29udGFpbmVyMXtcbiAgICBtYXJnaW4tdG9wOjQwcHg7XG59XG5AbWVkaWEgYWxsIGFuZCAgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXHRcbiAgICAuZFBhZFRvcHtcbiAgICAgICAgZ3JpZC1nYXA6IDMlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1JSA2MiU7XG4gICAgXG4gICAgfVxuICAgIC5lbWlDb250YWluZXIye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG5cdC5wYWRUb3B7XG5cdFx0ZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG5cdC5lbWlDb250YWluZXIxe1xuXHRcdGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5kUGFkVG9we1xuXHRcdGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmhlYWRpbmd7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6MTQuNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IzAwNjZGRjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG4uYXZhdGFye1xuICAgIG1hcmdpbi1sZWZ0OjE0LjVweDtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG59XG4uYXZhdGFyIGltZ3tcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNGQ0IzMzIgNTAlLCByZ2JhKDAsIDAsIDAsIDApIDUwJSksXG4gICAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDBkZWcsICNGQ0IzMzIgNTAlLCByZ2JhKDAsIDAsIDAsIDApIDUwJSk7XG59XG4ucHJvZmlsZVBpY3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDoxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItd2lkdGg6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgd2hpdGUgNTAlLCByZ2JhKDAsIDAsIDAsIDApIDUwJSksXG4gICAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDBkZWcsIHdoaXRlIDEwMCUsIHJnYmEoMCwgMCwgMCwgMCkgNTAlKTtcbn1cbi5wcm9maWxlTmFtZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMwMDY2RkY7XG4gICAgbWFyZ2luLWxlZnQ6MTQuNXB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuXG4uc2VjdGlvbkhlYWRlcntcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NkZGO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDE1cHggO1xuXG59XG4ubm90aWZpY2F0aW9uSGVhZGVye1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0IzMzI7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTVweCA7XG59XG4uZ3JpZENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbn1cbi5pbmZve1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xufVxuLmxhYmVsLWluZm97XG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICBtYXJnaW4tYm90dG9tOjRweDtcbn1cbi5oZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDo0MHB4O1xuXHRjb2xvcjp3aGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcblx0cGFkZGluZzoxMHB4IDAgMTBweCA1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmVtaUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcblx0Y29sb3I6d2hpdGU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmY7XG5cdHBhZGRpbmc6MTBweCAwIDEwcHggNXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5wbG90SGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuXHRjb2xvcjp3aGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcblx0cGFkZGluZzoxMHB4IDAgMTBweCA1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.notification = false;
    }
    ProfileComponent.prototype.updateProfileCompleteAvatar = function () {
        $('#profileAvatar').css("background-image", "linear-gradient(-90deg, #0066ff 50%, rgba(0, 0, 0, 0) 50%),linear-gradient(0deg, #0066ff 50%, rgba(0, 0, 0, 0) 50%)");
    };
    ProfileComponent.prototype.hideNotification = function (e) {
        var length = e.target.offsetWidth;
        if (e.target.title == "textNotif") {
            length = e.target.offsetWidth + 25;
        }
        $('.notificationHeader').animate({ left: "+=" + length + "px" }, 500);
        setTimeout(function () { $('.notificationHeader').css("display", "none"); }, 500);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        $('body').toast({
            class: 'error',
            displayTime: 0,
            message: 'Account discontinued. Contact Customer support.'
        });
        $('body').toast({
            class: 'warning',
            message: 'Enter existing passbook details to fetch owned plots.'
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/recent-trans/recent-trans.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/profile/recent-trans/recent-trans.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media all and (min-width: 769px) {\n\t.container{\n\t\tbackground-color: #fff;\n\t\tbox-shadow: inset 0px 0px 0px 2px rgba(234,234,234,1);\n\t\tposition: relative;\n\t\toverflow: hidden;\n\t\tmargin-top: 15px;\n\t\tmargin-bottom: 15px;\n\t\tborder-radius: 4px;\n\t\twidth: 100%;\n\t\tmax-width: 100%;\n\t\theight:auto;\n\t\tmin-height: 50px;\n  }\n}\n@media all and (max-width: 768px) {\n\t.container {\n\t\tbackground-color: #fff;\n\t\tbox-shadow: inset 0px 0px 0px 2px rgba(234,234,234,1);\n\t\tposition: relative;\n\t\toverflow: hidden;\n\t\tmargin: 15px auto;\n\t\tborder-radius: 4px;\n\t\twidth: 90%;\n\t\tmax-width: 90%;\n\t\theight:auto;\n\t\tmin-height: 40px;\n\t}\n}\n@media all and  (min-width:460px) and (max-width: 768px) {\n\t.container{\n\t\twidth: 70%;\n\t\tmax-width: 70%;\n\t}\n}\n@media all and (max-width: 768px) {\n\t.transID{\n\t\tdisplay:none;\n\t}\n}\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\theight: 100%;\n}\n.detailedInfo {\n    right: 0;\n\twidth: 65%;\n\tcolor: #0066FF;\n}\n.fields {\n\tleft: 0;\n\twidth: 35%;\n\tcolor:white;\n\tbackground:#0066FF;\n}\n.list{\n\tlist-style-type: none;\n\tfont-size: 12px;\n\tpadding-left: 10px !important;\n\t-webkit-transform: translateY(-6px);\n\t        transform: translateY(-6px); \n}\n.transID{\n\tcolor:black;\n}\n.emiAmount{\n\t/* transform: translateY(-22px); */\n}\n.alignRs{\n\t-webkit-transform: translateY(3px);\n\t        transform: translateY(3px);\n}\n.dateInfo{\n\tfont-weight: bold;\n\tfont-size:12px;\n\tmargin:15px 10px;\n\t display: inline-block;\n}\n@media all and (max-width: 768px) {\n\t.dateInfo{\n\t\tmargin:12px 10px !important;\n\t}\n\t.emiAmount{\n\t\t-webkit-transform: translateY(4px);\n\t\t        transform: translateY(4px);\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9yZWNlbnQtdHJhbnMvcmVjZW50LXRyYW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztFQUNDLHNCQUFzQjtFQUN0QixxREFBcUQ7RUFDckQsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEI7QUFDRjtBQUNBO0NBQ0M7RUFDQyxzQkFBc0I7RUFDdEIscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7Q0FDakI7QUFDRDtBQUNBO0NBQ0M7RUFDQyxVQUFVO0VBQ1YsY0FBYztDQUNmO0FBQ0Q7QUFDQTtDQUNDO0VBQ0MsWUFBWTtDQUNiO0FBQ0Q7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sWUFBWTtBQUNiO0FBRUE7SUFDSSxRQUFRO0NBQ1gsVUFBVTtDQUNWLGNBQWM7QUFDZjtBQUdBO0NBQ0MsT0FBTztDQUNQLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLDZCQUE2QjtDQUM3QixtQ0FBMkI7U0FBM0IsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLGtDQUFrQztBQUNuQztBQUNBO0NBQ0Msa0NBQTBCO1NBQTFCLDBCQUEwQjtBQUMzQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxnQkFBZ0I7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTtDQUNDO0VBQ0MsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0NBQzNCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3JlY2VudC10cmFucy9yZWNlbnQtdHJhbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG5cdC5jb250YWluZXJ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggcmdiYSgyMzQsMjM0LDIzNCwxKTtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6YXV0bztcblx0XHRtaW4taGVpZ2h0OiA1MHB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuY29udGFpbmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDJweCByZ2JhKDIzNCwyMzQsMjM0LDEpO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdG1hcmdpbjogMTVweCBhdXRvO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHR3aWR0aDogOTAlO1xuXHRcdG1heC13aWR0aDogOTAlO1xuXHRcdGhlaWdodDphdXRvO1xuXHRcdG1pbi1oZWlnaHQ6IDQwcHg7XG5cdH1cbn1cbkBtZWRpYSBhbGwgYW5kICAobWluLXdpZHRoOjQ2MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LmNvbnRhaW5lcntcblx0XHR3aWR0aDogNzAlO1xuXHRcdG1heC13aWR0aDogNzAlO1xuXHR9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQudHJhbnNJRHtcblx0XHRkaXNwbGF5Om5vbmU7XG5cdH1cbn1cblxuLmZvcm0tY29udGFpbmVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuLmRldGFpbGVkSW5mbyB7XG4gICAgcmlnaHQ6IDA7XG5cdHdpZHRoOiA2NSU7XG5cdGNvbG9yOiAjMDA2NkZGO1xufVxuXG5cbi5maWVsZHMge1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMzUlO1xuXHRjb2xvcjp3aGl0ZTtcblx0YmFja2dyb3VuZDojMDA2NkZGO1xufVxuLmxpc3R7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpOyBcbn1cbi50cmFuc0lEe1xuXHRjb2xvcjpibGFjaztcbn1cbi5lbWlBbW91bnR7XG5cdC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjJweCk7ICovXG59XG4uYWxpZ25Sc3tcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59XG4uZGF0ZUluZm97XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6MTJweDtcblx0bWFyZ2luOjE1cHggMTBweDtcblx0IGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5kYXRlSW5mb3tcblx0XHRtYXJnaW46MTJweCAxMHB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LmVtaUFtb3VudHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/recent-trans/recent-trans.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/recent-trans/recent-trans.component.ts ***!
  \****************************************************************/
/*! exports provided: RecentTransComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentTransComponent", function() { return RecentTransComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecentTransComponent = /** @class */ (function () {
    function RecentTransComponent() {
    }
    RecentTransComponent.prototype.ngOnInit = function () {
    };
    RecentTransComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'recent-trans',
            template: __webpack_require__(/*! raw-loader!./recent-trans.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/recent-trans/recent-trans.component.html"),
            styles: [__webpack_require__(/*! ./recent-trans.component.css */ "./src/app/profile/recent-trans/recent-trans.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecentTransComponent);
    return RecentTransComponent;
}());



/***/ }),

/***/ "./src/app/projects/project/project.component.css":
/*!********************************************************!*\
  !*** ./src/app/projects/project/project.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n\tbackground-color: #FAFAFA;\n\tborder-radius: 5px;\n\tbox-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), \n\t\t\t\t0px 3px 4px rgba(0, 0, 0, 0.12), \n\t\t\t\t0px 1px 5px rgba(0, 0, 0, 0.2);\n\tposition: relative;\n    overflow: hidden;\n    margin: 15px 0;\n\twidth: 30%;\n\tmax-width: 30%;\n\tmin-height: 92.88px;\n}\n\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\theight: 100%;\n}\n\n.projectInfo {\n    right: 0;\n\twidth: 65%;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-left: 15px;\n}\n\n.positionNav{\n\tfloat:right;\n\tmargin-right: 15px;\n\tmargin-top:-5px;\n}\n\n.fields {\n\tleft: 0;\n\twidth: 35%;\n\t\n}\n\n.fields img{\n\n  width: 100%;\n  height: 100%;\n  /* height: 50px; */\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.plotContainer{\n\tdisplay: flex;\n\t/* overflow: hidden; */\n\tjustify-content: space-between;\n}\n\n.plotOwned{\n\tmargin-top:10px;\n\tmargin-left:10px;\n}\n\n.plotNumber{\n\tfont-size: 10px;\n\ttext-transform: uppercase;\n\tmargin-bottom:5px;\n\tletter-spacing: 1px;\n\tdisplay: block;\n}\n\n.projectName{\n\tfont-size: 18px;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tmargin-bottom:5px;\n\tletter-spacing: 0.8px;\n\tdisplay: block;\n}\n\n.emiAmount{\n\tfont-size: 14px;\n\ttext-transform: uppercase;\n\t\n\tletter-spacing: 1px;\n\tdisplay: block;\n\topacity: 0.6;\n}\n\n.plotContainer img{\n\twidth: auto;\n\theight: 80px;\n\tmargin-top:10px;\n\tborder-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQjs7a0NBRWlDO0NBQ2pDLGtCQUFrQjtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCLFVBQVU7Q0FDVixjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixZQUFZO0FBQ2I7O0FBRUE7SUFDSSxRQUFRO0NBQ1gsVUFBVTtDQUNWLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsT0FBTztDQUNQLFVBQVU7O0FBRVg7O0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDhCQUE4QjtBQUMvQjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsY0FBYztBQUNmOztBQUNBO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YseUJBQXlCOztDQUV6QixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLFlBQVk7QUFDYjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZUFBZTtDQUNmLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCBcblx0XHRcdFx0MHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgXG5cdFx0XHRcdDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxNXB4IDA7XG5cdHdpZHRoOiAzMCU7XG5cdG1heC13aWR0aDogMzAlO1xuXHRtaW4taGVpZ2h0OiA5Mi44OHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvamVjdEluZm8ge1xuICAgIHJpZ2h0OiAwO1xuXHR3aWR0aDogNjUlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4ucG9zaXRpb25OYXZ7XG5cdGZsb2F0OnJpZ2h0O1xuXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdG1hcmdpbi10b3A6LTVweDtcbn1cblxuLmZpZWxkcyB7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAzNSU7XG5cdFxufVxuLmZpZWxkcyBpbWd7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogaGVpZ2h0OiA1MHB4OyAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5wbG90Q29udGFpbmVye1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucGxvdE93bmVke1xuXHRtYXJnaW4tdG9wOjEwcHg7XG5cdG1hcmdpbi1sZWZ0OjEwcHg7XG59XG4ucGxvdE51bWJlcntcblx0Zm9udC1zaXplOiAxMHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRtYXJnaW4tYm90dG9tOjVweDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0ZGlzcGxheTogYmxvY2s7XG59XG4ucHJvamVjdE5hbWV7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi1ib3R0b206NXB4O1xuXHRsZXR0ZXItc3BhY2luZzogMC44cHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuLmVtaUFtb3VudHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG9wYWNpdHk6IDAuNjtcbn1cbi5wbG90Q29udGFpbmVyIGltZ3tcblx0d2lkdGg6IGF1dG87XG5cdGhlaWdodDogODBweDtcblx0bWFyZ2luLXRvcDoxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/projects/project/project.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/projects/project/project.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'project',
            template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/projects/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padTop{\n    padding-top: 80px;\n}\n@media all and (min-width: 769px) {\n\t.padTop{\n\t\tdisplay: none;\n  }\n}\n.sectionHeader{\n    border-radius: 0px 15px 15px 0px;\n    background-color: #0066FF;\n    color:white;\n    display: inline-block;\n    margin-top:15px;\n    padding: 5px 10px 5px 15px ;\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0M7RUFDQyxhQUFhO0VBQ2I7QUFDRjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRUb3B7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuXHQucGFkVG9we1xuXHRcdGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5zZWN0aW9uSGVhZGVye1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2RkY7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTVweCA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.component.css":
/*!*********************************************************!*\
  !*** ./src/app/transactions/transactions.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padTop{\n    padding-top: 80px;\n}\n@media all and (min-width: 769px) {\n\t.padTop{\n\t\tdisplay: none;\n  }\n}\n.sectionHeader{\n    border-radius: 0px 15px 15px 0px;\n    background-color: #0066FF;\n    color:white;\n    display: inline-block;\n    margin-top:15px;\n    padding: 5px 10px 5px 15px ;\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7Q0FDQztFQUNDLGFBQWE7RUFDYjtBQUNGO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkVG9we1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcblx0LnBhZFRvcHtcblx0XHRkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc2VjdGlvbkhlYWRlcntcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NkZGO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDE1cHggO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent() {
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! raw-loader!./transactions.component.html */ "./node_modules/raw-loader/index.js!./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.css */ "./src/app/transactions/transactions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/auth.guard.ts":
/*!************************************!*\
  !*** ./src/services/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(routes) {
        this.routes = routes;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('username') != null) {
            return true;
        }
        else {
            this.routes.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/services/login-service.service.ts":
/*!***********************************************!*\
  !*** ./src/services/login-service.service.ts ***!
  \***********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.checkusername = function (uname, pwd) {
        if (uname == "admin" && pwd == "admin123") {
            localStorage.setItem('username', uname);
            return true;
        }
        else {
            return false;
        }
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/saisanj/Documents/Angular Projects/Real Estate heroku/RealEstateCustomerFrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map