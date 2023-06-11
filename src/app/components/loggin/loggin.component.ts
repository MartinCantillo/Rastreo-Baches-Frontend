import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetBachesService } from 'src/app/services/GetBaches.service';
import { GetPkUserService } from 'src/app/services/GetPkUser.service';
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
  idU: number;
  constructor(
    private router: Router,
    private GetPkUserServ: GetPkUserService,
    private GetBachesServ: GetBachesService
  ) {}
  login() {
    if (this.isAdmin && this.email !== '' && this.password !== '') {
      // Inicio de sesión como Funcionario
      alert('Inicio de sesión como Funcionario');
      this.GetBachesServ.user.username = this.email;
      this.GetPkUserServ.username = this.email;

      //this.router.navigate(['/Registrarc', this.email]);
    } else if (this.isCiudadano && this.email !== '' && this.password !== '') {
      // Inicio de sesión como ciudadano
      //consulto en la bd para verificar que el usuario este registrado

      alert('Inicio de sesión como ciudadano');
      this.GetPkUserServ.username = this.email;
      this.GetBachesServ.user.username = this.email;

      //hago a consulta para obtener el pk de user
      alert('usuario enviado ' + this.email);
      this.GetPkUserServ.getpkUser(this.email).subscribe({
        //get id of the user
        next: (res) => (this.idU = res.id),
        error: (error) => {
          console.log(error);
        },
      });
      alert('id obtenido ' + this.idU);
    } else {
      // No se seleccionó ningún tipo de usuario o no se ingresó el email y contraseña
      alert('Por favor, verifique los datos ingresados');
    }
  }

  //ahora creo el metodo para obtener e
}
