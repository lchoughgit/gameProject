import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { ApiService } from '../../services/api.service';
import { StateService } from '../../services/state.service';
import { ICollectionItem } from '../../models/interfaces'

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {

  gameCollection : ICollectionItem[] = [];
  subscription : Subscription = new Subscription();
  loading : boolean = false;
  alertMessage : string = '';
  alertClass : string = '';

  constructor(
    private apiService : ApiService, 
    private stateService : StateService) { }

  ngOnInit(): void {
    this.getCollection();
    window.scroll(0,0); 
  }

  getCollection() : void {
    this.loading = true;
    this.subscription = this.apiService.getGameCollection().subscribe(
      data => {
        this.gameCollection = data;
        this.setCollectionIds(this.gameCollection);
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

  /*
    -setCollectionIds stores the users' gameIds in a service based array
    -purpose: to compare user's collection with game details component, and suppress the add button if already a part of the user's collection
  */
  setCollectionIds(collection : ICollectionItem[]) : void {
    this.stateService.collectionIds = []; 
    for (let game of collection) {
      this.stateService.collectionIds.push(game.gameId);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  } 
}
