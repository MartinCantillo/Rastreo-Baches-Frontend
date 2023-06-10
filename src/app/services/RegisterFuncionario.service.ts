import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { funcionario } from '../Models/Funcionario';

@Injectable({
  providedIn: 'root',
})
export class RegisterFuncionarioService {
  private SaveFuncionario: string = 'http://localhost:8023/user/funcionario';
  constructor(private httpClient: HttpClient) {}

  public SaveUser(funcionario: funcionario): Observable<Object> {
    return this.httpClient.post(`${this.SaveFuncionario}`, funcionario);
  }
}
