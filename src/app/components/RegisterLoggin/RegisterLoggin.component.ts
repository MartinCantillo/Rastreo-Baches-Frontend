import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/Models/User';
import { GeneratePkUsersService } from 'src/app/services/GeneratePkUsers.service';
import { LogginservicesService } from 'src/app/services/UserServices';

@Component({
  selector: 'app-RegisterLoggin',
  templateUrl: './RegisterLoggin.component.html',
  styleUrls: ['./RegisterLoggin.component.css'],
})
export class RegisterLogginComponent implements OnInit {
  User: user = new user();
  email: string = '';
  password: string = '';
  isAdmin: boolean = false;
  isCiudadano: boolean = false;
  constructor(
    private router: Router,
    private LogginS: LogginservicesService,
    private GeneratePk: GeneratePkUsersService
  ) {}

  ngOnInit() {}

  login() {
    if (this.isAdmin && this.email !== '' && this.password !== '') {
      // Inicio de sesión como funcionario
      alert('Inicio de sesión como funcionoario');
      this.User.id = this.GeneratePk.generatePrimaryKey();
      this.User.username = this.email;
      this.User.password = this.password;
      this.User.rol = 1;

      alert(this.User);
      this.LogginS.SaveUser(this.User).subscribe({
        next: (res) => this.redirect(),
        error: (error) => {
          console.log(error);
        },
      });
      this.router.navigate(['/Registrarc']);
    } else if (this.isCiudadano && this.email !== '' && this.password !== '') {
      // Inicio de sesión como ciudadano
      alert('Inicio de sesión como ciudadano');
      this.User.id = this.GeneratePk.generatePrimaryKey();
      this.User.username = this.email;
      this.User.password = this.password;
      this.User.rol = 2;
      alert(this.User.username);
      this.LogginS.SaveUser(this.User).subscribe({
        next: (res) => this.redirect(),
        error: (error) => {
          console.log(error);
        },
      });
      this.router.navigate(['/Registrarc']);
    } else {
      // No se seleccionó ningún tipo de usuario o no se ingresó el email y contraseña
      alert('Por favor, verifique los datos ingresados');
    }
  }
  redirect(): void {
    throw new Error('Method not implemented.');
  }
}
