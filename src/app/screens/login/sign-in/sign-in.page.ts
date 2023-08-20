import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/shared/models/paciente.models';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { MedicoService } from 'src/app/shared/services/medico.service';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
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

  constructor(private router: Router, private pac: PacienteService, private med: MedicoService, private _storage: StorageService) { }

  login() {
    // peticion para traerse el user, rut y type

    //this._storage.save('user', user);
    this.router.navigate(['/tabs/tab1']); //redirige al tab1
  }

  goToRegister() {
    // Esta función maneja la navegación a la página de registro
    this.router.navigate(['/login/sign-up']);
  }

}
