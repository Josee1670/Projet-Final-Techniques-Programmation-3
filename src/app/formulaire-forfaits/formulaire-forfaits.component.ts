import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-formulaire-forfaits',
  templateUrl: './formulaire-forfaits.component.html',
  styleUrls: ['./formulaire-forfaits.component.css']
})
export class FormulaireForfaitsComponent implements OnInit {
 options: string[] = ['One', 'Two', 'Three'];

  
  formatLabel(value: number) {
    if (value >0) {
      return Math.round(value);
    }
    return value;
  }
  constructor() {
   }

  ngOnInit(): void {
  }

}
