import { Component } from '@angular/core';
import { ImcService } from 'src/app/shared/services/imc.service';
import { IMC } from 'src/app/shared/models/imc.models'
import { StorageService } from 'src/app/shared/services/storage.service';
import { User } from 'src/app/shared/models/user.models';

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

  constructor(private servicio: ImcService, private _storage: StorageService) {
    for (let i = 40; i <= 200; i++) {
      this.pesos.push(i);
    }

    for (let altura = 140; altura <= 250; altura++) {
      const alturaDecimal = altura / 100;
      this.alturas.push(alturaDecimal);
    }
  }

  ionViewWillEnter(){

  }
  calcularIMC() {
    if (this.peso && this.altura) {
      const alturaMetros = this.altura;
      this.imcCalculate = Number((this.peso / (alturaMetros * alturaMetros)).toFixed(2));
      this.postResult();
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

  private postResult() {
    const user: User | null = <User | null>this._storage.load('user' , null);
    if (user){
      this.servicio.createIMC(this.imcCalculate, user.rut).then((response) => {
        if (response?.ok){
          alert('IMC registrado exitosamente');
        } else {
          alert('Ocurrio un error');
        }
      }).catch(() => {
        alert('ocurrio un problema')
      });
    }
  }
}
