import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Paciente } from 'src/app/shared/models/paciente.models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage {
  // agregar los validadores necesarios
  pacienteForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(24), Validators.required]),
    name: new FormControl('', [Validators.required]),
    rut: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{7,8}-[0-9Kk]$/) ]),
    age: new FormControl(0 , [Validators.min(18), Validators.max(99), Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+569\d{8}$/)]),
    sex: new FormControl('', [Validators.required]),
    weight: new FormControl(0 , [Validators.required]),
    height: new FormControl(0 , [Validators.required]),
  });

  showPassword = false;

  password: string = '';
  passwordVisible: boolean = false;

  edades: number[] = [];
  pesos: number[] = [];
  alturas: number[] = [];

  constructor(private router: Router, private registro: PacienteService) { 
    for (let i = 18; i <= 99; i++) {
      this.edades.push(i);
    }

    for (let i = 40; i <= 200; i++) {
      this.pesos.push(i);
    }

    for (let altura = 1.4; altura <= 2.5; altura += 0.01) {
      this.alturas.push(Number(altura.toFixed(2)));
    }
}

  Register() {
    //console.log(this.pacienteForm)
    //return;
     if (this.pacienteForm.valid) {
      //servicio
      const paciente = this.pacienteForm.value as Paciente;

      this.registro.createPac(paciente).then((response) => {
        const {ok} = response!;
        if (ok) {
          this.router.navigate(['/login/sign-in']);
        }else {
          //mensaje de alerta
          alert("Error en el registro");
        }
      });
    } else {
      //mensaje de alerta
      alert("Error en el registro");
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
 
  goToLogin() {
    // Esta función maneja la navegación a la página de inicio sesion
    this.router.navigate(['/login/sign-in']);
  }
}
