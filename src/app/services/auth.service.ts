import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HTTP: HttpClient, private ROUTER: Router) { }

  isUserLoggedIn() {
    return !!localStorage.getItem('token');
  }

  registerUser(registerUserData) {
    return this.HTTP.post('http://localhost:3000/register', registerUserData);
  }

  loginUser(loginUserData) {
    return this.HTTP.post('http://localhost:3000/login', loginUserData);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.ROUTER.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
