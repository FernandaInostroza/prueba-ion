import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HistorialIMC, IMC } from '../models/imc.models';

interface IMCPostResponse{
  ok: boolean;
  historialIMC: HistorialIMC;
  error?: any;
}
@Injectable({
  providedIn: 'root'
})
export class ImcService {

  constructor(private http: HttpClient) { }

  createIMC(imcData: number) {
    const url = `${environment.api}historial-imc`;
    return this.http.post<IMCPostResponse>(url, imcData).toPromise();
  }
}
