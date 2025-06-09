import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personal } from '../Models/Personal';
import { Observable } from 'rxjs';
import { orden } from '../Models/Orden';
import { personal2 } from '../Models/Personal2';

@Injectable()
export class GetPersonalByOrdenServiceService {
    idOrden:number;
  private apiUrl: string = 'http://localhost:8023/user/GetPersonalByOrden';
  private apiUrl2: string = 'http://localhost:8023/user/GetAllPersonal';

  constructor(private httpClient: HttpClient) {}

  //method to get all personal by pk of the orden
  findPersonal(ordenn: orden): Observable<personal[]> {
    return this.httpClient.post<personal[]>(`${this.apiUrl}`, ordenn);
  }

  findAll():Observable<personal2[]>{
    return this.httpClient.get<personal2[]>(`${this.apiUrl2}`);
  }
}
