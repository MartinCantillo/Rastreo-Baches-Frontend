import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ciudadano } from '../Models/Ciudadano';

@Injectable()
export class RciudadanoServicesService {
  private SaveCiudadano: string = 'http://localhost:8023/user/savec';
  constructor(private httpClient: HttpClient) {}

  public SaveUser(user: ciudadano): Observable<Object> {
    return this.httpClient.post(`${this.SaveCiudadano}`, user);
  }
}
