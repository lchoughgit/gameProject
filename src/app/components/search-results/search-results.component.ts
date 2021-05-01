import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  searchResults : any[] = [];
  filteredSearchResults$ : Observable<any[]> = new Observable();
  searchTerm : string = '';
  subscription : Subscription = new Subscription();
  loading : boolean = false;
  platforms : any[] = [];
  alertMessage : string = '';
  alertClass : string = '';

  
  constructor(
    private apiService : ApiService, 
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // got this off of stackoveflow to ensure new route param will load new game details
    this.searchTerm = this.activatedRoute.snapshot.params.searchTerm;
    this.getSearchResults(this.searchTerm);
    this.getPlatforms();
    window.scroll(0,0);
  }

  getSearchResults(searchTerm : string) : void {
    this.loading = true;
    this.subscription = this.apiService.search(searchTerm).subscribe(
      data => {
        this.searchResults = data;      
        this.filteredSearchResults$ = of(this.searchResults); // assign searchResults to an observable so async pipe can subscribe when results are filtered by platform
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

  getPlatforms() : void {
    this.loading = true;
    this.subscription = this.apiService.getPlatforms().subscribe(
      data => {
        this.platforms = data.map((item : any) => {
          return item.name;
        }          
        );
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

  filterPlatforms(platform: string) {    
    // when user selects a platform from the dropdown, reassign filteredSearchResults$ to the searchResults array filtered by platform
    // given more time, this could have been done better using pipe, map etc
    // my primary purpose for this was to demonstrate using async pipe on an observable rendered in the template
    this.filteredSearchResults$ = of(
      this.searchResults.filter(result => 
        { return result.platform === platform; })
      );
  }

  resetSearchResultsToOriginal(): void {
    this.filteredSearchResults$ = of(this.searchResults);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  } 
}
