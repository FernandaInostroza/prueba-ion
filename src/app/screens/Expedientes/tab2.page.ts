import { Component } from '@angular/core';
import { Expediente } from 'src/app/shared/models/expediente.models';
import { HistorialIMC } from 'src/app/shared/models/imc.models';
import { User, UserType } from 'src/app/shared/models/user.models';
import { ExpedienteService } from 'src/app/shared/services/expediente.service';
import { ImcService } from 'src/app/shared/services/imc.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  expedientes: Expediente[] = [];
  user: User | null = null;
  imcHistorial: HistorialIMC[] = [];

  constructor(private exp: ExpedienteService, private _storage: StorageService, private _imc: ImcService) {

  }

  async ionViewWillEnter() {
    this.user = this._storage.load('user', null);

    await this.getExpediente();
    await this.getHistorialIMC();
  }

  private async getExpediente() {
    if (this.user!.type === UserType.MEDICO) {
      await this.exp.getExpedienteMed(this.user!.rut).then((response) => {
        if (response?.ok) {
          this.expedientes = response.expedientes;
        }
      });
    } else {
      await this.exp.getExpedientePac(this.user!.rut).then((response) => {
        if (response?.ok) {
          this.expedientes = response.expedientes;
        }
      });
    }
  }

  private async getHistorialIMC() {
    if (this.user){
      await this._imc.getHistory(this.user.rut).then((response) => {
        if(response?.ok){
          this.imcHistorial = response.historialesIMC;
        }else {
          alert('ocurrio un error')
        }
      }).catch(() => {
        alert('ocurrio un error')
      });
    }
  }
}
