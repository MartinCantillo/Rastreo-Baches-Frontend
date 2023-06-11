import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baches } from '../Models/Baches';

@Injectable({
  providedIn: 'root',
})
export class RegisterBachesService {
  private SaveBaches: string = 'http://localhost:8023/user/bache';
  //creo la variable para mandarsela como parametro y  consumir el servicio
  idCiudadno:number;
  constructor(private httpClient: HttpClient) {}

  public SaveUser(bache: baches): Observable<Object> {
    return this.httpClient.post(`${this.SaveBaches}`, bache);
  }
}
