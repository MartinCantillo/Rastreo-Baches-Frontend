import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/Models/User';
import { LogginservicesService } from 'src/app/services/UserServices';

@Component({
  selector: 'app-rciudadano',
  templateUrl: './rciudadano.component.html',
  styleUrls: ['./rciudadano.component.css']
})
export class RCiudadanoComponent {
  user: user = new user(); // Instancia de la clase user
  formData = {
    cedula: '',
    nombre: '',
    direccion: '',
    telefono: '',
    tipoRegistro: 'ciudadano'
  };
  constructor(private router: Router) {}
  submitForm() {
     // Mapear los datos del formulario al objeto user
  }
}
