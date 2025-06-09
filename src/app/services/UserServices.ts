import { user } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogginservicesService {
  private SaveCiudadano: string = 'http://localhost:8023/user/saveuser';
  constructor(private httpClient: HttpClient) {}

  public SaveUser(user: user): Observable<Object> {
   
    return this.httpClient.post(this.SaveCiudadano, user);
  }
}
