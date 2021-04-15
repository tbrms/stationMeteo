import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficheurComponent } from './afficheur/afficheur.component';
import { BulletinMeteoWebService } from 'src/shared/webservices/bulletinMeteo.webservice';
import { TemperatureDtoWebService } from 'src/shared/webservices/temperatureDto.webservice';
import { GraphTemperatureComponent } from './graph-temperature/graph-temperature.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    AfficheurComponent,
    GraphTemperatureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [
    BulletinMeteoWebService,
    TemperatureDtoWebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
