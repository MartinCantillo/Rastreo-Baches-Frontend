import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orden } from '../Models/RegisterOrden';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterOrdenServiceService {
  private generatedKeys: number[] = [];
  private parametro: number = 0;
  Funcionarioid: number;
  private OrdenUrl: string = 'http://localhost:8023/user/saveOrden';
  constructor(private httpClient: HttpClient) {}
  generatePrimaryKey(): number {
    let key: number;
    do {
      key = Math.floor(Math.random() * 1000000); // Genera un número aleatorio entre 0 y 999999
    } while (this.generatedKeys.includes(key)); // Verifica si el número ya ha sido generado antes

    this.generatedKeys.push(key); // Almacena el nuevo número generado
    this.parametro = key;
    return key;
  }
  getParametro(): number {
    return this.parametro;
  }
  public SaveOrden(ordenes: orden): Observable<Object> {
    return this.httpClient.post(`${this.OrdenUrl}`, ordenes);
  }
}
