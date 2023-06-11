import { Injectable } from '@angular/core';
import { baches } from '../Models/Baches';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ciudadano } from '../Models/Ciudadano';

@Injectable({
  providedIn: 'root',
})
export class GetBachesService {
  ciudadano: ciudadano = new ciudadano() ;
 
  private apiUrl: string = 'http://localhost:8023/user/GetIdBache';
  constructor(private httpClient: HttpClient) {
    
  }
 
  
  findBacheByCiudadano(ciudadano: ciudadano): Observable<baches> {
    return this.httpClient.post<baches>(`${this.apiUrl}`, ciudadano);
  }
}
