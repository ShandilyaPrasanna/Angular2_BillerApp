"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var UsersComponent = (function () {
    function UsersComponent(router, route) {
        this.router = router;
        this.route = route;
        this.userArry = [{ "id": "1", "name": "Himanshu", "detail": "Lives in Noida" },
            { "id": "2", "name": "Aman", "detail": "lives in Hyderabad" },
            { "id": "3", "name": "Shantanu", "detail": "lives in Delhi" },
            { "id": "4", "name": "Ujjwal", "detail": "lives in Bhopal" },
            { "id": "5", "name": "Rishabh", "detail": "lives in Allahabad" }];
    }
    UsersComponent.prototype.onSubmit = function (user) {
        console.log(user.detail);
        //	this.router.navigate(['/usersDetail',user.detail]); //ABSOLUTE PATHING means if path is changed in app-routing module it will not work
        this.router.navigate([user.detail], { relativeTo: this.route }); //RELATIVE PATHING..It will just append the present path with user.detail
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        template: "<h2>Users Component-List Of Users</h2>\n\n\t<ul class=\"items\">\n\t  <li *ngFor=\"let user of userArry\" (click)=\"onSubmit(user)\">\n\t    <span class=\"badge\" >{{user.id}}</span>{{user.name}}</li>\n\t  </ul>\n\t"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//--------------------------------------------------------------------
//For sending optional params you can use {} like->
//this.router.navigate(['/usersDetail',user.detail,{user.id}]);
//here user.id is optional params
//--------------------------------------------------------------------
//# sourceMappingURL=users.component.js.map