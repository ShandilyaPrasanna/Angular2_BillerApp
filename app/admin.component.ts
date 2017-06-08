import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({


	template:`<h2>Admin Page</h2>

	<button (click)="user()">ADD USER</button>
	<button (click)="biller()">ADD BILLERS</button>
	<button (click)="viewUser()">View Users</button>

	<div *ngIf="varUser">
    Enter User Name- <input type="text" #userName (keyup.enter)="addUser(userName.value)"/>
	</div>
	
	<div *ngIf="varBiller">
    Enter Biller Name- <input type="text" #billerName (keyup.enter)="addBiller(billerName.value)"/>
	</div>
	
	<div *ngIf="varShow">
	<ul>
	<li *ngFor="let users of userArray">{{users}}</li>
	</ul>
	</div>
	`
	})

	export class AdminComponent{
public varUser=false;
public varBiller=false;
public varShow=false;
public userArray=[];
public billerArray=[];

//constructor(private router:Router,private route:ActivatedRoute){}

user(){
this.varUser=((this.varUser==false)?true:false);
this.varShow=false;
this.varBiller=false;
console.log(this.varUser);
}
biller(){
this.varBiller=((this.varBiller==false)?true:false);
this.varShow=false;
this.varUser=false;
console.log(this.varBiller);
}
viewUser(){
	this.varUser=false;
	this.varBiller=false;
	this.varShow=((this.varShow==false)?true:false);
}
addUser(value){

	console.log("input",value);
	
		console.log(value);
		this.varUser=false;
		this.userArray.push(value);
		console.log(this.userArray);
}
addBiller(value){

	console.log("input",value);
	
		
		this.varBiller=false;
		this.billerArray.push(value);
        console.log(this.billerArray);
}
	}
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
