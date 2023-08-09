import { Component } from '@angular/core';
import { Paciente } from 'src/app/shared/models/paciente.models';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/shared/services/paciente.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage{
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
  }

  constructor(private router: Router, private registro: PacienteService) { }

  Register() {

  }

  goToLogin(){
        // Esta función maneja la navegación a la página de inicio sesion
    this.router.navigate(['/login/sign-in']);
  }
}
