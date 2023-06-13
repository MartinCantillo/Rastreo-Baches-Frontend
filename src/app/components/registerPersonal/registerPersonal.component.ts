import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerPersonal',
  templateUrl: './registerPersonal.component.html',
  styleUrls: ['./registerPersonal.component.css'],
})
export class RegisterPersonalComponent implements OnInit {
  cedula: number;
  nombre: string;
  direccion: string;
  telefono: string;

  constructor() {}

  ngOnInit() {}

  agregarPersonal() {
    
    this.cedula = 0;
    this.nombre = '';
    this.direccion = '';
    this.telefono = '';
  }
}
