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
        this.userBiller = {};
        this.userbillArry = [];
        this.billerArry = [];
        this.varShow = false;
        this.pendinBill = [];
        this.varShow1 = false;
        this.varShow2 = false;
        this.varShow3 = false;
        this.varShow4 = false;
        this.varShow5 = false;
        this.billerPayArry = [];
        this.billerGenArry = [];
        this.geBill = {};
        this.flag = true;
    }
    BillerComponent.prototype.shBill = function (user) {
        this.varShow5 = false;
        this.varShow1 = false;
        this.varShow2 = false;
        this.varShow3 = false;
        this.varShow4 = user;
        console.log(this.varShow4, user);
        //localStorage.setItem(user, JSON.stringify(this.userBiller));
        //let storedData=JSON.parse(localStorage.getItem("userBiller"));
        var storedData = JSON.parse(localStorage.getItem(user));
        console.log(storedData);
        if (storedData) {
            this.billerPayArry = Object.keys(storedData);
            console.log(this.billerPayArry);
            console.log(this.billerPayArry);
        }
        //
    };
    BillerComponent.prototype.payBill = function (user, bill) {
        var storedData = JSON.parse(localStorage.getItem(user));
        console.log(storedData);
        if (storedData) {
            var arry = storedData;
            this.mon = arry[bill][0];
            this.price = arry[bill][1];
            this.varShow5 = bill;
        }
    };
    BillerComponent.prototype.billPaied = function (user, bill) {
        var storedData = JSON.parse(localStorage.getItem(user));
        if (storedData) {
            console.log(storedData);
            delete storedData[bill];
            console.log(storedData);
            localStorage.setItem(user, JSON.stringify(storedData));
        }
        var id = bill;
        document.getElementById(id).innerHTML = "<h1>Payment Done</h1>";
        alert(user + " Payement was Successfull for " + bill);
    };
    BillerComponent.prototype.getUsers = function () {
        this.varShow4 = false;
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
    BillerComponent.prototype.getBillers = function (user) {
        this.varShow4 = false;
        this.varShow3 = false;
        this.varShow1 = false;
        this.varShow2 = user;
        var storedData = JSON.parse(localStorage.getItem("Billers"));
        if (storedData) {
            this.billerArry = storedData;
        }
        else {
            document.getElementById("empty").innerHTML = "<h1>No Biller Found--Contact Admin</h1>";
        }
    };
    BillerComponent.prototype.shgen = function (user, bill) {
        this.varShow3 = bill;
        this.varShow4 = false;
        console.log("generate Bill", user, bill);
    };
    BillerComponent.prototype.add = function (user, biller) {
        console.log(user, biller);
        var storedData = JSON.parse(localStorage.getItem("userBiller"));
        if (storedData && storedData[user]) {
            if (storedData[user].indexOf(biller) < 0) {
                this.userBiller = storedData;
                console.log(this.userBiller[user]);
                this.userBiller[user].push(biller);
                console.log(this.userBiller);
                localStorage.setItem("userBiller", JSON.stringify(this.userBiller));
                console.log("localstorage", JSON.parse(localStorage.getItem("userBiller")));
                this.userbillArry = [];
                this.userBiller = {};
            }
            else {
                alert(user + " you have already Subscribed to " + biller);
            }
        }
        else {
            if (storedData) {
                console.log("ARRAY PRESENT KEY NOT PRESENT");
                this.userBiller = storedData;
            }
            this.userbillArry.push(biller);
            var obj = (_a = {}, _a[user] = this.userbillArry, _a);
            this.userBiller = Object.assign({}, this.userBiller, obj);
            localStorage.setItem("userBiller", JSON.stringify(this.userBiller));
            console.log("localstorage", JSON.parse(localStorage.getItem("userBiller")));
            this.userbillArry = [];
            this.userBiller = {};
        }
        var _a;
    };
    BillerComponent.prototype.viewBill = function (user, bill) {
        console.log("view Bill", user, bill);
        this.varShow1 = user;
        this.varShow2 = false;
        this.varShow3 = false;
        this.varShow4 = false;
        var storedData = JSON.parse(localStorage.getItem("userBiller"));
        if (storedData) {
            this.billerGenArry = storedData[user];
            console.log(storedData, this.billerGenArry);
        }
        else {
            document.getElementById("empty").innerHTML = "<h2>No Pending Bill</h2>";
        }
    };
    BillerComponent.prototype.genBill = function (user, bill, mon, amt) {
        if (document.getElementById(bill).innerHTML == "Bill Generated") {
            alert(user + "BilL Already generated for " + bill);
        }
        else {
            var storedData = JSON.parse(localStorage.getItem(user));
            console.log("storedDATA", storedData);
            if (storedData) {
                console.log("Inside if 1");
                if (typeof (storedData[bill]) == "undefined") {
                    console.log("Inside if undefined");
                    this.userBiller = storedData;
                    this.flag = true;
                }
            }
            if (this.flag || !storedData) {
                console.log("Inside if 2");
                this.userbillArry.push(mon);
                this.userbillArry.push(amt);
                this.userbillArry.push(false);
                var obj = (_a = {}, _a[bill] = this.userbillArry, _a);
                this.userBiller = Object.assign({}, this.userBiller, obj);
                localStorage.setItem(user, JSON.stringify(this.userBiller));
                console.log("localstorage", JSON.parse(localStorage.getItem(user)));
                var arry = JSON.parse(localStorage.getItem("userBiller"));
                console.log(arry[user]);
                var index = arry[user].indexOf(bill);
                console.log(index);
                if (index > -1) {
                    console.log("Inside if index");
                    arry[user].splice(index, 1);
                    console.log(arry[user]);
                    localStorage.setItem("userBiller", JSON.stringify(arry));
                }
                this.userbillArry = [];
                this.userBiller = {};
                this.flag = false;
            }
            if (this.varShow3 == bill) {
                document.getElementById(bill).innerHTML = "Bill Generated";
                this.varShow3 = false;
            }
        }
        var _a;
    };
    return BillerComponent;
}());
BillerComponent = __decorate([
    core_1.Component({
        template: "<h2>USER Page</h2>\n\t<button class=\"btn btn-primary btn-lg\" (click)=\"getUsers()\">Get Users</button>\n\n\t<div *ngIf=\"varShow\">\n\t<ul>\n\t<li  *ngFor=\"let users of userArry\">\n\n\t<div class=\"container\">\n\t  <div class=\"jumbotron\">\n\t    <h2>{{users}}</h2>\n\n       <div >\n\t      <button class=\"btn btn-warning\" (click)=\"getBillers(users)\">Add Biller</button>\n\t       <button class=\"btn btn-warning\" (click)=\"viewBill(users)\">Generate Bill</button>\n\t        <button class=\"btn btn-warning\" (click)=\"shBill(users)\">Pay Bill</button>\n<br><br>\n\t        <div *ngIf=\"(users==varShow2)\">\n\t          <ul >\n\t          <li *ngFor=\"let bill of billerArry\">{{bill}}\n                <button class=\"btn btn-success pull-right\"(click)=\"add(users,bill)\">ADD</button><br><br>\n\t          </li>\n\n\t          </ul>\n\t        </div>\n\n\t      <div *ngIf=\"(users==varShow1)\">\n\t          <ul >\n\t          <li *ngFor=\"let bill of billerGenArry\">{{bill}}\n                <button class=\"btn btn-success pull-right\"id={{bill}} (click)=\"shgen(users,bill)\">Generate Bill</button><br><br>\n                <div id=\"genDiv\" *ngIf=\"(bill==varShow3)\">\n\n\n\t\t\t\t\t\t\t\t      <label >ENTER BILL MONTH</label>\n\t\t\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" #billMonth>\n\n\n\t\t\t\t\t\t\t\t        <label >ENTER BILL Amount</label>\n\t\t\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" #billAmount>\n\n\n\n            <br><br>    <button class=\"btn btn-danger pull-right\" (click)=\"genBill(users,bill,billMonth.value,billAmount.value)\">Generate</button><br><br><br>\n\t            </div>\n\t          </li>\n\t          </ul>\n\t        </div>\n\n\t\t\t\t\t<div *ngIf=\"(users==varShow4)\">\n\t          <ul >\n\t          <li *ngFor=\"let bill of billerPayArry\">{{bill}}\n               <button class=\"btn btn-success\" (click)=\"payBill(users,bill)\">PAY BILL</button>\n\t\t\t\t\t\t\t <div id={{bill}} *ngIf=\"(bill==varShow5)\">\n     Bill Month-{{mon}}  Bill Amount={{price}}\n\t\t <button class=\"btn btn-danger\"(click)=billPaied(users,bill)>Pay Now</button>\n\t\t\t\t\t\t\t </div>\n\t          </li>\n\t          </ul>\n\t        </div>\n\n\t   </div>\n\t\t </div>\n\t </div></li>\n\n\t</ul>\n\t</div>\n\n\n\t<p id=\"empty\"></p>"
    })
], BillerComponent);
exports.BillerComponent = BillerComponent;
//# sourceMappingURL=biller.component.js.map