import { Component } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent {
  email: string ="";
  password: string="";
  isAdmin: boolean=false;
  isCiudadano: boolean =false;

  login() {
    if (this.isAdmin) {
      // Inicio de sesión como administrador
      console.log('Inicio de sesión como administrador');
    } else if (this.isCiudadano) {
      // Inicio de sesión como ciudadano
      console.log('Inicio de sesión como ciudadano');
    } else {
      // No se seleccionó ningún tipo de usuario
      console.log('Por favor, seleccione un tipo de usuario');
    }
  }
}
