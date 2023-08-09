import { Component } from '@angular/core';
import { Expediente } from 'src/app/shared/models/expediente.models';
import { ExpedienteService } from 'src/app/shared/services/expediente.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  expedientes: Expediente [] = [];

  constructor(private exp: ExpedienteService) {
    this.exp.getExpedienteMed().then((response) => {
      this.expedientes = response!.expedientes;
    })
  }

}
