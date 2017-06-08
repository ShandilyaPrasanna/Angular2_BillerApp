import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({

    template:`<h2>Users Detail</h2>
    <p>{{det}}</p>
	`
	})

	export class UsersDetailComponent{
  public det:string;
  constructor(private route:ActivatedRoute){};


/*  ngOnInit(){
  let detail=this.route.snapshot.params['det'];   //Problem With Snapshot Is that when we return back to
                                                  // same url with changed params it does not get reflected back.
  this.det=detail
  }*/

  //Another Way Using Subscribe.....BEST WAY
  ngOnInit(){
        this.route.params.subscribe((params:Params)=>{
        let detail=params['det'];
        this.det=detail;
          })
        }}
