import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique1',
  templateUrl: './graphique1.component.html',
  styleUrls: ['./graphique1.component.css']
})
export class Graphique1Component implements OnInit {

  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['7 jours', '14 jours', '21 jours', '28 jours'],
    datasets: [
      { data: [2175, 1662, 1220, 925,], label: 'Forfait1' },
      { data: [800, 380, 649, 425,], label: 'Forfait2' }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
