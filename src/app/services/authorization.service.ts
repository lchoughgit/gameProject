import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app-config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public authToken : any = {};

  constructor(
    private appConfig : AppConfig, 
    private httpClient: HttpClient,
    private router : Router
    ) { }

  login(formData : any) : Observable<any> {
    return this.httpClient.post(`${this.appConfig.baseURL}/login`, formData);
  }

  checkToken() : void {
    if (!sessionStorage.getItem("token")) {
      this.router.navigate(['login']);
    }
  }
}
