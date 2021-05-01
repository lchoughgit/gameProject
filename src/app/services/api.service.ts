import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private appConfig : AppConfig, 
    private httpClient: HttpClient,) { }

  getGameCollection() : Observable<any> {
    return this.httpClient.get(`${this.appConfig.baseURL}/Collection`);
  }

  getGameDetails(gameId : any) : Observable<any> {
    return this.httpClient.get(`${this.appConfig.baseURL}/Games/${gameId}`);
  }

  deleteFromCollection(gameId : any) {
    return this.httpClient.delete(`${this.appConfig.baseURL}/Collection/${gameId}`);
  }

  addToCollection(gameId : any) : Observable<any> {
    return this.httpClient.post(`${this.appConfig.baseURL}/Collection/${gameId}`, null);
  }

  search(gameName : any) : Observable<any> {    
    return this.httpClient.get(`${this.appConfig.baseURL}/Games/search/${gameName}`);
  }

  getPlatforms() : Observable<any> {
    return this.httpClient.get(`${this.appConfig.baseURL}/Platforms`);
  }
 }
