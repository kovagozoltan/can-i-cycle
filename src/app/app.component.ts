import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CanIRide';
  username;
  userLoggedIn;

  constructor(private AUTHSERVICE: AuthService, private ROUTER: Router) {
    this.ROUTER.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/weather' || event.urlAfterRedirects === '/settings') {
          this.getUser();
        }
      }
    });
  }

  ngOnInit() {
  }

  getUser() {
    this.username = localStorage.getItem('username');
    if (this.AUTHSERVICE.getToken()) {
      this.userLoggedIn = true;
    }
  }

  logout() {
    this.userLoggedIn = false;
    this.AUTHSERVICE.logoutUser();
  }

}
