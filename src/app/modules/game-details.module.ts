import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameDetailsComponent } from '../components/game-details/game-details.component';
import { GameDetailsRoutingModule } from './game-details-routing.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GameDetailsRoutingModule
  ]
})
export class GameDetailsModule { }