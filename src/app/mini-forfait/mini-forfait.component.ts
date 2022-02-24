import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {
  
  @Input() destination = '';
  @Input() villeDepart = '';
  @Input() hotel = '';
  @Input() nombreEtoiles: number = 0;
  @Input() dateDepart = '';
  @Input() dateRetour = '';
  @Input() duree: number = 0;
  @Input() prix: number = 0;
  @Input() rabais: number = 0;
  @Input() prixRabais: number = 0;
  @Input() forfaitVedette: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
