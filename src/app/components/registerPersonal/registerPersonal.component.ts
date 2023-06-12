import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registerPersonal',
  templateUrl: './registerPersonal.component.html',
  styleUrls: ['./registerPersonal.component.css']
})
export class RegisterPersonalComponent implements OnInit {
  personalList: any[] = [];
  nuevaCedula: string = '';
  nuevoNombre: string = '';
  nuevaDireccion: string = '';
  nuevoTelefono: string = '';

  constructor() { }

  ngOnInit() {
  }
  agregarPersonal() {
    const nuevoPersonal = {
      cedula: this.nuevaCedula,
      nombre: this.nuevoNombre,
      direccion: this.nuevaDireccion,
      telefono: this.nuevoTelefono
    };

    this.personalList.push(nuevoPersonal);
    this.nuevaCedula = '';
    this.nuevoNombre = '';
    this.nuevaDireccion = '';
    this.nuevoTelefono = '';
  }
  eliminarPersonal(personal: any) {
    const index = this.personalList.indexOf(personal);
    if (index !== -1) {
      this.personalList.splice(index, 1);
    }
  }
  

}
