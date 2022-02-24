import { Component, OnInit,Input } from '@angular/core';
import { VoyageService } from '../voyage.service';
import { Forfait } from '../forfait';
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
   @Input() forfait: Forfait = { id: '', destination:'', villeDepart:'',  dateDepart: '', dateRetour: '', duree: 0, rabais:0, prixRabais: 0, forfaitVedette: true, hotel: {nom:'', adresse:'', nombreEtoiles: 0, nombreChambres: 0, photo:'', caracteristiques: [] }, prix: 0 };

  constructor(private voyageService: VoyageService) { }

  ngOnInit(): void {
    
  }
  onSave(forfaitForm: NgForm) {
    if (forfaitForm.valid) {
      if (this.forfait.id != null && this.forfait.id != '') {
        // Si on a un id, on doit modifier le forfait
        this.voyageService.editForfait(this.forfait).subscribe(_ => { /* todo : mettre à jour le tableau */ });

      } else { 
        // Sinon, on doit ajouter le forfait
        this.voyageService.addForfait(this.forfait).subscribe(_ => { /* todo : mettre à jour le tableau */});
      }
      }
      
  }

}
