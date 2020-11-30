import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AUTHSERVICE: AuthService, private ROUTER: Router) {}

  canActivate() {
    if (this.AUTHSERVICE.isUserLoggedIn()) {
      return true;
    } else {
      this.ROUTER.navigate(['/login']);
      return false;
    }
  }

}
