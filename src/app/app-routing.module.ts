import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { AdministrationComponent } from './administration/administration.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ForfaitYComponent } from './forfait-y/forfait-y.component';
import { ForfaitXComponent } from './forfait-x/forfait-x.component';
import { GraphiquesComponent } from './graphiques/graphiques.component';

const routes: Routes = [
  /* On laisse vide pour définir la page d'accueil par défaut lors de l'ouverture  */
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'forfait-y', component: ForfaitYComponent },
  { path: 'forfait-x', component: ForfaitXComponent},
  { path: 'administration', component: AdministrationComponent },
  { path: 'graphiques', component: GraphiquesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
