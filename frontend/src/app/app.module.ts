import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationBarComponent } from './app-navigation-bar/app-navigation-bar.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { TableBusesComponent } from './table-buses/table-buses.component';
import {BusesService} from "./buses.service"
import {HttpClientModule } from "@angular/common/http";
import { MapMarkerComponent } from './map-marker/map-marker.component'


@NgModule({
  declarations: [
    AppComponent,
    AppNavigationBarComponent,
    GooglemapComponent,
    TableBusesComponent,
    MapMarkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [BusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
