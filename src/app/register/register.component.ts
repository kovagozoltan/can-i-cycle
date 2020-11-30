import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = { username: '', email: '', password: ''};

  constructor(private AUTHSERVICE: AuthService, private ROUTER: Router) { }

  ngOnInit() {
  }

  registerUser(){
    this.AUTHSERVICE.registerUser(this.registerUserData).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.username);
        this.ROUTER.navigate(['/weather']);
      },
      error => {
        console.log(error.error.error);
      }
    );
  }
}
