import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  peso: number = NaN;
  altura: number = NaN;
  imc: number = NaN;

  constructor() {}

  calcularIMC() {
    if (this.peso && this.altura) {
      const alturaMetros = this.altura / 100;
      this.imc = this.peso / (alturaMetros * alturaMetros);
    } else {
      this.imc = NaN;
    }
  }

  getResultado() {
    if (this.imc) {
      if (this.imc < 18.5) {
        return 'Bajo peso';
      } else if (this.imc >= 18.5 && this.imc < 24.9) {
        return 'Peso normal';
      } else if (this.imc >= 25 && this.imc < 29.9) {
        return 'Sobrepeso';
      } else {
        return 'Obesidad';
      }
    } else {
      return '';
    }
  }

}
