"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AdminComponent = (function () {
    function AdminComponent() {
        this.varUser = false;
        this.varBiller = false;
        this.varShow = false;
        this.userArray = [];
        this.billerArray = [];
    }
    //constructor(private router:Router,private route:ActivatedRoute){}
    AdminComponent.prototype.user = function () {
        document.getElementById("user").innerHTML = "";
        this.varUser = ((this.varUser == false) ? true : false);
        this.varShow = false;
        this.varBiller = false;
        console.log(this.varUser);
    };
    AdminComponent.prototype.biller = function () {
        document.getElementById("user").innerHTML = "";
        this.varBiller = ((this.varBiller == false) ? true : false);
        this.varShow = false;
        this.varUser = false;
        console.log(this.varBiller);
    };
    AdminComponent.prototype.viewUser = function () {
        this.varUser = false;
        this.varBiller = false;
        this.varShow = ((this.varShow == false) ? true : false);
        var storedData = JSON.parse(localStorage.getItem("Users"));
        console.log("data", storedData);
        if (storedData) {
            this.userArray = storedData;
            console.log("Array", this.userArray);
        }
        else {
            document.getElementById("user").innerHTML = "<h3>No User Found--Add user</h3>";
        }
    };
    AdminComponent.prototype.addUser = function (value) {
        console.log("input", value);
        var storedData = JSON.parse(localStorage.getItem("Users"));
        if (storedData) {
            this.userArray = storedData;
            console.log("Array", this.userArray);
        }
        console.log(value);
        this.varUser = false;
        this.userArray.push(value);
        console.log(this.userArray);
        var arr = this.userArray;
        localStorage.setItem("Users", JSON.stringify(arr));
    };
    AdminComponent.prototype.addBiller = function (value) {
        console.log("input", value);
        var storedData = JSON.parse(localStorage.getItem("Billers"));
        if (storedData) {
            this.billerArray = storedData;
        }
        this.varBiller = false;
        this.billerArray.push(value);
        console.log(this.billerArray);
        var arr = this.billerArray;
        localStorage.setItem("Billers", JSON.stringify(arr));
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        template: "<h2>Admin Page</h2>\n\n\t<button (click)=\"user()\">ADD USER</button>\n\t<button (click)=\"biller()\">ADD BILLERS</button>\n\t<button (click)=\"viewUser()\">View Users</button>\n\n\t<div *ngIf=\"varUser\">\n    Enter User Name- <input type=\"text\" #userName (keyup.enter)=\"addUser(userName.value)\"/>\n\t</div>\n\n\t<div *ngIf=\"varBiller\">\n    Enter Biller Name- <input type=\"text\" #billerName (keyup.enter)=\"addBiller(billerName.value)\"/>\n\t</div>\n\n\t<div *ngIf=\"varShow\">\n\t<ul>\n\t<li *ngFor=\"let users of userArray\">{{users}}</li>\n\t</ul>\n\t</div>\n\n\t<p id=\"user\"></p>\n\t"
    })
], AdminComponent);
exports.AdminComponent = AdminComponent;
/*
onSubmit(user){
console.log(user.detail);
//	this.router.navigate(['/usersDetail',user.detail]); //ABSOLUTE PATHING means if path is changed in app-routing module it will not work

this.router.navigate([user.detail],{relativeTo:this.route}); //RELATIVE PATHING..It will just append the present path with user.detail
 }
}
*/
//--------------------------------------------------------------------
//For sending optional params you can use {} like->
//this.router.navigate(['/usersDetail',user.detail,{user.id}]);
//here user.id is optional params
//--------------------------------------------------------------------
//# sourceMappingURL=admin.component.js.map