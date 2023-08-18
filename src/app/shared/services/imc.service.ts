import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMC } from '../models/imc.models';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  constructor(private http: HttpClient) { }

  createIMC(imcData: number) {
    const url = `${environment.api}historial-imc`;
    return this.http.post<IMC>(url, imcData).toPromise();
  }
}
