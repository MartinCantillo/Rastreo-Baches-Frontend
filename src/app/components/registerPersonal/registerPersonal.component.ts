import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personal } from 'src/app/Models/Personal';
import { RegisterPersonalServiceService } from 'src/app/services/RegisterPersonalService.service';

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
  idp: number;
  orden: number;
  personal: personal = new personal();
  constructor(
    private router: Router,
    private RegisterPersonalS: RegisterPersonalServiceService
  ) {}

  ngOnInit() {}

  agregarPersonal() {
    this.personal.cedula = this.cedula;
    this.personal.direccion = this.direccion;
    this.personal.nombre = this.nombre;
    this.personal.idp = this.RegisterPersonalS.generatePrimaryKey();
    this.personal.idp = this.RegisterPersonalS.getParametro();
    this.personal.telefono = this.telefono;
    this.personal.orden = this.RegisterPersonalS.ordenId;
    //  alert('orden enviada ' + this.personal.orden);
    this.RegisterPersonalS.SavePersonal(this.personal).subscribe({
      next: (res) => alert('Registro con exito'),
      error: (error) => {
        console.log(error);
      },
    });

    this.cedula = 0;
    this.nombre = '';
    this.direccion = '';
    this.telefono = '';
  }
  GetPersonal() {
    this.router.navigate(['/GetPersonal']);
  }
}
