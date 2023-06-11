import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneratePkBachesService {
  private generatedKeys: number[] = [];
  private parametro: number = 0;
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
  constructor() {}
}
