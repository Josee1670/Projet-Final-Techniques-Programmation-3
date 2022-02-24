import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.css']
})
export class EtoilesComponent implements OnInit {
  
  @Input() nombreEtoiles = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
