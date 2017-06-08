"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_component_1 = require("./admin.component");
var biller_component_1 = require("./biller.component");
var users_detail_component_1 = require("./users.detail.component");
var pageNotFound_component_1 = require("./pageNotFound.component");
var routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'user', component: biller_component_1.BillerComponent },
    //{path:'users/:det',component:UsersDetailComponent},
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent } //when wrong url is given
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComonents = [admin_component_1.AdminComponent, biller_component_1.BillerComponent, users_detail_component_1.UsersDetailComponent, pageNotFound_component_1.PageNotFoundComponent];
//# sourceMappingURL=app-routing.module.js.map