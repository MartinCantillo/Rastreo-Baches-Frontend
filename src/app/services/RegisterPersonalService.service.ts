import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personal } from '../Models/Personal';

@Injectable()
export class RegisterPersonalServiceService {
  private generatedKeys: number[] = [];
  private parametro: number = 0;
  private PersonalUrl: string = 'http://localhost:8023/user/personal';
  ordenId: number = 0;
  funcionarioId: number = 0;
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
  public SavePersonal(personals: personal): Observable<Object> {
    return this.httpClient.post(`${this.PersonalUrl}`, personals);
  }
  /* findByIdFuncionario(users: user): Observable<funcionario> {
    return this.httpClient.post<funcionario>(this.GetFUrl, users);
  }
  */
}
