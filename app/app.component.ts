import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `


  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Biller App</a>
    </div>
    <ul class="nav navbar-nav pull-right">

      <li class="active"><a routerLink="/admin" routerLinkActive="active">Login As Admin</a></li>
      <li><a routerLink="/user" routerLinkActive="active">Login as User</a></li>

    </ul>
  </div>
</nav>

              <router-outlet></router-outlet>`
})
export class AppComponent {}
