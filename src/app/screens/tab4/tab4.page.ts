import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/models/paciente.models';

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
  
  constructor() { }

}
