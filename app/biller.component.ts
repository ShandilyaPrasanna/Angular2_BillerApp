import { Component } from '@angular/core';

@Component({

	template:`<h2>Biller COMPONENT</h2>
	<button (click)="getUsers()">Get Users</button>
	
	<div *ngIf="varShow">
	<ul>
	<li  *ngFor="let users of userArry">{{users}}
       <div >
	      <button (click)="getBillers(users)">Add Biller</button>
	      
	        <div *ngIf="(users==varShow2)">
	          <ul >
	          <li *ngFor="let bill of billerArry">{{bill}}
                <button (click)="add(users,bill)">ADD</button>
	          </li>
	          </ul>
	        </div>
	      
	      <button (click)="viewBill(users)">View Bill</button>
	   </div>
	</li>
    
	</ul>
	</div>

	
	<p id="empty"></p>`

})

export class BillerComponent{
	public userArry=[];
	public userBiller={};
	public userbillArry=[];
	public billerArry=[];
	public varShow=false;
	public varShow1=false;
	public varShow2=false;

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

getBillers(user){


	//this.varShow1=true;
this.varShow2=user;
let storedData=JSON.parse(localStorage.getItem("Billers"));
if(storedData){
this.billerArry=storedData;
}

else{
	document.getElementById("empty").innerHTML="<h1>No Biller Found--Contact Admin</h1>";
}
}

add(user,biller){
	console.log(user,biller);
	let storedData=JSON.parse(localStorage.getItem("userBiller"));
    if(storedData && storedData[user]){
    	 if(storedData[user].indexOf(biller)<0){
    	this.userBiller=storedData;
    	console.log(this.userBiller[user]);
    	this.userBiller[user].push(biller);
    	console.log(this.userBiller);
      


            localStorage.setItem("userBiller", JSON.stringify(this.userBiller));  
            console.log("localstorage",JSON.parse(localStorage.getItem("userBiller")));

         }
        else{
           alert(user+ " you have already Subscribed to "+biller);
            }	
    
    }
    
    else{
    	if(storedData){
    		console.log("ARRAY PRESENT KEY NOT PRESENT");
       this.userBiller=storedData;
      
   }

       this.userbillArry.push(biller);
       let obj={[user]:this.userbillArry};
        this.userBiller= Object.assign({},this.userBiller,obj);
        
        localStorage.setItem("userBiller", JSON.stringify(this.userBiller));
        console.log("localstorage",JSON.parse(localStorage.getItem("userBiller"))); 
    }
    
}

viewBill(user){
	console.log("view Bill",user);
}

}
