import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baches } from '../Models/Baches';
import { Observable } from 'rxjs';

@Injectable()
export class GetAllBachesServiceService {
  private apiUrl: string = 'http://localhost:8023/user/GetAllBache';
  constructor(private httpClient: HttpClient) {}

  //method to get all baches 
  findAllUsers(): Observable<baches[]>{
    return this.httpClient.get<baches[]>(`${this.apiUrl}`);
  }
}
