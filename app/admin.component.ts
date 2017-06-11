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

	<p id="user"></p>
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
	document.getElementById("user").innerHTML="";
this.varUser=((this.varUser==false)?true:false);
this.varShow=false;
this.varBiller=false;
console.log(this.varUser);
}
biller(){
	document.getElementById("user").innerHTML="";
this.varBiller=((this.varBiller==false)?true:false);
this.varShow=false;
this.varUser=false;
console.log(this.varBiller);
}
viewUser(){
	this.varUser=false;
	this.varBiller=false;
	this.varShow=((this.varShow==false)?true:false);
	let storedData=JSON.parse(localStorage.getItem("Users"));
	console.log("data",storedData);
	if(storedData){
	this.userArray=storedData;
	console.log("Array",this.userArray);
	}

	else{
		document.getElementById("user").innerHTML="<h3>No User Found--Add user</h3>";
	}
	}

addUser(value){

	console.log("input",value);
let storedData=JSON.parse(localStorage.getItem("Users"));
	if(storedData){
	this.userArray=storedData;
	console.log("Array",this.userArray);
	}
		console.log(value);
		this.varUser=false;
		this.userArray.push(value);
		console.log(this.userArray);
		let arr =this.userArray;
		localStorage.setItem("Users", JSON.stringify(arr));
}
addBiller(value){

	console.log("input",value);
let storedData=JSON.parse(localStorage.getItem("Billers"));
	if(storedData){
	this.billerArray=storedData;
	}

		this.varBiller=false;
		this.billerArray.push(value);
        console.log(this.billerArray);
				let arr =this.billerArray;
				localStorage.setItem("Billers", JSON.stringify(arr));

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
