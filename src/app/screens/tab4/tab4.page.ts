import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/models/paciente.models';
import { PacienteService } from 'src/app/shared/services/paciente.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  paciente: Paciente = {
    email: '',
    password: '',
    name: '',
    rut: '',
    age: 0,
    phone: '',
    sex: '',
    weight: 0,
    height: 0,
  };
  
  constructor(private consulta: PacienteService) { 
const rut = 'rutpacienteloggeado'; //CAMBIAAAAAAAAAAAAAAR
    //areglaaaaaaaaaaaaar
    
    this.consulta.getUserPac(rut).then((response) => {
      this.paciente.email;
    })
  }

}
