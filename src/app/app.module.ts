import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { VoyageService } from './voyage.service';
import { TableauService } from './tableau.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { FormulaireForfaitsComponent } from './formulaire-forfaits/formulaire-forfaits.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AccueilComponent } from './accueil/accueil.component';
import { AdministrationComponent } from './administration/administration.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { HeaderComponent } from './header/header.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';
import { DialogFormulaireForfaitsComponent } from './dialog-formulaire-forfaits/dialog-formulaire-forfaits.component';
import { NgChartsModule } from 'ng2-charts';
import { ForfaitYComponent } from './forfait-y/forfait-y.component';
import { GraphiquesComponent } from './graphiques/graphiques.component';
import { Graphique1Component } from './graphique1/graphique1.component';
import { Graphique2Component } from './graphique2/graphique2.component';
import { ForfaitXComponent } from './forfait-x/forfait-x.component';
import { MexiquePipe } from './mexique.pipe';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MartiniquePipe } from './martinique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    FormulaireForfaitsComponent,
    FormulaireRechercheComponent,
    EtoilesComponent,
    TableauForfaitsComponent,
    AccueilComponent,
    AdministrationComponent,
    AProposComponent,
    HeaderComponent,
    PiedDePageComponent,
    TableForfaitsComponent,
    DialogFormulaireForfaitsComponent,
    ForfaitYComponent,
    GraphiquesComponent,
    Graphique1Component,
    Graphique2Component,
    ForfaitXComponent,
    MexiquePipe,
    SidenavComponent,
    MartiniquePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    MatSidenavModule

  ],
  providers: [VoyageService, TableauService],
  bootstrap: [AppComponent]
})
export class AppModule { }
