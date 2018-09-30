(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sponsers/sponsers.component */ "./src/app/sponsers/sponsers.component.ts");
/* harmony import */ var _community_partner_community_partner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./community-partner/community-partner.component */ "./src/app/community-partner/community-partner.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'sponsers', component: _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_4__["SponsersComponent"] },
    { path: 'commu', component: _community_partner_community_partner_component__WEBPACK_IMPORTED_MODULE_5__["CommunityPartnerComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// export const routingComponents = [ContactComponent]


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-top-slider></app-top-slider>\n<router-outlet></router-outlet>\n<!-- <app-upcom-meetings></app-upcom-meetings> -->\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'home';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_layout_home_page_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page-layout/home-page-layout.component */ "./src/app/home-page-layout/home-page-layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _community_partner_community_partner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./community-partner/community-partner.component */ "./src/app/community-partner/community-partner.component.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./speakers/speakers.component */ "./src/app/speakers/speakers.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sponsers/sponsers.component */ "./src/app/sponsers/sponsers.component.ts");
/* harmony import */ var _upcom_meetings_upcom_meetings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upcom-meetings/upcom-meetings.component */ "./src/app/upcom-meetings/upcom-meetings.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _top_slider_top_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./top-slider/top-slider.component */ "./src/app/top-slider/top-slider.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shashank_shashank_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shashank/shashank.component */ "./src/app/shashank/shashank.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_layout_home_page_layout_component__WEBPACK_IMPORTED_MODULE_5__["HomePageLayoutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _community_partner_community_partner_component__WEBPACK_IMPORTED_MODULE_7__["CommunityPartnerComponent"],
                _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_8__["SubscribeComponent"],
                _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_9__["SpeakersComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_12__["SponsersComponent"],
                _upcom_meetings_upcom_meetings_component__WEBPACK_IMPORTED_MODULE_13__["UpcomMeetingsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _top_slider_top_slider_component__WEBPACK_IMPORTED_MODULE_15__["TopSliderComponent"],
                _shashank_shashank_component__WEBPACK_IMPORTED_MODULE_17__["ShashankComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/community-partner/community-partner.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/community-partner/community-partner.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".community-partner-div { padding: 50px 0; }\n\nh1 { color: #212739; font-family: Oswald, sans-serif; }\n\n.row { margin-top: 20px; }\n\n.img-div { height: 150px; line-height: 155px; }\n\nimg { width: 100%; }\n"

/***/ }),

/***/ "./src/app/community-partner/community-partner.component.html":
/*!********************************************************************!*\
  !*** ./src/app/community-partner/community-partner.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container community-partner-div text-center\">\n  <h1 class=\"text-uppercase font-weight-bold\">community partner</h1>\n  <div class=\"row\">\n    <div class=\"col-xl-3\">\n      <div class=\"img-div\">\n        <img src=\"assets/img/1.jpg\">\n      </div>\n    </div>\n    <div class=\"col-xl-3\">\n      <div class=\"img-div\">\n        <img src=\"assets/img/2.jpg\">\n      </div>\n    </div>\n    <div class=\"col-xl-3\">\n      <div class=\"img-div\">\n        <img src=\"assets/img/3.png\">\n      </div>\n    </div>\n    <div class=\"col-xl-3\">\n      <div class=\"img-div\">\n        <img src=\"assets/img/4.png\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/community-partner/community-partner.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/community-partner/community-partner.component.ts ***!
  \******************************************************************/
/*! exports provided: CommunityPartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPartnerComponent", function() { return CommunityPartnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommunityPartnerComponent = /** @class */ (function () {
    function CommunityPartnerComponent() {
    }
    CommunityPartnerComponent.prototype.ngOnInit = function () {
    };
    CommunityPartnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-community-partner',
            template: __webpack_require__(/*! ./community-partner.component.html */ "./src/app/community-partner/community-partner.component.html"),
            styles: [__webpack_require__(/*! ./community-partner.component.css */ "./src/app/community-partner/community-partner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommunityPartnerComponent);
    return CommunityPartnerComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-div { padding: 40px 0; }\n\n.form-col { margin: 0 auto; }\n\n.btn { padding: 6px 40px; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center contact-div\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-lg-10 col-lg-offset-2 col-md-offset-2 form-col\">\n      <form>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"nameHelp\" placeholder=\"Name\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"exampleInput1\" placeholder=\"Email Subject\">\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"6\" placeholder=\"Message\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<app-subscribe></app-subscribe>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer { background-color: #2b3142; padding-top: 60px; }\n\n.link-title {\n  color: #708090; font-size: 23px;\n  font-family: Oswald, sans-serif; letter-spacing: 1.5px;\n}\n\nul { list-style-type: none; padding-left: 0; }\n\na { color: #fff; opacity: 0.5; }\n\na:hover { text-decoration: none; }\n\n.li-item { color: #fff; opacity: 0.5; }\n\n.list-inline-item {\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  background-color: #fff;\n  opacity: .5;\n  text-align: center;\n}\n\n.list-inline-item:not(:last-child) { margin-right: 6px; }\n\ni { color: #212739; font-size: 24px; line-height: 45px; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-3\">\n        <div class=\"links-div\">\n          <h3 class=\"link-title text-uppercase font-weight-bold\">links</h3>\n          <ul class=\"link-ul\">\n            <li><a href=\"#\">Home</a></li>\n            <li><a href=\"#\">About Us</a></li>\n            <li><a href=\"#\">Upcoming Meetings</a></li>\n            <li><a href=\"#\">Past Meetups</a></li>\n            <li><a href=\"#\">Sponsors</a></li>\n            <li><a href=\"#\">Community Partners</a></li>\n            <li><a href=\"#\">Contact Us</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-xl-4\">\n        <div class=\"contact-div\">\n          <h3 class=\"link-title text-uppercase font-weight-bold\">contact info</h3>\n          <ul>\n            <li class=\"li-item\">contact@techtalks.co.in</li>\n            <li class=\"li-item\">contact@hostingjunction.in</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-xl-5\">\n        <div class=\"follow-div\">\n          <h3 class=\"link-title text-uppercase font-weight-bold\">follow us on</h3>\n          <ul class=\"list-inline\">\n            <li class=\"list-inline-item\">\n              <a href=\"#\" class=\"social-icon-link\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\" class=\"social-icon-link\">\n                <i class=\"fa fa-twitter\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\" class=\"social-icon-link\">\n                <i class=\"fa fa-telegram\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\" class=\"social-icon-link\">\n                <i class=\"fa fa-medium\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\" class=\"social-icon-link\">\n                <i class=\"fa fa-slack\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\" class=\"social-icon-link\">\n                <i class=\"fa fa-github\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\" class=\"social-icon-link\">\n                <i class=\"fa fa-youtube\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar { background: rgba(33,39,57,.95); }\n\n.navbar-brand { color: #fff; font-family: 'Megrim', cursive; font-weight: bold; font-size: 30px;\n  letter-spacing: 1.5px;\n}\n\n.navbar-light .navbar-nav  .active > .nav-link { color: #fff; text-transform: uppercase; }\n\n.navbar-light .navbar-brand:hover { color: #fff; }\n\n.navbar-light .navbar-nav .nav-link { color: #fff; text-transform: uppercase;\n  font-family: 'Oswald', sans-serif;\n}\n\n.btn { border: none; background-color: transparent; }\n\n.btn:focus { box-shadow: none !important; }\n\n.dropdown-toggle::after { margin-left: 0.5rem; }\n\n/*.navbar-collapse .navbar-nav { float: right; }*/\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">TECHTALKS</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/team\">about us</a>\n        </li>\n        <li class=\"nav-item\">\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>meetup</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n              <button class=\"dropdown-item\">Upcoming Meetups</button>\n              <button class=\"dropdown-item\" routerLink=\"/upcom\">Past Meetups</button>\n            </div>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn nav-link\" id=\"dropdownBasic2\" ngbDropdownToggle>Partners</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n              <button class=\"dropdown-item\" routerLink=\"/sponsers\">Sponsers</button>\n              <button class=\"dropdown-item\" routerLink=\"/commu\">Community Partners</button>\n            </div>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contact\">contact us</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page-layout/home-page-layout.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/home-page-layout/home-page-layout.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page-layout/home-page-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home-page-layout/home-page-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page-layout/home-page-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home-page-layout/home-page-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: HomePageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageLayoutComponent", function() { return HomePageLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageLayoutComponent = /** @class */ (function () {
    function HomePageLayoutComponent() {
    }
    HomePageLayoutComponent.prototype.ngOnInit = function () {
    };
    HomePageLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page-layout',
            template: __webpack_require__(/*! ./home-page-layout.component.html */ "./src/app/home-page-layout/home-page-layout.component.html"),
            styles: [__webpack_require__(/*! ./home-page-layout.component.css */ "./src/app/home-page-layout/home-page-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageLayoutComponent);
    return HomePageLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shashank/shashank.component.css":
/*!*************************************************!*\
  !*** ./src/app/shashank/shashank.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shashank/shashank.component.html":
/*!**************************************************!*\
  !*** ./src/app/shashank/shashank.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shashank/shashank.component.ts":
/*!************************************************!*\
  !*** ./src/app/shashank/shashank.component.ts ***!
  \************************************************/
/*! exports provided: ShashankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShashankComponent", function() { return ShashankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShashankComponent = /** @class */ (function () {
    function ShashankComponent() {
    }
    ShashankComponent.prototype.ngOnInit = function () {
    };
    ShashankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shashank',
            template: __webpack_require__(/*! ./shashank.component.html */ "./src/app/shashank/shashank.component.html"),
            styles: [__webpack_require__(/*! ./shashank.component.css */ "./src/app/shashank/shashank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShashankComponent);
    return ShashankComponent;
}());



/***/ }),

/***/ "./src/app/speakers/speakers.component.css":
/*!*************************************************!*\
  !*** ./src/app/speakers/speakers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".speakers { overflow: hidden; padding-bottom: 50px; padding-top: 40px; }\n\nh2 { color: #212739; font-family: Oswald, sans-serif; margin-bottom: 30px; }\n\n/*.speaker-info { border-radius: 4px; background: rgba(241, 241, 241, .60); padding: 60px 200px; }*/\n\n/* .shashank-pro { height: 136px; width: 136px; border-radius: 50%; margin: 0 auto; display: block;\n  margin-bottom: 30px;\n} */\n\n.pro-name { color: #313f47; margin-bottom: 20px; letter-spacing: 5px; font-size: 28px; }\n\nh6 { letter-spacing: 3px; color: #858585; font-size: 13px; }\n\n/*.speaker1 {height: 300px; width: 310px; padding-top: 20px; }\n.speaker2 {height: 300px; width: 310px; padding-top: 20px; }\n.speaker3 {height: 300px; width: 310px; padding-top: 20px; }*/\n\n/*.speaker1 { height: 400px; width: 400px; padding-top: 20px; }*/\n\n/*.speaker2 { height: 400px; width: 400px; padding-top: 20px; }*/\n\n/*.speaker3 { height: 400px; width: 400px; padding-top: 20px; }*/\n\n.name { background-color: transparent; }\n\n.speaker { display: inline-block; width: 30.33%; }\n\n/*.speaker-slider { margin: 0 auto; }*/\n\n.speaker1 { margin-right: 10px; }\n\n.speaker2 { margin-right: 10px; }\n\n.img { max-width: 100%; width: 240px; height: 240px; border-radius: 50%; margin-bottom: 30px; }\n"

/***/ }),

/***/ "./src/app/speakers/speakers.component.html":
/*!**************************************************!*\
  !*** ./src/app/speakers/speakers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center speakers\">\n  <h2 class=\"text-uppercase font-weight-bold\">speakers</h2>\n\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n\n      <div class=\"speaker-slider text-center\">\n        <div class=\"speaker speaker1\">\n          <img src=\"assets/img/nupur.jpg\" class=\"img\">\n          <button class=\"btn name text-uppercase\">nupur agrahari</button>\n        </div>\n        <div class=\"speaker speaker2\">\n          <img src=\"assets/img/ankit.jpg\" class=\"img\">\n          <button class=\"btn name text-uppercase\">ankit giri</button>\n        </div>\n        <div class=\"speaker speaker3\">\n          <img src=\"assets/img/shashank.jpg\" class=\"img\">\n          <button class=\"btn name text-uppercase\">shashank kumar</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/speakers/speakers.component.ts":
/*!************************************************!*\
  !*** ./src/app/speakers/speakers.component.ts ***!
  \************************************************/
/*! exports provided: SpeakersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersComponent", function() { return SpeakersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpeakersComponent = /** @class */ (function () {
    function SpeakersComponent() {
    }
    SpeakersComponent.prototype.ngOnInit = function () {
    };
    SpeakersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speakers',
            template: __webpack_require__(/*! ./speakers.component.html */ "./src/app/speakers/speakers.component.html"),
            styles: [__webpack_require__(/*! ./speakers.component.css */ "./src/app/speakers/speakers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpeakersComponent);
    return SpeakersComponent;
}());



/***/ }),

/***/ "./src/app/sponsers/sponsers.component.css":
/*!*************************************************!*\
  !*** ./src/app/sponsers/sponsers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sponsers { padding: 50px 0; background: rgba(241, 241, 241, .85); }\n\nh2 { color: #212739; font-family: Oswald, sans-serif; margin-bottom: 30px; }\n"

/***/ }),

/***/ "./src/app/sponsers/sponsers.component.html":
/*!**************************************************!*\
  !*** ./src/app/sponsers/sponsers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sponsers text-center\">\n  <h2 class=\"text-uppercase font-weight-bold\">sponsers</h2>\n  <div class=\"sponsers-img\">\n    <a href=\"#\">\n      <img src=\"assets/img/hackerspace.png\">\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sponsers/sponsers.component.ts":
/*!************************************************!*\
  !*** ./src/app/sponsers/sponsers.component.ts ***!
  \************************************************/
/*! exports provided: SponsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsersComponent", function() { return SponsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SponsersComponent = /** @class */ (function () {
    function SponsersComponent() {
    }
    SponsersComponent.prototype.ngOnInit = function () {
    };
    SponsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sponsers',
            template: __webpack_require__(/*! ./sponsers.component.html */ "./src/app/sponsers/sponsers.component.html"),
            styles: [__webpack_require__(/*! ./sponsers.component.css */ "./src/app/sponsers/sponsers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SponsersComponent);
    return SponsersComponent;
}());



/***/ }),

/***/ "./src/app/subscribe/subscribe.component.css":
/*!***************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 { color: #708090; font-family: Oswald, sans-serif; margin-bottom: 45px; }\n\n.form-group { display: inline-block; vertical-align: top; }\n\ninput { border-radius: 4px 0 0 4px; }\n\nbutton { vertical-align: top; border-radius: 0 4px 4px 0; }\n\nform { margin-bottom: 30px; }\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.html":
/*!****************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h3 class=\"text-uppercase font-weight-bold\">subscribe & stay updated</h3>\n  <form>\n    <div class=\"form-group\">\n      <input type=\"email\" class=\"form-control\" placeholder=\"Enter your e-mail address\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn\">Subscribe</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubscribeComponent = /** @class */ (function () {
    function SubscribeComponent() {
    }
    SubscribeComponent.prototype.ngOnInit = function () {
    };
    SubscribeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.component.html */ "./src/app/subscribe/subscribe.component.html"),
            styles: [__webpack_require__(/*! ./subscribe.component.css */ "./src/app/subscribe/subscribe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team { padding: 30px 0; }\n\n.team-members {\n  display: table;\n  width: 100%;\n  overflow: hidden;\n}\n\nh2 {\n  color: #212739;\n  opacity: 0.5;\n  font-family: Oswald, sans-serif;\n  letter-spacing: 1px;\n  margin-bottom: 40px;\n}\n\n.team-members .team-member {\n  display: table-cell;\n  width: 1%;\n  height: 400px;\n  transition: 0.6s ease-in-out all;\n  overflow: hidden;\n  position: relative;\n  min-width: 65px;\n}\n\nimg {\n  width: 210px;\n  height: 350px;\n  transition: 0.6s ease-in-out all;\n}\n\n/*.team:hover .team-member:hover {\n  width: 100%;\n}*/\n\nimg:hover {\n  width: 250px;\n}\n\n/*.team:hover .team-member:hover img:hover {\n  width: 100%;\n}*/\n"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"team\">\n  <h2 class=\"text-uppercase font-weight-bold text-center\">the team</h2>\n  <div class=\"team-members\">\n    <div class=\"team-member\">\n      <img src=\"assets/img/amit.jpeg\" class=\"team-img\">\n    </div>\n    <div class=\"team-member\">\n      <img src=\"assets/img/arpit.jpeg\" class=\"team-img\">\n    </div>\n    <div class=\"team-member\">\n      <img src=\"assets/img/shrreya.jpg\" class=\"team-img\">\n    </div>\n    <div class=\"team-member\">\n      <img src=\"assets/img/apoorva.jpg\" class=\"team-img\">\n    </div>\n    <div class=\"team-member\">\n      <img src=\"assets/img/shubham.jpeg\" class=\"team-img\">\n    </div>\n    <div class=\"team-member\">\n      <img src=\"assets/img/prateek.jpg\" class=\"team-img\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/top-slider/top-slider.component.css":
/*!*****************************************************!*\
  !*** ./src/app/top-slider/top-slider.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-bg .carousel-inner  .carousel-item {\n    background-size: cover;\n    background-position: center;\n    min-height: 450px;\n    background-repeat: no-repeat;\n}\n\n.carousel, .carousel-item, .active {\n    height: 100%;\n}\n\n.carousel-inner {\n    height: 100%;\n}\n\n.carousel-caption {\n    bottom: 25%;\n    left: 35%;\n    right: 15%;\n}\n\nh2 , h1 , h5 { font-family: Oswald, sans-serif; letter-spacing: 6px; }\n\nh2 { font-size: 40px; }\n\nh1 { font-size: 60px; }\n\nh5 { font-size: 26px; }\n\n.first-slide {\n    background-image: url('slider1.jpg');\n}\n\n.second-slide {\n    background-image: url('slider2.jpg');\n}\n\n.third-slide {\n    background-image: url('slider3.jpg');\n}\n\n.carousel-control-prev {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.carousel-control-next, .carousel-control-prev {\n    width: 50px;\n    top: 38%;\n    bottom: inherit;\n    background-color: rgba(0,0,0,0.7);\n    padding: 8px 7px;\n}"

/***/ }),

/***/ "./src/app/top-slider/top-slider.component.html":
/*!******************************************************!*\
  !*** ./src/app/top-slider/top-slider.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel slide carousel-bg\" id=\"carouselExampleControls\" data-ride=\"carousel\">\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item first-slide active\">\n      </div>\n      <div class=\"carousel-item second-slide\">\n      </div>\n      <div class=\"carousel-item third-slide\">\n      </div>\n  </div>\n  <div class=\"carousel-caption text-left\">\n      <h2 class=\"text-uppercase\">next meetup:</h2>\n      <h1 class=\"text-uppercase font-weight-bold\">hacker space</h1>\n      <h5 class=\"white-text third-heading\">On October 12' 2018</h5>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <img src=\"assets/img/prev.png\" class=\"prev-top\">\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <img src=\"assets/img/next.png\" class=\"next-top\">\n  </a>\n\n</div>"

/***/ }),

/***/ "./src/app/top-slider/top-slider.component.ts":
/*!****************************************************!*\
  !*** ./src/app/top-slider/top-slider.component.ts ***!
  \****************************************************/
/*! exports provided: TopSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSliderComponent", function() { return TopSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopSliderComponent = /** @class */ (function () {
    function TopSliderComponent() {
    }
    TopSliderComponent.prototype.ngOnInit = function () {
    };
    TopSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-slider',
            template: __webpack_require__(/*! ./top-slider.component.html */ "./src/app/top-slider/top-slider.component.html"),
            styles: [__webpack_require__(/*! ./top-slider.component.css */ "./src/app/top-slider/top-slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopSliderComponent);
    return TopSliderComponent;
}());



/***/ }),

/***/ "./src/app/upcom-meetings/upcom-meetings.component.css":
/*!*************************************************************!*\
  !*** ./src/app/upcom-meetings/upcom-meetings.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upcom-meet { padding: 40px 0; }\n\n.upcom-heading { color: #212739; font-family: Oswald, sans-serif; letter-spacing: 1.5px; margin-bottom: 50px; }\n\n.content-div {\n  height: 400px; width: 434px; overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 16px;\n  right: 0;\n}\n\n.meet { position: relative; width: 450px; }\n\n.content-div:hover { overflow-y: scroll; }\n\n.img { width: 100%; }\n\n.heading1 { background-color: #000; }\n\n.heading2 { background-color: #00bcd4; }\n\n.heading {\n  color: #fff;\n  position: absolute;\n  margin-bottom: 0;\n  left: 0; z-index: 10; top: 349px;\n  width: 100%;\n  font-size: 26px;\n  padding: 10px 16px;\n}\n\n.heading1:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  border: 8px solid; top: -16px;\n  border-top-color: transparent;\n  border-right-color: #000;\n  border-bottom-color: #000;\n  border-left-color: transparent;\n}\n\n.heading2:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  border: 8px solid; top: -16px;\n  border-top-color: transparent;\n  border-right-color: #00bcd4;\n  border-bottom-color: #00bcd4;\n  border-left-color: transparent;\n}\n\n.bar-btn {\n  background-color: #2196F3;\n  position: absolute;\n  right: 16px; top: 16px;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  width: 54px; height: 54px;\n  line-height: 44px; text-align: center;\n  cursor: pointer;\n  z-index: 20;\n}\n\ni { color: #fff; }\n"

/***/ }),

/***/ "./src/app/upcom-meetings/upcom-meetings.component.html":
/*!**************************************************************!*\
  !*** ./src/app/upcom-meetings/upcom-meetings.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upcom-meet\">\n  <div class=\"container\">\n    <h3 class=\"upcom-heading text-uppercase text-center font-weight-bold\">upcoming meetings</h3>\n    <div class=\"row\">\n\n      <div class=\"col-md-6\">\n        <div class=\"meet1 meet\">\n          <h2 class=\"heading1 heading\">TechTalks</h2>\n          <div class=\"meet1-content content-div\">\n            <div class=\"img-container\">\n              <img src=\"assets/img/aug12.jpeg\" class=\"img\">\n            </div>\n            <!-- <div class=\"desc\">\n              <strong>TechTalks + PeerLyst + CyberFat + DigitalOcean Meetup</strong>\n              <br>\n              <article class=\"desc-content\">\n                Topics: Cloud Security‍ &; Best Practices in Digital Ocean Cloud, Javascript and the event loop and GSOC Student\n              </article>\n              <br>\n              <article class=\"desc-time\">Time: 11:00 to 14:00</article>\n              <a class=\"bar-btn\">\n                <i class=\"fa fa-arrow-left\"></i>\n              </a>\n              <div class=\"desc-footer\">\n                <article class=\"desc-footer-content\">Sunday, August 12, 2018</article>\n                <button class=\"btn\">RSVP</button>\n              </div>\n            </div> -->\n          </div>\n          <a class=\"bar-btn\">\n            <i class=\"fa fa-bars\"></i>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <div class=\"meet2 meet\">\n          <h2 class=\"heading2 heading\">Bear-To-Bull Mark...</h2>\n          <div class=\"meet2-content content-div\">\n            <div class=\"img-container\">\n              <img src=\"assets/img/bear_to_bull.jpeg\" class=\"img\">\n            </div>\n            <!-- <div class=\"desc\">\n              <strong>Bear-To-Bull Market Meetup</strong>\n              <br>\n              <article class=\"desc-content\">\n                It's the usual drill. Come. Chill with cool crypto people. Learn about blockchain and its use cases. Get shilled on a few ICOs. Go home.\n              </article>\n              <br>\n              <article class=\"desc-time\">Time: 16:15 to 18:15</article>\n              <a class=\"bar-btn\">\n                <i class=\"fa fa-arrow-left\"></i>\n              </a>\n              <div class=\"desc-footer\">\n                <article class=\"desc-footer-content\">Sunday, August 12, 2018</article>\n                <button class=\"btn\">RSVP</button>\n              </div>\n            </div> -->\n          </div>\n          <a class=\"bar-btn\">\n            <i class=\"fa fa-bars\"></i>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upcom-meetings/upcom-meetings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/upcom-meetings/upcom-meetings.component.ts ***!
  \************************************************************/
/*! exports provided: UpcomMeetingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomMeetingsComponent", function() { return UpcomMeetingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpcomMeetingsComponent = /** @class */ (function () {
    function UpcomMeetingsComponent() {
    }
    UpcomMeetingsComponent.prototype.ngOnInit = function () {
    };
    UpcomMeetingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upcom-meetings',
            template: __webpack_require__(/*! ./upcom-meetings.component.html */ "./src/app/upcom-meetings/upcom-meetings.component.html"),
            styles: [__webpack_require__(/*! ./upcom-meetings.component.css */ "./src/app/upcom-meetings/upcom-meetings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpcomMeetingsComponent);
    return UpcomMeetingsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/apoorva/Website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map