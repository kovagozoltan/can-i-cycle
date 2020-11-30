import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = { email: '', password: ''};


  constructor(private AUTHSERVICE: AuthService, private ROUTER: Router) { }

  ngOnInit() {
  }

  loginUser(){
    this.AUTHSERVICE.loginUser(this.loginUserData).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.username);
        this.ROUTER.navigate(['/weather']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
