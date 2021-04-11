import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficheurComponent } from './afficheur/afficheur.component';
import { BulletinMeteoWebService } from 'src/shared/webservices/bulletinMeteo.webservice';

@NgModule({
  declarations: [
    AppComponent,
    AfficheurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BulletinMeteoWebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
