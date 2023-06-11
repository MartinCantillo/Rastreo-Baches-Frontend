import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ciudadano } from '../Models/Ciudadano';
import { HttpClient } from '@angular/common/http';
import { user } from '../Models/User';//
//service failed
@Injectable({
  providedIn: 'root',
})
export class GetPkCiudadanoService {
  pkKey: number = 0;
  user: user = new user();
  private apiUrl: string = 'http://localhost:8023/user/find';
  private apiUrlCi: string = 'http://localhost:8023/user/Getciudadano';
  constructor(private httpClient: HttpClient) {}

  getPrimaryKey(pk: number): number {
    this.pkKey = pk;
    return this.pkKey;
  }

  getpkKey(): number {
    return this.pkKey;
  }
  getCiudadanoById() {}
  //method to get id of the users , me tocaria actualizar este metodo y ya no seria string sino el int y el id como tal del ciudadano
  findById(id: number): Observable<Object> {
    return this.httpClient.get<Object>(`${this.apiUrl}find/${id}`);
  }

  findByIdCiudadano(userd: user): Observable<Object> {
    return this.httpClient.post<user>(this.apiUrlCi, userd);
  }
}
