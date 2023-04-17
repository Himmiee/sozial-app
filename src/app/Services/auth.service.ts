import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegister, ILogin, LoginRes } from '../Models/login.model';

@Injectable({
  providedIn: 'root',
})

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
export class AuthService {
  private baseUrl = 'http://3.17.216.66:3000/users';

  constructor(private http: HttpClient) {}

  login(user: LoginRes): Observable<LoginRes> {
    return this.http.post<LoginRes>(`${this.baseUrl}/authenticate`, user);
  }

  register(user: any[]): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/register`, user);
  }
}
