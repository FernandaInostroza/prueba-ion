import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.models';

interface AuthPostResponse extends HttpResponseBase {
  auth: User;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private usuarioAutenticado: boolean = false;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return (this.http.post<AuthPostResponse>(`${environment.api}/auth`, { email, password })).toPromise();
  }
}
