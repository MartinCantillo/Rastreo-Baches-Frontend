import { Component } from '@angular/core';

@Component({
  selector: 'app-rciudadano',
  templateUrl: './rciudadano.component.html',
  styleUrls: ['./rciudadano.component.css']
})
export class RCiudadanoComponent {
  formData = {
    cedula: '',
    nombre: '',
    direccion: '',
    telefono: '',
    tipoRegistro: 'ciudadano'
  };

  submitForm() {
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
    console.log(this.formData);
  }
}
