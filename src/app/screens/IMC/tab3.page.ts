import { Component } from '@angular/core';
import { ImcService } from 'src/app/shared/services/imc.service';
import { IMC } from 'src/app/shared/models/imc.models'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  peso: number = 0;
  altura: number = 0;
  imcCalculate: number = 0;
    
  pesos: number[] = [];
  alturas: number[] = [];

  constructor(private servicio: ImcService) {
    for (let i = 40; i <= 200; i++) {
      this.pesos.push(i);
    }
  
    for (let altura = 140; altura <= 250; altura++) {
      const alturaDecimal = altura / 100;
      this.alturas.push(alturaDecimal);
    }
  }

  calcularIMC() {
    if (this.peso && this.altura) {
      const alturaMetros = this.altura;
      this.imcCalculate = this.peso / (alturaMetros * alturaMetros);
    } else {
      this.imcCalculate = NaN;
    }
  }
  
  // Da una interpretación al valor obtenido
  getResultado() {
    if (this.imcCalculate) {
      if (this.imcCalculate < 18.5) {
        return 'Bajo peso';
      } else if (this.imcCalculate >= 18.5 && this.imcCalculate < 25) {
        return 'Peso normal';
      } else if (this.imcCalculate >= 25 && this.imcCalculate < 30) {
        return 'Sobrepeso';
      } else {
        return 'Obesidad';
      }
    } else {
      return '';
    }
  }

  postResult() {
    this.servicio.createIMC(this.imcCalculate).then((response) => {
      alert('IMC registrado exitosamente');
    })
  }
}
