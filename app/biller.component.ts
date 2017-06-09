import { Component } from '@angular/core';

@Component({

	template:`<h2>Biller COMPONENT</h2>
	<button (click)="getUsers()">Get Users</button>
	<button (click)="getBillers()">Get Billers</button>
	<div *ngIf="varShow">
	<ul>
	<li  *ngFor="let users of userArry">{{users}}</li>
	</ul>
	</div>

	<div *ngIf="varShow1">
	<ul >
	<li *ngFor="let users of billerArry">{{users}}</li>
	</ul>
	</div>
	<p id="empty"></p>`

})

export class BillerComponent{
	public userArry=[];
	public billerArry=[];
	public varShow=false;
	public varShow1=false;

	getUsers(){
		console.log("button clicked");
		this.varShow=true;
		this.varShow1=false;

	let storedData=JSON.parse(localStorage.getItem("Users"));
	if(storedData){
  this.userArry=storedData;
}
else{
	document.getElementById("empty").innerHTML="<h1>No User Found--Contact Admin</h1>";
}}
getBillers(){

	this.varShow=false;
	this.varShow1=true;

let storedData=JSON.parse(localStorage.getItem("Billers"));
if(storedData){
this.billerArry=storedData;
}

else{
	document.getElementById("empty").innerHTML="<h1>No Biller Found--Contact Admin</h1>";
}
}
}
