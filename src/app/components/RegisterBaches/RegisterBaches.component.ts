import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baches } from 'src/app/Models/Baches';
import { RegisterBachesService } from 'src/app/services/RegisterBaches.service';

@Component({
  selector: 'app-RegisterBaches',
  templateUrl: './RegisterBaches.component.html',
  styleUrls: ['./RegisterBaches.component.css'],
})
export class RegisterBachesComponent implements OnInit {
  baches: baches = new baches();
  constructor(private RBaches: RegisterBachesService, private router: Router) {}

  ngOnInit() {}
  formData: any = {
    direccion: '',
    tamaño: '',
    ubicacion: '',
    distrito: '',
    urgencia: '',
  };
  submitForm() {
    this.baches.direccionB = this.formData.direccion;
    this.baches.tamaño = this.formData.tamaño;
    this.baches.ubicacionB = this.formData.ubicacion;
    this.baches.distrito = this.formData.distrito;
    this.baches.urgencia = this.formData.urgencia;
    this.RBaches.SaveUser(this.baches).subscribe({
      next: (res) => console.log(res),
      error: (error) => {
        console.log(error);
      },
    });
  }
  }

