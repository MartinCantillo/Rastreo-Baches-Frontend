import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetPkCiudadanoService {
  pkKey: number = 0;
  constructor() {}

  getPrimaryKey(pk: number): number {
    this.pkKey = pk;
    return this.pkKey;
  }

  getpkKey(): number {
    return this.pkKey;
  }
}
