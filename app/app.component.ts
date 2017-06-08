import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>APP COMPONENT</h1>
              <nav>
              <a routerLink="/admin" routerLinkActive="active">Login As Admin</a>
              <a routerLink="/user" routerLinkActive="active">Login as User</a>
              </nav>
              <router-outlet></router-outlet>`
})
export class AppComponent {}
