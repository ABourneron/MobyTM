import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MobComponent } from './mob/mob.component';
import { FicheComponent } from './fiche/fiche.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { AccueilComponent } from './accueil/accueil.component'; 


const appRoutes: Routes = [
  {path : '', component:MobComponent},
  {path : 'fiche', component:FicheComponent},
  {path : 'connexion', component:ConnexionComponent},
];

@NgModule({
   declarations: [
    AppComponent,
    MobComponent,
    FicheComponent,
    ConnexionComponent,
    AccueilComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
