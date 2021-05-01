import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private router : Router) { }

  // I was going to use this in lieu of using router.navigate everywhere,
  // but in the context of this small app, didn't see the value in importing Router vs. a UtilityService
  goToRoute(route : string) : void{
    this.router.navigate([route]);
  }
}
