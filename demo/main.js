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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"outer-container\">\r\n        <div id=\"information\">\r\n            <form action=\"#\" #f=\"ngForm\" autocomplete=\"off\">\r\n                <div id=\"od-sec\">\r\n                    <div class=\"autocomplete\"><input class=\"f-input\" id=\"origin\" [(ngModel)]=\"flight.origin\" placeholder=\"Origin\" (keyup)=\"flight.origin=flight.origin.toUpperCase()\" name=\"origin\" required/></div>\r\n                    <div class=\"autocomplete\"><input class=\"f-input\" id=\"dest\" [(ngModel)]=\"flight.dest\" placeholder=\"Destination\" (keyup)=\"flight.dest=flight.dest.toUpperCase()\" name=\"dest\" required/></div>\r\n                  </div>\r\n\r\n                <div id=\"sel-datetime\">\r\n                    <label><p>Select Date-Time</p></label>\r\n                    <input type=\"date\" class=\"f-input sel sel-date\" [(ngModel)]=\"flight.date\" placeholder=\"Date\" name=\"date\">\r\n                    <input type=\"time\" class=\"f-input sel\" placeholder=\"Time-start\" [(ngModel)]=\"flight.tstart\" name=\"tstart\">\r\n                    <input type=\"time\" class=\"f-input sel\" placeholder=\"Time-end\" [(ngModel)]=\"flight.tend\" style=\"margin-left: 5px;\" name=\"tend\">\r\n                </div>\r\n\r\n\r\n                <div id=\"travel-type\">\r\n                    <label class=\"control control--radio\">\r\n                      <input type=\"radio\" name=\"travel-type\" [value]=\"true\" [(ngModel)]=\"flight.isoutbound\" name=\"isoutbound\" checked> Outbound\r\n                      <div class=\"control__indicator\"></div>\r\n                    </label>\r\n                    <label class=\"control control--radio\">\r\n                      <input type=\"radio\" name=\"travel-type\" [value]=\"false\" [(ngModel)]=\"flight.isoutbound\" name=\"isoutbound\"> Return\r\n                      <div class=\"control__indicator\"></div>\r\n                    </label>\r\n                </div>\r\n\r\n                <input type=\"number\" min-value=\"0\" class=\"f-input price-sec\" [(ngModel)]=\"flight.price\" placeholder=\"Price\" name=\"price\">\r\n\r\n                <div class=\"add-data\">\r\n                    <svg height=\"40px\" width=\"40px\" version=\"1.1\" viewBox=\"0 0 16 16\" x=\"0px\" y=\"0px\" (click)=\"addNewFlight(f)\">\r\n                      <path clip-rule=\"evenodd\" d=\"M2,7h5v-5h2v5h5v2h-5v5h-2v-5h-5z\" fill-rule=\"evenodd\"></path>\r\n                    </svg>\r\n                </div>\r\n            </form>\r\n            <div id=\"code\">\r\n                <p>Standard: ICAO.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- list-manager -->\r\n    <div class=\"pick-sec\">\r\n        <div class=\"side\">\r\n            <h1 class=\"outbound-date\">Outbound</h1>\r\n            <div class=\"date-sec\">\r\n                {{ sortByDate() }}\r\n                <div *ngFor=\"let item of filterTypeForData(TravelType.Outbound); let index = index;\">\r\n                  {{ sortByDate() }}\r\n                  <div *ngIf=\"filterTypeForData(TravelType.Outbound)[index-1] == null || (filterTypeForData(TravelType.Outbound)[index-1].datestart.toString()) != (item.datestart.toString()); else dateFilter\">\r\n                      <div class=\"flight-date\">\r\n                          <p>Flight at {{ item.datestart.getFullYear() + \"-\" + (item.datestart.getMonth() + 1) + \"-\" + item.datestart.getDate() }}</p>\r\n                      </div>\r\n                  </div>\r\n                  <ng-template #dateFilter>\r\n                  </ng-template>\r\n\r\n                    <div class=\"flight-sec\" [attr.flight_id]=\"item.flight_id\" travel_type=\"outbound\" draggable=\"true\" ondragstart=\"dragstart(event)\" ondragover=\"dragover(event)\" ondrop=\"drop(event)\" *ngIf=\"item.type == TravelType.Outbound\">\r\n                        <div class=\"f\">\r\n                            <div class=\"flight-info\">\r\n                                <div class=\"segments\">\r\n                                    <div class=\"segment departure\">\r\n                                        <time>{{ item.from }}</time>\r\n                                        <span class=\"airport\">{{ item.datestart.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZoneName:'short' })}}</span>\r\n                                    </div>\r\n                                    <div class=\"divider adaptive\">\r\n                                        <span class=\"plane\"></span>\r\n                                    </div>\r\n                                    <div class=\"segment destination\">\r\n                                        <time>{{ item.to }}</time>\r\n                                        <span class=\"airport\">{{ item.dateend.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZoneName:'short' })}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"flight-duration\">\r\n                                1h 20min Length of trip\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"flight-price-sec\">\r\n                            <h1>{{ item.price }}</h1>\r\n                        </div>\r\n\r\n                        <div class=\"delete\">\r\n                          <span (click)=\"deleteFlight(item.flight_id)\">×</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"side\">\r\n            <h1 class=\"return-date\">Return</h1>\r\n            <div class=\"date-sec\">\r\n                {{ sortByDate() }}\r\n                <div *ngFor=\"let item of filterTypeForData(TravelType.Return); let index = index;\">\r\n                  {{ sortByDate() }}\r\n                  <div *ngIf=\"filterTypeForData(TravelType.Outbound)[index-1] == null || (filterTypeForData(TravelType.Outbound)[index-1].datestart.toString()) != (item.datestart.toString()); else dateFilter\">\r\n                      <div class=\"flight-date\">\r\n                          <p>Flight at {{ item.datestart.getFullYear() + \"-\" + (item.datestart.getMonth()+1) + \"-\" + item.datestart.getDate() }}</p>\r\n                      </div>\r\n                  </div>\r\n                  <ng-template #dateFilter>\r\n                  </ng-template>\r\n\r\n                    <div class=\"flight-sec\" [attr.flight_id]=\"item.flight_id\" travel_type=\"return\" draggable=\"true\" ondragstart=\"dragstart(event)\" ondragover=\"dragover(event)\" ondrop=\"drop(event)\">\r\n                        <div class=\"f\">\r\n                            <div class=\"flight-info\">\r\n                                <div class=\"segments\">\r\n                                    <div class=\"segment departure\">\r\n                                        <time>{{ item.from }}</time>\r\n                                        <span class=\"airport\">{{ item.datestart.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZoneName:'short' })}}</span>\r\n                                    </div>\r\n                                    <div class=\"divider adaptive\">\r\n                                        <span class=\"plane\"></span>\r\n                                    </div>\r\n                                    <div class=\"segment destination\">\r\n                                        <time>{{ item.to }}</time>\r\n                                        <span class=\"airport\">{{ item.dateend.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZoneName:'short' })}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"flight-duration\">\r\n                                {{ getDistanceTime(item.dateend, item.datestart) }}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"flight-price-sec\">\r\n                            <h1>{{ item.price }}</h1>\r\n                        </div>\r\n\r\n                        <div class=\"delete\">\r\n                          <span (click)=\"deleteFlight(item.flight_id)\">×</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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


var travel_type;
(function (travel_type) {
    travel_type[travel_type["Outbound"] = 0] = "Outbound";
    travel_type[travel_type["Return"] = 1] = "Return";
})(travel_type || (travel_type = {}));
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.TravelType = travel_type;
        this.title = 'flight-todo';
        this.flight = {
            origin: "",
            dest: "",
            date: null,
            tstart: null,
            tend: null,
            isoutbound: true,
            price: 0
        };
        this.id_count = 0;
        this.data = [
            {
                flight_id: 1,
                from: "KHH",
                to: "HKG",
                datestart: new Date(),
                dateend: new Date(),
                type: travel_type.Outbound,
                price: 9600
            },
            {
                flight_id: 2,
                from: "KIX",
                to: "TPE",
                datestart: new Date("2019/03/14"),
                dateend: new Date("2019/03/14"),
                type: travel_type.Outbound,
                price: 3100
            },
            {
                flight_id: 3,
                from: "TLV",
                to: "HKG",
                datestart: new Date("2019/03/04"),
                dateend: new Date("2019/03/04"),
                type: travel_type.Return,
                price: 36600
            },
            {
                flight_id: 4,
                from: "TLV",
                to: "HKG",
                datestart: new Date("2019/03/14"),
                dateend: new Date("2019/03/14"),
                type: travel_type.Outbound,
                price: 36600
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("dragEvent", function (e) {
            //field change
            console.log(e.detail.flight_id);
            console.log(e.detail.dest_type);
            _this.data.map(function (x) {
                if (x.flight_id == e.detail.flight_id) {
                    x.type = (e.detail.dest_type == "return" ? travel_type.Return : travel_type.Outbound);
                }
            });
        });
        this.flight = {
            origin: "TLV",
            dest: "HKG",
            date: "2019-03-31",
            tstart: "09:24",
            tend: "11:24",
            isoutbound: true,
            price: 2719
        };
    };
    AppComponent.prototype.sortByDate = function () {
        this.data.sort(function (a, b) {
            return a.datestart.getDate() - b.datestart.getDate();
        });
    };
    AppComponent.prototype.filterTypeForData = function (type) {
        if (type == travel_type.Outbound) {
            return this.data.filter(function (flight) {
                if (flight.type == travel_type.Outbound)
                    return flight;
            });
        }
        else { //return
            return this.data.filter(function (flight) {
                if (flight.type == travel_type.Return)
                    return flight;
            });
        }
    };
    AppComponent.prototype.addNewFlight = function () {
        var dateStart = new Date(this.flight.date);
        dateStart.setHours(parseInt(this.flight.tstart.split(":")[0]));
        dateStart.setMinutes(parseInt(this.flight.tstart.split(":")[1]));
        var dataEnd = new Date(this.flight.date);
        dataEnd.setHours(parseInt(this.flight.tend.split(":")[0]));
        dataEnd.setMinutes(parseInt(this.flight.tend.split(":")[1]));
        if (dateStart.toLocaleString('en-US', { hour12: true, timeZoneName: 'short' }).toString() == "PM" && dataEnd.toLocaleString('en-US', { hour12: true, timeZoneName: 'short' }).toString() == "AM") {
            dataEnd = new Date(dataEnd.setDate(dataEnd.getDate() + 1));
        }
        var fdata = {
            flight_id: this.id_count++,
            from: this.flight.origin.toString().toUpperCase(),
            to: this.flight.dest.toString().toUpperCase(),
            datestart: dateStart,
            dateend: dataEnd,
            type: (this.flight.isoutbound ? travel_type.Outbound : travel_type.Return),
            price: this.flight.price
        };
        this.data.push(fdata);
        this.sortByDate();
        this.flight = {
            origin: "",
            dest: "",
            date: null,
            tstart: null,
            tend: null,
            isoutbound: true,
            price: 0
        };
    };
    AppComponent.prototype.deleteFlight = function (flight_id) {
        var _this = this;
        console.log(flight_id);
        this.data.map(function (x, i) {
            if (x.flight_id == flight_id) {
                _this.data.splice(i, 1);
            }
        });
    };
    AppComponent.prototype.getDistanceTime = function (dt1, dt2) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        var totalTime = Math.abs(Math.round(diff));
        return totalTime / 60 + "h " + totalTime % 60 + "min Length of trip";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-manager/list-manager.component */ "./src/app/list-manager/list-manager.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_5__["ListManagerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list-manager/list-manager.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-manager/list-manager.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtbWFuYWdlci9saXN0LW1hbmFnZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/list-manager/list-manager.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-manager/list-manager.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pick-sec\">\r\n    <div class=\"side\">\r\n        <h1 class=\"outbound-date\">Outbound</h1>\r\n        <div class=\"date-sec\">\r\n            <div>\r\n                <div class=\"flight-date\">\r\n                    <p>Flight at 2019-03-24</p>\r\n                </div>\r\n\r\n                <div class=\"flight-sec\" draggable=\"true\" ondragstart=\"dragstart(event)\" ondragover=\"dragover(event)\" ondrop=\"drop(event)\">\r\n                    <div class=\"f\">\r\n                        <div class=\"flight-info\">\r\n                            <div class=\"segments\">\r\n                                <div class=\"segment departure\">\r\n                                    <time>KHH</time>\r\n                                    <span class=\"airport\">8:00 AM(UTC+8)</span>\r\n                                </div>\r\n                                <div class=\"divider adaptive\">\r\n                                    <span class=\"plane\"></span>\r\n                                </div>\r\n                                <div class=\"segment destination\">\r\n                                    <time>HKG</time>\r\n                                    <span class=\"airport\">9:25 AM(UTC+8)</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"flight-duration\">\r\n                            1h 20min Length of trip\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"flight-price-sec\">\r\n                        <h1>6,740</h1>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"side\">\r\n        <h1 class=\"return-date\">Return</h1>\r\n        <div class=\"date-sec\">\r\n            <div class=\"flight-date\">\r\n                <p>Flight at 2019-03-24</p>\r\n            </div>\r\n\r\n            <div class=\"flight-sec\" draggable=\"true\" ondragstart=\"dragstart(event)\" ondragover=\"dragover(event)\" ondrop=\"drop(event)\">\r\n                <div class=\"f\">\r\n                    <div class=\"flight-info\">\r\n                        <div class=\"segments\">\r\n                            <div class=\"segment departure\">\r\n                                <time>KHH</time>\r\n                                <span class=\"airport\">8:00 AM(UTC+8)</span>\r\n                            </div>\r\n                            <div class=\"divider adaptive\">\r\n                                <span class=\"plane\"></span>\r\n                            </div>\r\n                            <div class=\"segment destination\">\r\n                                <time>HKG</time>\r\n                                <span class=\"airport\">9:25 AM(UTC+8)</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"flight-duration\">\r\n                        1h 20min Length of trip\r\n                    </div>\r\n                </div>\r\n                <div class=\"flight-price-sec\">\r\n                    <h1>6,740</h1>\r\n                </div>\r\n            </div>\r\n            <div class=\"flight-sec\" draggable=\"true\" ondragstart=\"dragstart(event)\" ondragover=\"dragover(event)\" ondrop=\"drop(event)\">\r\n                <div class=\"f\">\r\n                    <div class=\"flight-info\">\r\n                        <div class=\"segments\">\r\n                            <div class=\"segment departure\">\r\n                                <time>KHH</time>\r\n                                <span class=\"airport\">8:00 AM(UTC+8)</span>\r\n                            </div>\r\n                            <div class=\"divider adaptive\">\r\n                                <span class=\"plane\"></span>\r\n                            </div>\r\n                            <div class=\"segment destination\">\r\n                                <time>HKG</time>\r\n                                <span class=\"airport\">9:25 AM(UTC+8)</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"flight-duration\">\r\n                        1h 20min Length of trip\r\n                    </div>\r\n                </div>\r\n                <div class=\"flight-price-sec\">\r\n                    <h1>9,340</h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"date-sec\">\r\n            <div class=\"flight-date\">\r\n                <p>Flight at 2019-03-24</p>\r\n            </div>\r\n\r\n            <div class=\"flight-sec\" draggable=\"true\" ondragstart=\"dragstart(event)\" ondragover=\"dragover(event)\" ondrop=\"drop(event)\">\r\n                <div class=\"f\">\r\n                    <div class=\"flight-info\">\r\n                        <div class=\"segments\">\r\n                            <div class=\"segment departure\">\r\n                                <time>KHH</time>\r\n                                <span class=\"airport\">8:00 AM(UTC+8)</span>\r\n                            </div>\r\n                            <div class=\"divider adaptive\">\r\n                                <span class=\"plane\"></span>\r\n                            </div>\r\n                            <div class=\"segment destination\">\r\n                                <time>HKG</time>\r\n                                <span class=\"airport\">9:25 AM(UTC+8)</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"flight-duration\">\r\n                        1h 20min Length of trip\r\n                    </div>\r\n                </div>\r\n                <div class=\"flight-price-sec\">\r\n                    <h1>6,740</h1>\r\n                </div>\r\n            </div>\r\n            <div class=\"flight-sec\" draggable=\"true\" ondragstart=\"dragstart(event)\" ondragover=\"dragover(event)\" ondrop=\"drop(event)\">\r\n                <div class=\"f\">\r\n                    <div class=\"flight-info\">\r\n                        <div class=\"segments\">\r\n                            <div class=\"segment departure\">\r\n                                <time>KHH</time>\r\n                                <span class=\"airport\">8:00 AM(UTC+8)</span>\r\n                            </div>\r\n                            <div class=\"divider adaptive\">\r\n                                <span class=\"plane\"></span>\r\n                            </div>\r\n                            <div class=\"segment destination\">\r\n                                <time>HKG</time>\r\n                                <span class=\"airport\">9:25 AM(UTC+8)</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"flight-duration\">\r\n                        1h 20min Length of trip\r\n                    </div>\r\n                </div>\r\n                <div class=\"flight-price-sec\">\r\n                    <h1>9,340</h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/list-manager/list-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-manager/list-manager.component.ts ***!
  \********************************************************/
/*! exports provided: ListManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListManagerComponent", function() { return ListManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListManagerComponent = /** @class */ (function () {
    function ListManagerComponent() {
    }
    ListManagerComponent.prototype.ngOnInit = function () {
    };
    ListManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-manager',
            template: __webpack_require__(/*! ./list-manager.component.html */ "./src/app/list-manager/list-manager.component.html"),
            styles: [__webpack_require__(/*! ./list-manager.component.css */ "./src/app/list-manager/list-manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListManagerComponent);
    return ListManagerComponent;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mac\Desktop\flight-todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map