import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponseFaqs } from '../models/faqs.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  constructor(private http: HttpClient) { }

//FAQS
getAllFaqs(){
  const url = `${environment.api}/faqs/all`;
  return this.http.get<ApiResponseFaqs>(url).toPromise();
}
}
