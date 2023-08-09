import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/shared/models/paciente.models';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

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

  constructor(private router: Router, private authService: AuthenticationService) { }

  login() {
/*     // Llama al servicio de autenticación para intentar el inicio de sesión.
    const exitoLogin = this.authService.login(this.email, this.password);
    if (exitoLogin) {
      // Redirige al usuario a la página de inicio después del inicio de sesión exitoso.
      this.router.navigate(['/tabs/tabs2']);
    } else {
      // Mostrar mensaje de error o notificación en la interfaz si el inicio de sesión falla.
      console.log('Credenciales incorrectas. Por favor, verifica tu email y contraseña.');
    } */
  }

  goToRegister() {
    // Esta función maneja la navegación a la página de registro
    this.router.navigate(['/login/sign-up']);
  }

}
