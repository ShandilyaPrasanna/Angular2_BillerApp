import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({


	template:`<h2>Admin Page</h2>

	<button class="btn btn-primary btn-lg" (click)="user()">ADD USER</button>
	<button class="btn btn-primary btn-lg" (click)="biller()">ADD BILLERS</button>
	<button class="btn btn-primary btn-lg" (click)="getUsers()">View Users</button>

	<div *ngIf="varUser">
	<br><br>

			<label >Enter User Name-</label>
		<input type="text" class="form-control" #userName (keyup.enter)="addUser(userName.value)"/>


	</div>

	<div *ngIf="varBiller">
 <br><br>


			<label >Enter Biller Name--</label>
		<input type="text" class="form-control" #billerName (keyup.enter)="addBiller(billerName.value)"/>


	</div>




	<div *ngIf="varShow">
	<ul>
	<li  *ngFor="let users of userArry">

	<div class="container">
		<div class="jumbotron">
			<h2>{{users}}</h2>

			 <div >
				<button class="btn btn-warning" (click)="getBillers(users)">Add Biller</button>
				 <button class="btn btn-warning" (click)="viewBill(users)">Generate Bill</button>

	<br><br>
					<div *ngIf="(users==varShow2)">
						<ul >
						<li *ngFor="let bill of billerArry">{{bill}}
								<button class="btn btn-success pull-right"(click)="add(users,bill)">ADD</button><br><br>
						</li>

						</ul>
					</div>

				<div *ngIf="(users==varShow1)">
						<ul >
						<li *ngFor="let bill of billerGenArry">{{bill}}
								<button class="btn btn-success pull-right"id={{bill}} (click)="shgen(users,bill)">Generate Bill</button><br><br>
								<div id="genDiv" *ngIf="(bill==varShow3)">


											<label >ENTER BILL MONTH</label>
											<input type="text" class="form-control" #billMonth>


												<label >ENTER BILL Amount</label>
											<input type="text" class="form-control" #billAmount>



						<br><br>    <button class="btn btn-danger pull-right" (click)="genBill(users,bill,billMonth.value,billAmount.value)">Generate</button><br><br><br>
							</div>
						</li>
						</ul>
					</div>



		 </div>
		 </div>
	 </div></li>

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

public userArry=[];
public mon:string;
public price;
public userBiller={};
public userbillArry=[];
public billerArry=[];
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
	
