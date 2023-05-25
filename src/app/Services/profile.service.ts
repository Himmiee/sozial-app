import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class profileService {

  private baseUrl = 'http://3.17.216.66:3000';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    let auth_token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      
    const requestOptions = { headers: headers }
    
    return this.http.get<any[]>(`${this.baseUrl}/posts`,requestOptions);
  }

  getFriends(): Observable<any[]> {
    let auth_token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      
    const requestOptions = { headers: headers }
    
    return this.http.get<any[]>(`${this.baseUrl}/friends`,requestOptions);
  }

}
