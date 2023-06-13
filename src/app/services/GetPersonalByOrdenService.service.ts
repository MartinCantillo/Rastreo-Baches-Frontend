import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personal } from '../Models/Personal';
import { Observable } from 'rxjs';
import { orden } from '../Models/Orden';

@Injectable()
export class GetPersonalByOrdenServiceService {
    idOrden:number;
  private apiUrl: string = 'http://localhost:8023/user/GetPersonalByOrden';
  constructor(private httpClient: HttpClient) {}

  //method to get all personal by pk of the orden
  findPersonal(ordenn: orden): Observable<personal[]> {
    return this.httpClient.post<personal[]>(`${this.apiUrl}`, ordenn);
  }
}
