import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private AUTHSERVICE: AuthService) { }

  intercept(req,next) {
    const authToken = this.AUTHSERVICE.getToken();
    const requestWithToken = req.clone({
     setHeaders: {
       Authorization: `Bearer ${authToken}`
     }
    });
    return next.handle(requestWithToken);
  }

}
