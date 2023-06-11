import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class GetPkUserService {
  username: string=""
  private baseUrl = 'http://localhost:8023/user/finduser';

  constructor(private http: HttpClient) {}

  //method to get pk of each user
  getpkUser(username: string): Observable<user> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username: username };

    return this.http.post<user>(`${this.baseUrl}`, body, { headers });
  }
}
