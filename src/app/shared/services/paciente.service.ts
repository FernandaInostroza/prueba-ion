import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Paciente } from '../models/expediente.models';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  
  constructor(private http: HttpClient) { }

  //registro paciente
  createPac(data: Paciente){
    const url = `${environment.api}/pacientes`;
    return this.http.post(url, data).toPromise();
  }
  
  //Inicio sesion Paciente
  loginPac(data: Paciente){
    const url = `${environment.api}/pacientes/login`;
    return this.http.post(url, data).toPromise();
  }

  //Paciente GET
  getUserPac(rut: string){
    const url = `${environment.api}/pacientes/one?rut=${rut}`;
    return this.http.get(url).toPromise();
  }
}
