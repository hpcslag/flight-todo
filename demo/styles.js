(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* main styles*/\r\nbody,\r\nhtml {\r\n    background: #e6e6e6;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\ninput {\r\n    cursor: pointer;\r\n}\r\n.f-input {\r\n    display: inline-block;\r\n    padding: 0.6em 1em;\r\n    border: none;\r\n    font-size: 1.2em;\r\n    outline: none;\r\n    /*box-shadow: 0 0 1em 0.25em rgba(0,0,0,0.2);*/\r\n    color: #7b7b7b;\r\n    border-radius: 0.2em;\r\n    background: #e6e6e6;\r\n}\r\n.f-input:hover {\r\n    color: #000 !important;\r\n    background: #ccc;\r\n}\r\n.sel {\r\n    font-size: 0.9em;\r\n    width: 80px;\r\n    color: #848484;\r\n}\r\n.sel-date {\r\n    width: 188px;\r\n    display: -webkit-inline-box;\r\n}\r\n#origin,\r\n#dest {\r\n    vertical-align: middle;\r\n}\r\n#origin {\r\n    margin-right: 25px;\r\n}\r\n.f-input::-webkit-input-placeholder {\r\n    color: #848484;\r\n}\r\n.f-input::-ms-input-placeholder {\r\n    color: #848484;\r\n}\r\n.f-input::placeholder {\r\n    color: #848484;\r\n}\r\n#od-sec {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 2em auto;\r\n    display: inline-block;\r\n    height: 70px;\r\n    line-height: 70px;\r\n}\r\n#sel-datetime {\r\n    width: 220px;\r\n    display: inline-block;\r\n    height: 171px;\r\n    vertical-align: middle;\r\n    margin-left: 25px;\r\n    text-align: center;\r\n}\r\n#information {\r\n    vertical-align: top;\r\n    background: #fff;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n    padding: 30px;\r\n    margin: 0px auto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n#information input:checked {\r\n    background: #2aa1c0;\r\n}\r\n#travel-type {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    display: inline-block;\r\n    margin-left: 25px;\r\n    vertical-align: middle;\r\n}\r\n.add-data {\r\n    margin-left: 25px;\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    fill: #d0d0d0;\r\n    cursor: pointer;\r\n}\r\n.add-data:hover {\r\n    fill: #848484;\r\n}\r\n#code * {\r\n    margin-bottom: 0px;\r\n}\r\n.price-sec {\r\n    display: inline-block;\r\n    margin-left: 25px;\r\n    vertical-align: middle;\r\n}\r\n.pick-sec {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 0px auto;\r\n    padding: 35px;\r\n}\r\n.side {\r\n    float: left;\r\n    width: 540px;\r\n}\r\n.side:first-child {\r\n    margin-right: 60px;\r\n}\r\n.flight-sec {\r\n    background: white;\r\n    margin-bottom: 25px;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n    cursor: pointer;\r\n}\r\n.f {\r\n    width: 350px;\r\n    display: inline-block;\r\n    border-right: 1px solid #d2d2d2;\r\n    padding: 15px 25px;\r\n}\r\n.flight-price-sec {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  font-size: 100%;\r\n  text-align: center;\r\n  width: 139px;\r\n  position: relative;\r\n  top: 30px;\r\n}\r\n.flight-price-sec h1 {\r\n    margin: 0px;\r\n}\r\n.flight-sec * {\r\n    user-select: none;\r\n    /* supported by Chrome and Opera */\r\n    -webkit-user-select: none;\r\n    /* Safari */\r\n    -khtml-user-select: none;\r\n    /* Konqueror HTML */\r\n    -moz-user-select: none;\r\n    /* Firefox */\r\n    -ms-user-select: none;\r\n    /* Internet Explorer/Edge */\r\n    /* https://stackoverflow.com/questions/10867506/dragleave-of-parent-element-fires-when-dragging-over-children-elements */\r\n    pointer-events: none;\r\n}\r\n.flight-date {\r\n    font-weight: bold;\r\n    color: #9a9a9a;\r\n    text-shadow: 0 1px #fff;\r\n}\r\n.outbound-date {\r\n    font-size: 1em;\r\n    padding: 5px 10px;\r\n    background: #477754;\r\n    color: white;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.return-date {\r\n    font-size: 1em;\r\n    padding: 5px 10px;\r\n    background: #474877;\r\n    color: white;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.date-sec {\r\n    margin-top: 40px;\r\n}\r\n.outer-container {\r\n    margin-top: 35px;\r\n}\r\n.flight-date{\r\n    /* date section disable select */\r\n    pointer-events: none;\r\n}\r\n.delete {\r\n  position: absolute;\r\n  display: inline-block;\r\n\r\n  z-index: 100;\r\n}\r\n.delete * {\r\n  pointer-events: visible;\r\n}\r\n.delete span{\r\n  background: #de5d5d;\r\n  position: relative;\r\n  padding: 2px 6px;\r\n  border-radius: 60px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  left: -10px;\r\n  top: -8px;\r\n  color: white;\r\n}\r\n.delete span:hover{\r\n  background: #b54646;\r\n}\r\n.delete span:active{\r\n  background: #692b2b;\r\n}\r\n/* dependency */\r\n.control-group {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    background: #fff;\r\n    text-align: left;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n    padding: 30px;\r\n    width: 200px;\r\n    height: 210px;\r\n    margin: 10px;\r\n}\r\n.control {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n}\r\n.control input {\r\n    position: absolute;\r\n    z-index: -1;\r\n    opacity: 0;\r\n}\r\n.control__indicator {\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background: #e6e6e6;\r\n}\r\n.control--radio .control__indicator {\r\n    border-radius: 50%;\r\n}\r\n.control:hover input~.control__indicator,\r\n.control input:focus~.control__indicator {\r\n    background: #ccc;\r\n}\r\n.control input:checked~.control__indicator {\r\n    background: #2aa1c0;\r\n}\r\n.control:hover input:not([disabled]):checked~.control__indicator,\r\n.control input:checked:focus~.control__indicator {\r\n    background: #0e647d;\r\n}\r\n.control input:disabled~.control__indicator {\r\n    background: #e6e6e6;\r\n    opacity: 0.6;\r\n    pointer-events: none;\r\n}\r\n.control__indicator:after {\r\n    content: '';\r\n    position: absolute;\r\n    display: none;\r\n}\r\n.control input:checked~.control__indicator:after {\r\n    display: block;\r\n}\r\n.control--checkbox .control__indicator:after {\r\n    left: 8px;\r\n    top: 4px;\r\n    width: 3px;\r\n    height: 8px;\r\n    border: solid #fff;\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n}\r\n.control--checkbox input:disabled~.control__indicator:after {\r\n    border-color: #7b7b7b;\r\n}\r\n.control--radio .control__indicator:after {\r\n    left: 7px;\r\n    top: 7px;\r\n    height: 6px;\r\n    width: 6px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n}\r\n.control--radio input:disabled~.control__indicator:after {\r\n    background: #7b7b7b;\r\n}\r\n.flight-duration {\r\n    max-width: 430px;\r\n    margin: -14px auto 0 auto;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    color: rgba(0, 0, 0, 0.4);\r\n    position: relative;\r\n    z-index: 4;\r\n}\r\n.flight-info * {\r\n    font-family: Helvetica, Arial, sans-serif;\r\n}\r\n.flight-info {\r\n    position: relative;\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n    max-width: 430px;\r\n    margin: 0 auto;\r\n    border-collapse: collapse;\r\n}\r\n.flight-info:after {\r\n    content: '';\r\n    width: 100%;\r\n    height: 1px;\r\n    position: absolute;\r\n    top: 20px;\r\n    display: block;\r\n    background: #666;\r\n    z-index: 0;\r\n}\r\n.flight-info .segments {\r\n    display: table-row;\r\n}\r\n.flight-info .segments>div {\r\n    display: table-cell;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n.flight-info .segments .airport {\r\n    display: block;\r\n    font-size: 12px;\r\n    color: rgba(0, 0, 0, 0.4);\r\n}\r\n.flight-info .segments .airport:only-child {\r\n    line-height: 40px;\r\n}\r\n.flight-info .segments .plane {\r\n    width: 36px;\r\n    height: 36px;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    display: block;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    top: 0;\r\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDI1Ij48cGF0aCBkPSJNNDYuMiwxMS4zYy0wLjktMS43LTMtMi4yLTQuNy0xLjNsLTEwLjcsNi4zbC0xNi02LjZsLTMuNSwyTDIyLDIxLjZMMTIuNiwyN0wyLjIsMjUuM0wwLDI2LjZsOC40LDYuN2wwLDBsMCwwbDAsMGwwLDBjNC44LTAuMyw1LjUtMC40LDgtMC42TDQ0LjksMTZDNDYuNSwxNS4xLDQ3LjEsMTMsNDYuMiwxMS4zeiIgc3R5bGU9ImZpbGw6IHJnYigxMTgsIDExOCwgMTE4KTsiLz48L3N2Zz4=\");\r\n    background-size: 50% 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    z-index: 2;\r\n}\r\n.flight-info .segments time {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    line-height: 40px;\r\n}\r\n.flight-info .segments .segment {\r\n    width: 60px;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 3;\r\n    padding: 0 8px;\r\n}\r\n.flight-info .segments .departure {\r\n    padding: 0 8px 0 0;\r\n}\r\n.flight-info .segments .destination {\r\n    padding: 0 0 0 8px;\r\n}\r\n/* auto complete*/\r\n.autocomplete {\r\n  /*the container must be positioned relative:*/\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n.autocomplete-items {\r\n  position: absolute;\r\n  border: 1px solid #d4d4d4;\r\n  border-bottom: none;\r\n  border-top: none;\r\n  z-index: 99;\r\n  /*position the autocomplete items to be the same width as the container:*/\r\n  top: 84%;\r\n  left: 0;\r\n  right: 0;\r\n  width: 245px;\r\n}\r\n.autocomplete-items div {\r\n  padding: 0px 15px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #d4d4d4;\r\n}\r\n.autocomplete-items div:hover {\r\n  /*when hovering an item:*/\r\n  background-color: #e9e9e9;\r\n}\r\n.autocomplete-active {\r\n  /*when navigating through the items using the arrow keys:*/\r\n  background-color: DodgerBlue !important;\r\n  color: #ffffff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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LGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUVBQXlFO0VBQ3pFLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwwREFBMEQ7RUFDMUQsdUNBQXVDO0VBQ3ZDLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBtYWluIHN0eWxlcyovXHJcbmJvZHksXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjZlbSAxZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qYm94LXNoYWRvdzogMCAwIDFlbSAwLjI1ZW0gcmdiYSgwLDAsMCwwLjIpOyovXHJcbiAgICBjb2xvcjogIzdiN2I3YjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxufVxyXG5cclxuLmYtaW5wdXQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi5zZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgY29sb3I6ICM4NDg0ODQ7XHJcbn1cclxuXHJcbi5zZWwtZGF0ZSB7XHJcbiAgICB3aWR0aDogMTg4cHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbn1cclxuXHJcbiNvcmlnaW4sXHJcbiNkZXN0IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbiNvcmlnaW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uZi1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM4NDg0ODQ7XHJcbn1cclxuXHJcbiNvZC1zZWMge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4jc2VsLWRhdGV0aW1lIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMTcxcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNpbmZvcm1hdGlvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuI2luZm9ybWF0aW9uIGlucHV0OmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzJhYTFjMDtcclxufVxyXG5cclxuI3RyYXZlbC10eXBlIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmFkZC1kYXRhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZpbGw6ICNkMGQwZDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtZGF0YTpob3ZlciB7XHJcbiAgICBmaWxsOiAjODQ4NDg0O1xyXG59XHJcblxyXG4jY29kZSAqIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnByaWNlLXNlYyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5waWNrLXNlYyB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMzVweDtcclxufVxyXG5cclxuLnNpZGUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTQwcHg7XHJcbn1cclxuXHJcbi5zaWRlOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxufVxyXG5cclxuLmZsaWdodC1zZWMge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmYge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QyZDJkMjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxufVxyXG5cclxuLmZsaWdodC1wcmljZS1zZWMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEzOXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mbGlnaHQtcHJpY2Utc2VjIGgxIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uZmxpZ2h0LXNlYyAqIHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLyogc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAvKiBTYWZhcmkgKi9cclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC8qIEtvbnF1ZXJvciBIVE1MICovXHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLyogRmlyZWZveCAqL1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG4gICAgLyogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA4Njc1MDYvZHJhZ2xlYXZlLW9mLXBhcmVudC1lbGVtZW50LWZpcmVzLXdoZW4tZHJhZ2dpbmctb3Zlci1jaGlsZHJlbi1lbGVtZW50cyAqL1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5mbGlnaHQtZGF0ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjOWE5YTlhO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4ICNmZmY7XHJcbn1cclxuXHJcbi5vdXRib3VuZC1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDc3NzU0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ucmV0dXJuLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM0NzQ4Nzc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5kYXRlLXNlYyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ub3V0ZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuXHJcbi5mbGlnaHQtZGF0ZXtcclxuICAgIC8qIGRhdGUgc2VjdGlvbiBkaXNhYmxlIHNlbGVjdCAqL1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmRlbGV0ZSAqIHtcclxuICBwb2ludGVyLWV2ZW50czogdmlzaWJsZTtcclxufVxyXG5cclxuLmRlbGV0ZSBzcGFue1xyXG4gIGJhY2tncm91bmQ6ICNkZTVkNWQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHRvcDogLThweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kZWxldGUgc3Bhbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjYjU0NjQ2O1xyXG59XHJcblxyXG4uZGVsZXRlIHNwYW46YWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICM2OTJiMmI7XHJcbn1cclxuXHJcbi8qIGRlcGVuZGVuY3kgKi9cclxuXHJcbi5jb250cm9sLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY29udHJvbCBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG59XHJcblxyXG4uY29udHJvbC0tcmFkaW8gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jb250cm9sOmhvdmVyIGlucHV0fi5jb250cm9sX19pbmRpY2F0b3IsXHJcbi5jb250cm9sIGlucHV0OmZvY3Vzfi5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZH4uY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICMyYWExYzA7XHJcbn1cclxuXHJcbi5jb250cm9sOmhvdmVyIGlucHV0Om5vdChbZGlzYWJsZWRdKTpjaGVja2Vkfi5jb250cm9sX19pbmRpY2F0b3IsXHJcbi5jb250cm9sIGlucHV0OmNoZWNrZWQ6Zm9jdXN+LmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGU2NDdkO1xyXG59XHJcblxyXG4uY29udHJvbCBpbnB1dDpkaXNhYmxlZH4uY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250cm9sIGlucHV0OmNoZWNrZWR+LmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNvbnRyb2wtLWNoZWNrYm94IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uY29udHJvbC0tY2hlY2tib3ggaW5wdXQ6ZGlzYWJsZWR+LmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM3YjdiN2I7XHJcbn1cclxuXHJcbi5jb250cm9sLS1yYWRpbyAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICAgIGxlZnQ6IDdweDtcclxuICAgIHRvcDogN3B4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRyb2wtLXJhZGlvIGlucHV0OmRpc2FibGVkfi5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzdiN2I3YjtcclxufVxyXG5cclxuLmZsaWdodC1kdXJhdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDQzMHB4O1xyXG4gICAgbWFyZ2luOiAtMTRweCBhdXRvIDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG4uZmxpZ2h0LWluZm8gKiB7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZsaWdodC1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgbWF4LXdpZHRoOiA0MzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLmZsaWdodC1pbmZvOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5mbGlnaHQtaW5mbyAuc2VnbWVudHMge1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcblxyXG4uZmxpZ2h0LWluZm8gLnNlZ21lbnRzPmRpdiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZmxpZ2h0LWluZm8gLnNlZ21lbnRzIC5haXJwb3J0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLmZsaWdodC1pbmZvIC5zZWdtZW50cyAuYWlycG9ydDpvbmx5LWNoaWxkIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZmxpZ2h0LWluZm8gLnNlZ21lbnRzIC5wbGFuZSB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZG1sbGQwSnZlRDBpTUNBd0lEVXdJREkxSWo0OGNHRjBhQ0JrUFNKTk5EWXVNaXd4TVM0ell5MHdMamt0TVM0M0xUTXRNaTR5TFRRdU55MHhMak5zTFRFd0xqY3NOaTR6YkMweE5pMDJMalpzTFRNdU5Td3lUREl5TERJeExqWk1NVEl1Tml3eU4wd3lMaklzTWpVdU0wd3dMREkyTGpac09DNDBMRFl1TjJ3d0xEQnNNQ3d3YkRBc01Hd3dMREJqTkM0NExUQXVNeXcxTGpVdE1DNDBMRGd0TUM0MlREUTBMamtzTVRaRE5EWXVOU3d4TlM0eExEUTNMakVzTVRNc05EWXVNaXd4TVM0emVpSWdjM1I1YkdVOUltWnBiR3c2SUhKbllpZ3hNVGdzSURFeE9Dd2dNVEU0S1RzaUx6NDhMM04yWno0PVwiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmZsaWdodC1pbmZvIC5zZWdtZW50cyB0aW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5mbGlnaHQtaW5mbyAuc2VnbWVudHMgLnNlZ21lbnQge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG59XHJcblxyXG4uZmxpZ2h0LWluZm8gLnNlZ21lbnRzIC5kZXBhcnR1cmUge1xyXG4gICAgcGFkZGluZzogMCA4cHggMCAwO1xyXG59XHJcblxyXG4uZmxpZ2h0LWluZm8gLnNlZ21lbnRzIC5kZXN0aW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCA4cHg7XHJcbn1cclxuXHJcbi8qIGF1dG8gY29tcGxldGUqL1xyXG4uYXV0b2NvbXBsZXRlIHtcclxuICAvKnRoZSBjb250YWluZXIgbXVzdCBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlOiovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmF1dG9jb21wbGV0ZS1pdGVtcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIC8qcG9zaXRpb24gdGhlIGF1dG9jb21wbGV0ZSBpdGVtcyB0byBiZSB0aGUgc2FtZSB3aWR0aCBhcyB0aGUgY29udGFpbmVyOiovXHJcbiAgdG9wOiA4NCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMjQ1cHg7XHJcbn1cclxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXYge1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG59XHJcbi5hdXRvY29tcGxldGUtaXRlbXMgZGl2OmhvdmVyIHtcclxuICAvKndoZW4gaG92ZXJpbmcgYW4gaXRlbToqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbn1cclxuLmF1dG9jb21wbGV0ZS1hY3RpdmUge1xyXG4gIC8qd2hlbiBuYXZpZ2F0aW5nIHRocm91Z2ggdGhlIGl0ZW1zIHVzaW5nIHRoZSBhcnJvdyBrZXlzOiovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mac\Desktop\flight-todo\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map