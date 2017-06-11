import { Component } from '@angular/core';

@Component({

	template:`<h2>Biller COMPONENT</h2>
	<button (click)="getUsers()">Get Users</button>
	
	<div *ngIf="varShow">
	<ul>
	<li  *ngFor="let users of userArry">{{users}}
       <div >
	      <button (click)="getBillers(users)">Add Biller</button>
	       <button (click)="viewBill(users)">View Bill</button>
	       
	        <div *ngIf="(users==varShow2)">
	          <ul >
	          <li *ngFor="let bill of billerArry">{{bill}}
                <button (click)="add(users,bill)">ADD</button>
	          </li>
	          </ul>
	        </div>
	      
	      <div *ngIf="(users==varShow1)">
	          <ul >
	          <li *ngFor="let bill of billerArry">{{bill}}
                <button id="btnGen"(click)="shgen(users,bill)">Generate Bill</button>
                <div *ngIf="(bill==varShow3)">
                <input #billMonth placeHolder="ENTER BILL MONTH" />
                <Input #billAmount placeHolder="ENTER BILL Amount" />
                <button (click)="genBill(users,bill,billMonth.value,billAmount.value)">Generate</button>
	            </div>          
	          </li>
	          </ul>
	        </div>
	     
	   </div>
	<br><hr><br></li>
    
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
	public varShow3=false;
	public geBill={};
	public flag=true;


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

this.varShow3=false;
this.varShow1=false;
this.varShow2=user;
let storedData=JSON.parse(localStorage.getItem("Billers"));
if(storedData){
this.billerArry=storedData;
}

else{
	document.getElementById("empty").innerHTML="<h1>No Biller Found--Contact Admin</h1>";
}
}

shgen(user,bill)
{   
	
	this.varShow3=bill;
	console.log("generate Bill",user,bill);

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
            this.userbillArry=[];
            this.userBiller={};

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
        this.userbillArry=[];
            this.userBiller={};
    }
    
}

viewBill(user,bill){
	console.log("view Bill",user,bill);
	this.varShow1=user;
	this.varShow2=false;
	this.varShow3=false;
let storedData=JSON.parse(localStorage.getItem("userBiller"));
if(storedData){
this.billerArry=storedData[user];
console.log(storedData,this.billerArry);
}

else{
	document.getElementById("empty").innerHTML="<h2>No Pending Bill</h2>";
}
}


genBill(user,bill,mon,amt){
this.varShow3=false;
let storedData=JSON.parse(localStorage.getItem(user));


    	if(storedData){

    		if(typeof(storedData[bill]) == "undefined"){
            this.userBiller=storedData;
            this.flag=true;
    		}
    	}
    if(this.flag || !storedData){
      this.userbillArry.push(mon);
    	this.userbillArry.push(amt);
    	this.userbillArry.push(false);
       let obj={[bill]:this.userbillArry};
        this.userBiller= Object.assign({},this.userBiller,obj);
        
        localStorage.setItem(user, JSON.stringify(this.userBiller));
        console.log("localstorage",JSON.parse(localStorage.getItem(user))); 
        this.userbillArry=[];
            this.userBiller={};
            this.flag=false;
    }

}

}
    	 
    
