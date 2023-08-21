import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HistorialIMC, IMC } from '../models/imc.models';
import { ResponseBase } from '../models/response-base.model'

interface IMCPostResponse extends ResponseBase {
  historialIMC: HistorialIMC;
}

interface IMCGetResponse extends ResponseBase {
  historialesIMC: HistorialIMC[];
}
@Injectable({
  providedIn: 'root'
})
export class ImcService {

  constructor(private http: HttpClient) { }

  createIMC(imcData: number, rut: string) {
    const url = `${environment.api}/historial-imc`;
    return this.http.post<IMCPostResponse>(url, {imc: imcData, pacienteRut: rut}).toPromise();
  }

  getHistory(rut: string){
    return this.http.get<IMCGetResponse>(`${environment.api}/historial-imc/all?rut=${rut}`).toPromise();
  }
}
