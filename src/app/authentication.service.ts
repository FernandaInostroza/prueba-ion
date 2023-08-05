import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private usuarioAutenticado: boolean = false;
  
  constructor() { }

  login(email: string, password: string): boolean {
    // Aquí debes implementar la lógica real de autenticación.
    // Puedes comunicarte con un backend o API para verificar las credenciales del usuario.

    // Ejemplo de autenticación simulada:
    if (email === 'usuario@example.com' && password === 'contrasena123') {
      this.usuarioAutenticado = true;
      return true;
    }

    return false;
  }

  estaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  logout(): void {
    this.usuarioAutenticado = false;
  }
}
