import { Component, OnInit, Input} from '@angular/core';
import { Forfait } from '../forfait';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-forfait-y',
  templateUrl: './forfait-y.component.html',
  styleUrls: ['./forfait-y.component.css']
})
export class ForfaitYComponent implements OnInit {

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
