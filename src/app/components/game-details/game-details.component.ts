import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StateService} from '../../services/state.service';
import { IGameDetails } from '../../models/interfaces'

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  gameId : any;
  gameDetails! : IGameDetails;
  subscription : Subscription = new Subscription();
  loading : boolean = false;
  showAddButton : boolean = false;
  alertMessage : string = '';
  alertClass : string = '';
  
  constructor(
    private apiService : ApiService, 
    private activatedRoute : ActivatedRoute,  
    private router : Router,
    private stateService : StateService) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // got this off of stackoveflow to ensure new route param will load new game details
    this.gameId = this.activatedRoute.snapshot.params.gameId;
    // only show add game to collection button if it is not part of the user's collection already
    // stateService.collectonIds store array of user's collection gameIds
    this.showAddButton = (this.stateService.collectionIds.indexOf(Number(this.gameId)) < 0);
    this.getGameDetails();
    window.scroll(0,0); 
  }

  getGameDetails() : void {
    this.loading = true;
    this.subscription = this.apiService.getGameDetails(this.gameId).subscribe(
      data => {
        this.gameDetails = data;
      },
      error => {
        this.alertMessage = error.error;
        this.alertClass = 'error';
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  addToCollection(gameId : any) : void {
    this.apiService.addToCollection(gameId).subscribe(
      data => {},
      error => {},
      () => { this.router.navigate(['collection']);}
    )
  }

  goBack() : void {
    history.go(-1); // if I had more time, I would come up with a more elegant solution
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  } 
}