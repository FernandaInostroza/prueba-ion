import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/models/paciente.models';
import { ExpedienteService } from 'src/app/shared/services/expediente.service';
import { PacienteService } from 'src/app/shared/services/paciente.service';

@Component({
  selector: 'app-crear-expediente',
  templateUrl: './crear-expediente.page.html',
  styleUrls: ['./crear-expediente.page.scss'],
})
export class CrearExpedientePage{
  pacientes: Paciente [] = [];
  rut = '12345678-9';

  constructor(private pac: PacienteService, private exp: ExpedienteService) {
  /*   this.pac.getUserPac(this.rut).then((response) => { //arrelgar el this.rut, traer el rut del cache
      this.pacientes = response!.pacientes;
  }) */
    this.pac.getAllPac().then((response) => {
      this.pacientes = response!.pacientes;
    });
  }


  guardarExp(){
   /*  this.exp.postExpediente(data).then((response) => { //Falta pasarle la data a expediente
      const {ok} = response!;
      if (ok) {
        alert("Expediente creado")
      }else {
        //mensaje de alerta
        alert("Error en el registro");
      }
    }); */
  } 

}

