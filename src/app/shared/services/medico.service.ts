import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Medico } from '../models/expediente.models';
import { ApiResponseMedico } from '../models/medico.models';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  
  constructor(private http: HttpClient) { }
  
  //Medico GET
  getUserMed(rut: string){
    const url = `${environment.api}/medicos/one?rut=${rut}`;
    return this.http.get<ApiResponseMedico>(url).toPromise();    
  }
}
