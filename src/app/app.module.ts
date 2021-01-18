import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './companents/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AidatComponent } from './components/aidat/aidat.component';
import { YoneticiComponent } from './components/yonetici/yonetici.component';
import { SitelerComponent } from './components/siteler/siteler.component';
import { GreenComponent } from './components/green/green.component';
import { OnurkentComponent } from './components/onurkent/onurkent.component';
import { ElmaliComponent } from './components/elmali/elmali.component';
import { BeyazBahceComponent } from './components/beyaz-bahce/beyaz-bahce.component';
import { YsBeyazBahceComponent } from './components/ys-beyaz-bahce/ys-beyaz-bahce.component';
import { YsGreenComponent } from './components/ys-green/ys-green.component';
import { YsOnurkentComponent } from './components/ys-onurkent/ys-onurkent.component';
import { YsElmaliComponent } from './components/ys-elmali/ys-elmali.component';
import { AGreenComponent } from './components/a-green/a-green.component';
import { ABeyazBahceComponent } from './components/a-beyaz-bahce/a-beyaz-bahce.component';
import { AOnurkentComponent } from './components/a-onurkent/a-onurkent.component';
import { AElmaliComponent } from './components/a-elmali/a-elmali.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AidatComponent,
    YoneticiComponent,
    SitelerComponent,
    GreenComponent,
    OnurkentComponent,
    ElmaliComponent,
    BeyazBahceComponent,
    YsBeyazBahceComponent,
    YsGreenComponent,
    YsOnurkentComponent,
    YsElmaliComponent,
    AGreenComponent,
    ABeyazBahceComponent,
    AOnurkentComponent,
    AElmaliComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
