import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobComponent } from './mob/mob.component';
import { FicheComponent } from './fiche/fiche.component';
import { Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'fiche', component: FicheComponent },
  { path: '', component: MobComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MobComponent,
    FicheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
