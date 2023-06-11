import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GetBachesService } from 'src/app/services/GetBaches.service';
import { GetPkUserService } from 'src/app/services/GetPkUser.service';
import { RegisterBachesService } from 'src/app/services/RegisterBaches.service';
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
    private GetBachesServ: GetBachesService,
    private RegisterBachesSer :RegisterBachesService
  
  ) {}

  login() {
    if (this.isAdmin && this.email !== '' && this.password !== '') {
      // Inicio de sesión como Funcionario
      alert('Inicio de sesión como Funcionario');
      this.GetBachesServ.user.username = this.email;
      this.GetPkUserServ.username = this.email;
    //  alert("VAlor del email "+this.GetPkUserServ.username)

      //para pasarle el username al componente de table
      
    } else if (this.isCiudadano && this.email !== '' && this.password !== '') {
      // Inicio de sesión como ciudadano
      //consulto en la bd para verificar que el usuario este registrado
      
      this.GetPkUserServ.username = this.email;
      //this.GetBachesServ.user.username = this.email;
      alert('Inicio de sesión como ciudadano ');
      //hago a consulta para obtener el pk de user
      // alert('usuario enviado ' + this.email);
      
      this.GetPkUserServ.getpkUser(this.email).subscribe({
        //get id of the user
        next: (res) => {
          console.log(res);
          //alert('id obtenido1 ' +res.id)
          if (Object.keys(res).length !== 0) {
            if (this.password == res.password) {
             this.RegisterBachesSer.idCiudadno=res.id;
              this.router.navigate(['/Registrarb']);
            } else {
              alert('Contraseña incorrecta');
            }
          }
          //verifico que el password sea igual al que me extraiga el servidor
        },
        error: (error) => {
          console.log(error);
          alert('Usuario no registrado');
        },
      });
      //alert('id obtenido2 ' + this.idU);
    } else {
      // No se seleccionó ningún tipo de usuario o no se ingresó el email y contraseña
      alert('Por favor, verifique los datos ingresados');
    }
  }

  
}
