"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BillerComponent = (function () {
    function BillerComponent() {
        this.userArry = [];
        this.billerArry = [];
        this.varShow = false;
        this.varShow1 = false;
    }
    BillerComponent.prototype.getUsers = function () {
        console.log("button clicked");
        this.varShow = true;
        this.varShow1 = false;
        var storedData = JSON.parse(localStorage.getItem("Users"));
        if (storedData) {
            this.userArry = storedData;
        }
        else {
            document.getElementById("empty").innerHTML = "<h1>No User Found--Contact Admin</h1>";
        }
    };
    BillerComponent.prototype.getBillers = function () {
        this.varShow = false;
        this.varShow1 = true;
        var storedData = JSON.parse(localStorage.getItem("Billers"));
        if (storedData) {
            this.billerArry = storedData;
        }
        else {
            document.getElementById("empty").innerHTML = "<h1>No Biller Found--Contact Admin</h1>";
        }
    };
    return BillerComponent;
}());
BillerComponent = __decorate([
    core_1.Component({
        template: "<h2>Biller COMPONENT</h2>\n\t<button (click)=\"getUsers()\">Get Users</button>\n\t<button (click)=\"getBillers()\">Get Billers</button>\n\t<div *ngIf=\"varShow\">\n\t<ul>\n\t<li  *ngFor=\"let users of userArry\">{{users}}</li>\n\t</ul>\n\t</div>\n\n\t<div *ngIf=\"varShow1\">\n\t<ul >\n\t<li *ngFor=\"let users of billerArry\">{{users}}</li>\n\t</ul>\n\t</div>\n\t<p id=\"empty\"></p>"
    })
], BillerComponent);
exports.BillerComponent = BillerComponent;
//# sourceMappingURL=biller.component.js.map