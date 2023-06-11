import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baches } from 'src/app/Models/Baches';
import { GeneratePkBachesService } from 'src/app/services/GeneratePkBaches.service';
import { GeneratePkCiudadanoService } from 'src/app/services/GeneratePkCiudadano.service';
import { RegisterBachesService } from 'src/app/services/RegisterBaches.service';

@Component({
  selector: 'app-RegisterBaches',
  templateUrl: './RegisterBaches.component.html',
  styleUrls: ['./RegisterBaches.component.css'],
})
export class RegisterBachesComponent implements OnInit {
  baches: baches = new baches();
  constructor(
    private RBaches: RegisterBachesService,
    private router: Router,
    private GeneratePkBachesS: GeneratePkBachesService,
    private GeneratePkCiudadanoS: GeneratePkCiudadanoService
  ) {}

  ngOnInit() {}
  formData: any = {
    direccion: '',
    tamano: '',
    ubicacion: '',
    distrito: '',
    urgencia: '',
  };
  submitForm() {
    this.baches.idB = this.GeneratePkBachesS.generatePrimaryKey();
    this.baches.idB = this.GeneratePkBachesS.getParametro();
    this.baches.direccionB = this.formData.direccion;
    this.baches.tamaño = this.formData.tamano;
    this.baches.ubicacionB = this.formData.ubicacion;
    this.baches.distrito = this.formData.distrito;
    this.baches.urgencia = this.formData.urgencia;
    this.baches.ciudadano = this.GeneratePkCiudadanoS.getParametro();
    this.RBaches.SaveUser(this.baches).subscribe({
      next: (res) => console.log(res),
      error: (error) => {
        console.log(error);
      },
    });
  }
}
