import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponseExpedientes, Expediente } from '../models/expediente.models';
import { environment } from 'src/environments/environment';

interface ExpedientePostResponse{
  ok: boolean;
  expediente: Expediente;
  error?: any;
}
@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  constructor(private http: HttpClient) { }

//EXPEDIENTES
  //GET
  getExpedienteMed(){ 
    const url = `${environment.api}/expedientes/medico?rut=98765432-1`;
    return this.http.get<ApiResponseExpedientes>(url).toPromise();
  }

  getExpedientePac(rut: string){
    const url = `${environment.api}/expedientes/paciente?rut=${rut}`;
    return this.http.get<ApiResponseExpedientes>(url).toPromise();
  }

  //POST create
  postExpediente(data: Expediente){
    const url = `${environment.api}/expedientes`;
    return this.http.post<ExpedientePostResponse>(url, data).toPromise();
  }

}
