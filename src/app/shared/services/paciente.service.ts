import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponsePaciente, Paciente, ResponseGetPaciente } from '../models/paciente.models';

interface PacientePostResponse{
  ok: boolean;
  paciente: Paciente;
  error?: any;
}
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  
  constructor(private http: HttpClient) { }

  //registro paciente
  createPac(pacienteData: Paciente){
    const url = `${environment.api}/pacientes`;
    return this.http.post<PacientePostResponse>(url, pacienteData).toPromise();
  }

  //Paciente GET
  getUserPac(rut: string){
    const url = `${environment.api}/pacientes/one?rut=${rut}`;
    return this.http.get<ResponseGetPaciente>(url).toPromise();
  }

  getAllPac(){
    const url = `${environment.api}/pacientes/all`;
    return this.http.get<ApiResponsePaciente>(url).toPromise();
  }
}
