import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { AuthorizationService } from '../../../services/authorization.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap, } from 'rxjs/operators';
import { merge, fromEvent, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  subscription: Subscription = new Subscription();
  loading: boolean = false;
  gameSearchControl = new FormControl();

  searchResults$: Observable<any> = new Observable;
  @Input() searchTerm : string ='';

  @ViewChild('searchInput') input!: ElementRef;

  constructor(
    private apiService: ApiService,
    private authorizationService: AuthorizationService,
    private router : Router) { }

  ngOnInit(): void {
    this.authorizationService.checkToken();
  }

  ngAfterViewInit() {
    const keyUpSearch$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe( // create observalbe from search input keyup event
        debounceTime(200), // discard emitted values until the 1000 ms mark
        map(event => event.target.value), // map the observable to the input value keyups
        distinctUntilChanged(), // only emit when the current value is different from the last
        switchMap(search => search ? this.apiService.search(search) : of(null)) // switch to next emission immediately, even if current emission isn't complete
      );

    this.searchResults$ = keyUpSearch$; // searchResults$ are being subscribed to by aysnc pipe in the template code
  }

  goToSearchResults() : void { // direct user to search results page if they click 'Go'
    let searchTerm = this.input.nativeElement.value;
    this.input.nativeElement.value = '';
    this.resetResults();
    this.router.navigate([`/search-results/${searchTerm}`]);
  }

  resetResults() : void {  
    // this is necessary in order to close the typeahead results
    // simply setting the input value to '' isn't enough, the keyup event needs to fire 
    // in order for the observable to empty itself
    this.input.nativeElement.dispatchEvent(new Event('keyup'));
  }

  goToGameDetails(gameId : any) :void {
    this.router.navigate([`/game-details/${gameId}`]);
  }
}