import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogginservicesService } from 'src/app/services/UserServices';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
})
export class LogginComponent {
  email: string = '';
  password: string = '';
  isAdmin: boolean = false;
  isCiudadano: boolean = false;
 
  login() {
    if (this.isAdmin && this.email !== '' && this.password !== '') {
      // Inicio de sesión como administrador
      alert('Inicio de sesión como administrador');
    } else if (this.isCiudadano && this.email !== '' && this.password !== '') {
      // Inicio de sesión como ciudadano
      alert('Inicio de sesión como ciudadano');
    } else {
      // No se seleccionó ningún tipo de usuario o no se ingresó el email y contraseña
      alert('Por favor, verifique los datos ingresados');
    }
  }
}
