import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ciudadano } from '../Models/Ciudadano';
import { HttpClient } from '@angular/common/http';
import { user } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class GetPkCiudadanoService {
  pkKey: number = 0;
  private apiUrl: string = 'http://localhost:8023/user/find';
  constructor(private httpClient: HttpClient) {}

  getPrimaryKey(pk: number): number {
    this.pkKey = pk;
    return this.pkKey;
  }

  getpkKey(): number {
    return this.pkKey;
  }
  getCiudadanoById() {
    //me falta inyectar el servicio ara consultar a la bd y crear el backend obtener el id
  }
  //method to get id of the ciudadano
  findById(usuario: string): Observable<user> {
    const requestBody = { username: usuario };
    return this.httpClient.post<user>(this.apiUrl, requestBody);
  }

}
