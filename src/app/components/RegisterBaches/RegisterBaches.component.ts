import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { baches } from 'src/app/Models/Baches';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { GeneratePkBachesService } from 'src/app/services/GeneratePkBaches.service';
import { GeneratePkCiudadanoService } from 'src/app/services/GeneratePkCiudadano.service';
import { GetBachesService } from 'src/app/services/GetBaches.service';
import { RegisterBachesService } from 'src/app/services/RegisterBaches.service';
import { TableBachesComponent } from '../TableBaches/TableBaches.component';

@Component({
  selector: 'app-RegisterBaches',
  templateUrl: './RegisterBaches.component.html',
  styleUrls: ['./RegisterBaches.component.css'],
})
export class RegisterBachesComponent implements OnInit {
  baches: baches = new baches();
  ciudadanos: ciudadano = new ciudadano();
  constructor(
    private RBaches: RegisterBachesService,
    private router: Router,
    private GeneratePkBachesS: GeneratePkBachesService,
    private GeneratePkCiudadanoS: GeneratePkCiudadanoService,
    private GetBachesS: GetBachesService
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
    this.baches.tamano = this.formData.tamano;
    this.baches.ubicacionB = this.formData.ubicacion;
    this.baches.distrito = this.formData.distrito;
    this.baches.urgencia = this.formData.urgencia;
    this.baches.ciudadano = this.GeneratePkCiudadanoS.getParametro();
    //creo primero el ciudadano solo con el id
    this.ciudadanos.idC = this.baches.ciudadano;
    //ahora incializo el servicio
    this.GetBachesS.ciudadano = this.ciudadanos;
    //this.GetBachesS.viu();

    this.RBaches.SaveUser(this.baches).subscribe({
      next: (res) => this.router.navigate(['/loggin']),
      error: (error) => {
        console.log(error);
      },
    });
  }
}
