import { Injectable } from '@angular/core';
import { baches } from '../Models/Baches';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ciudadano } from '../Models/Ciudadano';
import { user } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
//en este servicio cargo el bache en la tabla y consulto el ciudadno por medio del codigo de usuario y consulto baches por ciudadano
export class GetBachesService {
  ciudadano: ciudadano = new ciudadano();
  IdCiudadano: number = 0;
  user: user = new user();
  private apiUrl: string = 'http://localhost:8023/user/GetIdBache';
  private apiUrlC: string = 'http://localhost:8023/user/findciudadanobyId';
  constructor(private httpClient: HttpClient) {}

  //method to get baches of ciudadano , este es el que habia creado viejo
  findBacheByCiudadano(ciudadano: ciudadano): Observable<baches[]> {
    return this.httpClient.post<baches[]>(`${this.apiUrl}`, ciudadano);
  }
  //method to get pk of ciudadano me toca buscar en que servicio fue que obtuve el usuario por su username
  //inyecto este servicio en el loggo
  getCiudadanoByUserId(userId: number): Observable<ciudadano> {
    const url = `${this.apiUrlC}`;
    return this.httpClient.post<ciudadano>(url, { id: userId });
  }
}
