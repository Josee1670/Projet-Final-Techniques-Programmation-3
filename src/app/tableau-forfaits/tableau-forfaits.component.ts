import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import { Forfait } from '../forfait';
import { VoyageService } from '../voyage.service';


@Component({
  selector: 'app-tableau-forfaits',
  templateUrl: './tableau-forfaits.component.html',
  styleUrls: ['./tableau-forfaits.component.css']
})
export class TableauForfaitsComponent implements OnInit {
   forfaits: Forfait[] = [];
   columnsToDisplay = ['destination', 'dateRetour', 'nom', 'prix', 'actions'];
   selecteForfait?: Forfait;
  
  constructor(private voyageService: VoyageService) { }

  ngOnInit(): void {
    this.getVoyages();
  }

  getVoyages(): void {
    this.voyageService.getVoyages()
        .subscribe(resultat => this.forfaits = resultat);
    }
  
  onDelete(forfait: Forfait): void {
    this.voyageService.deleteForfait(forfait.id)
      .subscribe(resultat => this.forfaits = this.forfaits.filter(f => f !== forfait));
  }

  onSelect(forfait: Forfait): void {
    this.selecteForfait = forfait;
  }

  onEdit(forfaitFormEdition: NgForm): void {
    if (forfaitFormEdition.valid && this.selecteForfait != null) {
      this.voyageService.editForfait(this.selecteForfait)
        .subscribe(() => this.selecteForfait = undefined);
    }
  }
}