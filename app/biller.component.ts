import { Component } from '@angular/core';

@Component({

	template:`<h2>Biller COMPONENT</h2>
	<button (click)="getUsers()">Get Users</button>

	<div *ngIf="varShow">
	<ul>
	<li  *ngFor="let users of userArry">{{users}}
       <div >
	      <button (click)="getBillers(users)">Add Biller</button>
	       <button (click)="viewBill(users)">Generate Bill</button>
	        <button (click)="shBill(users)">Pay Bill</button>

	        <div *ngIf="(users==varShow2)">
	          <ul >
	          <li *ngFor="let bill of billerArry">{{bill}}
                <button (click)="add(users,bill)">ADD</button>
	          </li>
	          </ul>
	        </div>

	      <div *ngIf="(users==varShow1)">
	          <ul >
	          <li *ngFor="let bill of billerGenArry">{{bill}}
                <button id={{bill}} (click)="shgen(users,bill)">Generate Bill</button>
                <div id="genDiv" *ngIf="(bill==varShow3)">
                <input #billMonth placeHolder="ENTER BILL MONTH" />
                <Input #billAmount placeHolder="ENTER BILL Amount" />
                <button (click)="genBill(users,bill,billMonth.value,billAmount.value)">Generate</button>
	            </div>
	          </li>
	          </ul>
	        </div>

					<div *ngIf="(users==varShow4)">
	          <ul >
	          <li *ngFor="let bill of billerPayArry">{{bill}}
               <button (click)="payBill(users,bill)">PAY BILL</button>
							 <div *ngIf="(bill==varShow5)">
     Bill Month-{{mon}}  Bill Amount={{price}}
		 <button (click)=billPaied(users,bill)>Pay Now</button>
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
public mon:string;
public price;
public userBiller={};
public userbillArry=[];
public billerArry=[];
public varShow=false;
public pendinBill=[];
public varShow1=false;
public varShow2=false;
public varShow3=false;
public varShow4=false;
public varShow5=false;
public billerPayArry=[];
public billerGenArry=[];
public geBill={};
public flag=true;



shBill(user){
this.varShow5=false;
this.varShow1=false;
this.varShow2=false;
this.varShow3=false;
this.varShow4=user;
console.log(this.varShow4,user);

//localStorage.setItem(user, JSON.stringify(this.userBiller));
//let storedData=JSON.parse(localStorage.getItem("userBiller"));
let storedData=JSON.parse(localStorage.getItem(user));
console.log(storedData);
if(storedData){
this.billerPayArry=Object.keys(storedData);
console.log(this.billerPayArry);
console.log(this.billerPayArry);
}
//
}

payBill(user,bill){

let storedData=JSON.parse(localStorage.getItem(user));
console.log(storedData);
if(storedData){
let arry=storedData;
this.mon=arry[bill][0];
this.price=arry[bill][1];
this.varShow5=bill;
}
}

billPaied(user,bill)
{
let storedData=JSON.parse(localStorage.getItem(user));
if(storedData){
console.log(storedData);
delete storedData[bill];
console.log(storedData);
localStorage.setItem(user, JSON.stringify(storedData));
}
alert(user+ " Payement was Successfull for "+bill);
}


	getUsers(){
	this.varShow4=false;
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

this.varShow4=false;
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
	this.varShow4=false;
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
	this.varShow4=false;

let storedData=JSON.parse(localStorage.getItem("userBiller"));
if(storedData){
this.billerGenArry=storedData[user];
console.log(storedData,this.billerGenArry);
}

else{
	document.getElementById("empty").innerHTML="<h2>No Pending Bill</h2>";
}
}


genBill(user,bill,mon,amt){
if(document.getElementById(bill).innerHTML=="Bill Generated")
{
alert(user+ "BilL Already generated for "+bill);
}
else
{
let storedData=JSON.parse(localStorage.getItem(user));

console.log("storedDATA",storedData);
    	if(storedData){
console.log("Inside if 1");
    		if(typeof(storedData[bill]) == "undefined"){
				console.log("Inside if undefined");

						this.userBiller=storedData;
            this.flag=true;
    		}
    	}
    if(this.flag || !storedData){
		console.log("Inside if 2");

      this.userbillArry.push(mon);
    	this.userbillArry.push(amt);
    	this.userbillArry.push(false);
       let obj={[bill]:this.userbillArry};
        this.userBiller= Object.assign({},this.userBiller,obj);

       localStorage.setItem(user, JSON.stringify(this.userBiller));
       console.log("localstorage",JSON.parse(localStorage.getItem(user)));
        let arry=JSON.parse(localStorage.getItem("userBiller"));
				console.log(arry[user]);
				var index=arry[user].indexOf(bill);
				console.log(index);
				if(index>-1){
				console.log("Inside if index");

				arry[user].splice(index,1);
				console.log(arry[user]);
				localStorage.setItem("userBiller", JSON.stringify(arry));

				}
        this.userbillArry=[];
            this.userBiller={};
            this.flag=false;
    }
if(this.varShow3==bill){
document.getElementById(bill).innerHTML="Bill Generated";
this.varShow3=false;
}
}
}



}
