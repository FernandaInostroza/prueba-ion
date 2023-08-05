import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {  }
//PACIENTE
  //registro paciente
  createPac(data: any){
    const url = `${this.api}/pacientes`;
    return this.http.post(url, data).toPromise();
  }
  //Inicio sesion Paciente
  loginPac(data: any){
    const url = `${this.api}/pacientes/login`;
    return this.http.post(url, data).toPromise();
  }
    //Paciente GET
    getUserPac(rut: string){
      const url = `${this.api}/pacientes/one?rut=${rut}`;
      return this.http.get(url).toPromise();
    }

//MEDICO
  //Inicio Sesion Medico
  loginMed(data: any){
    const url = `${this.api}/medicos/login`;
    return this.http.post(url, data).toPromise();
  }
  //Medico GET
  getUserMed(rut: string){
    const url = `${this.api}/medicos/one?rut==${rut}`;
    return this.http.get(url).toPromise();    
  }

//FAQS
  getAllFaqs(){
    const url = `${this.api}/faqs/all`;
    return this.http.get(url).toPromise();
  }

//EXPEDIENTES
  //GET
  getExpedienteMed(){ 
    const url = `${this.api}/expedientes/medico?rut=98765432-1`;
    return this.http.get(url).toPromise();
  }

  getExpedientePac(rut: string){
    const url = `${this.api}/expedientes/paciente?rut=${rut}`;
    return this.http.get(url).toPromise();
  }

  //POST
  postExpediente(data: any){
    const url = `${this.api}/expedientes`;
    return this.http.post(url, data).toPromise();
  }
//IMC
  postIMC(data: any){
    const url = `${this.api}/historial-imc`;
    return this.http.post(url, data).toPromise();
  }




}
