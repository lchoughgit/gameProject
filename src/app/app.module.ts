import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppConfig } from './config/app-config';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from './modules/shared.module';
import { CollectionModule } from './modules/collection.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    SharedModule,
    CollectionModule
  ],
  providers: [ 
    AppConfig,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true} ],
  exports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatDialogModule, 
    MatTableModule, 
    MatMenuModule,
    MatIconModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
