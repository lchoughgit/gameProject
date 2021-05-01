import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertBannerComponent } from '../components/shared/alert-banner/alert-banner.component';
import { GameCardComponent } from '../components/shared/game-card/game-card.component';
import { ImageComponent } from '../components/shared/image/image.component';
import { SearchComponent } from '../components/shared/search/search.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select'
import { HeaderComponent } from '../components/shared/header/header.component';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatDividerModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatTooltipModule,
        MatSelectModule,
        MatMenuModule
    ],
    declarations: [
        AlertBannerComponent,
        GameCardComponent,
        ImageComponent,
        SearchComponent,
        HeaderComponent
    ],
    exports: [
        AlertBannerComponent,
        GameCardComponent,
        ImageComponent,
        SearchComponent,
        CommonModule,
        FormsModule,
        MatCardModule,
        MatInputModule,
        MatDividerModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatTooltipModule,
        MatSelectModule,
        MatMenuModule,
        HeaderComponent
    ]
})
export class SharedModule { }