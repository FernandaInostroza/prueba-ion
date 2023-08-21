import { Pipe, PipeTransform } from '@angular/core';
import { HistorialIMC } from '../models/imc.models';

@Pipe({
  name: 'imcFilter'
})
export class ImcFilterPipe implements PipeTransform {

  transform(historialIMC: HistorialIMC[], position: 'first' | 'last' = 'first'): HistorialIMC {
    if(position === 'first'){
      return historialIMC[0];
    } else {
      return historialIMC[historialIMC.length -1];
    }
  }

}
