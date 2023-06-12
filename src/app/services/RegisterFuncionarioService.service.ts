import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { funcionario } from '../Models/Funcionario';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterFuncionarioServiceService {
  private generatedKeys: number[] = [];
  private parametro: number = 0;
  idUser: number;
  private SaveFuncionario: string = 'http://localhost:8023/user/funcionario';

  constructor(private httpClient: HttpClient) {}
  generatePrimaryKey(): number {
    let key: number;
    do {
      key = Math.floor(Math.random() * 1000000);
    } while (this.generatedKeys.includes(key)); // Verifica si el número ya ha sido generado antes

    this.generatedKeys.push(key); // Almacena el nuevo número generado
    this.parametro = key;
    return key;
  }
  getParametro(): number {
    return this.parametro;
  }

  public SaveFuncionarios(funcionarios: funcionario): Observable<Object> {
    return this.httpClient.post(`${this.SaveFuncionario}`, funcionarios);
  }
}
