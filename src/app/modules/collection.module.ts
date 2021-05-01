import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollectionComponent } from '../components/collection/collection.component';
import { CollectionRoutingModule } from './collection-routing.module';
import { SharedModule } from './shared.module';

@NgModule({
    declarations : [
        CollectionComponent
    ],
 imports: [ 
     CommonModule, 
     SharedModule,
     CollectionRoutingModule
     ]
})
export class CollectionModule { }