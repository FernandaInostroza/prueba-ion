import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Medico } from '../models/expediente.models';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  
  constructor(private http: HttpClient) { }

//MEDICO
  //Inicio Sesion Medico
  loginMed(data: Medico){
    const url = `${environment.api}/medicos/login`;
    return this.http.post(url, data).toPromise();
  }
  
  //Medico GET
  getUserMed(rut: string){
    const url = `${environment.api}/medicos/one?rut==${rut}`;
    return this.http.get(url).toPromise();    
  }
}
