import { NgModule }      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AdminComponent}  from './admin.component';
import {BillerComponent} from './biller.component';
import {UsersDetailComponent} from './users.detail.component';
import {PageNotFoundComponent} from './pageNotFound.component';

 const routes:Routes=[
 {path:'' , redirectTo:'/admin',pathMatch:'full'},      
 {path:'admin' , component:AdminComponent},
 {path:'user',component:BillerComponent},

 {path:'**' , component:PageNotFoundComponent}            
 ];

 @NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
 })

 export class AppRoutingModule{}
 export const routingComonents=[AdminComponent,BillerComponent,UsersDetailComponent,PageNotFoundComponent]
