import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription.users/inscription/inscription.component';
import { ModificationComponent } from './modification.compte/modification/modification.component';
import { HomeComponent } from './home/home/home.component';
import { AjouteTacheComponent } from './gestion.taches/ajoute-tache/ajoute-tache.component';
import { DetailTacheComponent } from './gestion.taches/detail-tache/detail-tache.component';

const routes: Routes = [
  {path:"", component: AccueilComponent},
  {path:"home", component:HomeComponent},
  {path:"Acceuil", component:AccueilComponent},
  {path:"login", component: LoginComponent},
  {path:"inscription", component:InscriptionComponent },
  {path:"modification", component: ModificationComponent },
  {path: "ajoute_tache", component:AjouteTacheComponent},
  {path:"detailTache", component:DetailTacheComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
