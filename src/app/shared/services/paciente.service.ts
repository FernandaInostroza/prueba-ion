import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Paciente } from '../models/paciente.models';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  
  constructor(private http: HttpClient) { }

  //registro paciente
  createPac(pacienteData: Paciente){
    const url = `${environment.api}/pacientes`;
    return this.http.post<Paciente>(url, pacienteData).toPromise();
  }
  
  //Inicio sesion Paciente
  loginPac(email: string, password: string){
    const url = `${environment.api}/pacientes/login`;
    return this.http.post(url, [email, password]).toPromise();
  }

  //Paciente GET
  getUserPac(rut: string){
    const url = `${environment.api}/pacientes/one?rut=${rut}`;
    return this.http.get(url).toPromise();
  }
}
