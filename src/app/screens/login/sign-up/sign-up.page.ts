import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage {
  // agregar los validadores necesarios
  paciente = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(24), Validators.required]),
    name: new FormControl('', [Validators.required]),
    rut: new FormControl('', [Validators.required]), //agregar validador rut
    age: new FormControl(0 , [Validators.min(18), Validators.max(99), Validators.required]),
    phone: new FormControl('', [Validators.required]), //agregar validador numero
    sex: new FormControl('', [Validators.required]),
    weight: new FormControl(0 , [Validators.required]),
    height: new FormControl(0 , [Validators.required]),
  });

  password: string = '';
  passwordVisible: boolean = false;
  
  constructor(private router: Router, private registro: PacienteService) { }

  Register() {
     if (this.paciente.valid) {
      //servicio
      const pacienteData = this.paciente.value;

      this.registro.createPac(pacienteData).then((response) => {

        this.router.navigate(['/login/sign-in']);

      })
    } else {
      //mensaje de alerta
      alert("Error en el registro");
    }
  }
 
  goToLogin() {
    // Esta función maneja la navegación a la página de inicio sesion
    this.router.navigate(['/login/sign-in']);
  }
}
