import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'game-details/:gameId', loadChildren: () => import('./modules/game-details.module').then(m => m.GameDetailsModule) },
  { path: 'search-results/:searchTerm', loadChildren: () => import('./modules/search-results.module').then(m => m.SearchResultsModule) },
  { path: 'collection', loadChildren: () => import('./modules/collection.module').then(m => m.CollectionModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
