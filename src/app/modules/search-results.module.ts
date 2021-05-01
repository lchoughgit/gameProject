import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchResultsComponent } from '../components/search-results/search-results.component';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SharedModule } from './shared.module';

@NgModule({
    declarations : [
        SearchResultsComponent
    ],
 imports: [ 
     CommonModule, 
     SharedModule,
     SearchResultsRoutingModule
     ]
})
export class SearchResultsModule { }