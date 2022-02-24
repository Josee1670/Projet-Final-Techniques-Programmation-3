import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-forfait-x',
  templateUrl: './forfait-x.component.html',
  styleUrls: ['./forfait-x.component.css']
})
export class ForfaitXComponent implements OnInit {

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
