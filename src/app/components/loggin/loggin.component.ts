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
  constructor(private router: Router) {}
  login() {
    if (this.isAdmin && this.email !== '' && this.password !== '') {
      // Inicio de sesión como administrador
      alert('Inicio de sesión como administrador');
      //envio el usuario por enrutamiento de parametros
      this.router.navigate(['/Registrarc', this.email]);
    } else if (this.isCiudadano && this.email !== '' && this.password !== '') {
      // Inicio de sesión como ciudadano
      alert('Inicio de sesión como ciudadano');
      //envio el usuario por enrutamiento de parametros
      this.router.navigate(['/Registrarc', this.email]);
    } else {
      // No se seleccionó ningún tipo de usuario o no se ingresó el email y contraseña
      alert('Por favor, verifique los datos ingresados');
    }
  }
}
