import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FicheComponent } from './fiche/fiche.component';
import { MobComponent } from './mob/mob.component';
/*
import { mobComponent } from './mob/mob.component';
import { ficheComponent } from './fiche/fiche.component';
import { connexionComponent } from './connexion/connexion.component';
*/
const routes: Routes = [
  {path : '', component:AccueilComponent},
  {path : 'mob', component:MobComponent},
  {path : 'fiche', component:FicheComponent},
  {path : 'connexion', component:ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
