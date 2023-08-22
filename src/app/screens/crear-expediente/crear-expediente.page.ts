import { Component, OnInit } from '@angular/core';
import { CreateExpediente } from 'src/app/shared/models/expediente.models';
import { Paciente } from 'src/app/shared/models/paciente.models';
import { User } from 'src/app/shared/models/user.models';
import { ExpedienteService } from 'src/app/shared/services/expediente.service';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-crear-expediente',
  templateUrl: './crear-expediente.page.html',
  styleUrls: ['./crear-expediente.page.scss'],
})
export class CrearExpedientePage{
  pacientes: Paciente [] = [];
  rut = '';
  descripcion = '';

  constructor(private pac: PacienteService, private exp: ExpedienteService, private _storage:StorageService) {
    this.pac.getAllPac().then((response) => {
      this.pacientes = response!.pacientes;
    });
  }


  guardarExp(){
    const user = <User | null>this._storage.load('user' , null);
    const expediente: CreateExpediente = {
      description: this.descripcion,
      pacienteRut: this.rut,
      medicoRut: user!.rut,
    };
    this.exp.postExpediente(expediente).then((response) => {
      if(response?.ok){
        alert('se creo correctamente');
        this.descripcion = '';
        this.rut = '';

      }else {
        alert('error al crear expediente');
      }
    }).catch(() => {
      alert('error al crear expediente');
    });
  } 

}

