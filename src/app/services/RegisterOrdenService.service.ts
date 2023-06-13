import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orden } from '../Models/Orden';
import { Observable } from 'rxjs';
import { funcionario } from '../Models/Funcionario';
import { user } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterOrdenServiceService {
  private generatedKeys: number[] = [];
  private parametro: number = 0;
  bacheId: number;
  usuarioId: number;
  private OrdenUrl: string = 'http://localhost:8023/user/saveOrden';
  private GetFUrl: string = 'http://localhost:8023/user/getpkfuncionario';
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
  findByIdFuncionario(users: user): Observable<funcionario> {
    return this.httpClient.post<funcionario>(this.GetFUrl, users);
  }
}
