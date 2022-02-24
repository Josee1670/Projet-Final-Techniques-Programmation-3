import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'martinique'
})
export class MartiniquePipe implements PipeTransform {
  
  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.destination == 'Martinique');
  }

}
