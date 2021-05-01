import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private authorizationService: AuthorizationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authorizationService.checkToken(); // check if token exists, and redirect to login if not
    let authToken = sessionStorage.getItem("token"); // session token is set upon successful login
    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`),
    });

    // this code below isn't doing what I was hoping it would handle any http errors
    // but the code never hits this based off of the nature of the api responses, or lack thereof 
    return next.handle(request).pipe(tap(
      (response: any) => {        
        if (response instanceof HttpErrorResponse) {
          if (response.status === 200) {
            return;
          } else {
            this.router.navigate(['login']);
          }
        }
      }),
    );
  }
}