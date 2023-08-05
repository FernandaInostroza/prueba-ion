import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  email: any;
  password: any;

  private api = "http://localhost:3000/pacientes/login";


  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    // Llama al servicio de autenticación para intentar el inicio de sesión.
    const exitoLogin = this.authService.login(this.email, this.password);

    if (exitoLogin) {
      // Redirige al usuario a la página de inicio después del inicio de sesión exitoso.
      this.router.navigate(['/tabs/tabs2']);
    } else {
      // Mostrar mensaje de error o notificación en la interfaz si el inicio de sesión falla.
      console.log('Credenciales incorrectas. Por favor, verifica tu email y contraseña.');
    }
  }


  goToRegister() {
    // Esta función maneja la navegación a la página de registro
    this.router.navigate(['/login/sing-up']);
  }

}
