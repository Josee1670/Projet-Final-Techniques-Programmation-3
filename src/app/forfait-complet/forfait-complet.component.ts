import { Component, OnInit, Input} from '@angular/core';
import { Forfait } from '../forfait';
//import { FORFAITS } from '../mock-forfaits';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
  forfaits: Forfait[] = [];

  constructor(private voyageService: VoyageService) { }

  ngOnInit(): void {
    this.getVoyages();
  }

  getVoyages(): void {
    this.voyageService.getVoyages()
      .subscribe(resultat => this.forfaits = resultat);
  }

}
