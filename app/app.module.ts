import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutingModule,routingComonents} from './app-routing.module';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule],
  declarations: [ AppComponent , routingComonents],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
