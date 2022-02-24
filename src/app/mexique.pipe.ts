import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'mexique'
})
export class MexiquePipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.destination === 'Cancun, Mexique');
  }

}
