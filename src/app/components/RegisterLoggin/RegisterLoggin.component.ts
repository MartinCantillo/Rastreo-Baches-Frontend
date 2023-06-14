import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { user } from 'src/app/Models/User';
import { GeneratePkUsersService } from 'src/app/services/GeneratePkUsers.service';
import { GetPkCiudadanoService } from 'src/app/services/GetPkCiudadano.service';
import { RegisterFuncionarioServiceService } from 'src/app/services/RegisterFuncionarioService.service';
import { LogginservicesService } from 'src/app/services/UserServices';

@Component({
  selector: 'app-RegisterLoggin',
  templateUrl: './RegisterLoggin.component.html',
  styleUrls: ['./RegisterLoggin.component.css'],
})
export class RegisterLogginComponent implements OnInit {
  ciudadano: ciudadano = new ciudadano();
  usuario: string = '';
  User: user = new user();
  email: string = '';
  password: string = '';
  isAdmin: boolean = false;
  isCiudadano: boolean = false;
  constructor(
    private router: Router,
    private LogginS: LogginservicesService,
    private GeneratePk: GeneratePkUsersService,
    private route: ActivatedRoute,
    private GetPkCiudadano: GetPkCiudadanoService,
    private RegisterFuncionarioSer: RegisterFuncionarioServiceService
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
      this.User.id=this.GeneratePk.getParametro();

      //alert(this.User);
      this.LogginS.SaveUser(this.User).subscribe({
        next: (res) =>  this.router.navigate(['/Registrarc']),
        error: (error) => {
          console.log(error);
          alert('Error'+error);
        },
      });
     
    
      //this.router.navigate(['/Registrarc']);
    } else if (this.isCiudadano && this.email !== '' && this.password !== '') {
      // Inicio de sesión como ciudadano
      alert('Inicio de sesión como ciudadano');
      this.User.id = this.GeneratePk.generatePrimaryKey();
      this.User.username = this.email;
      this.User.password = this.password;
      this.User.rol = 2;
      this.User.id=this.GeneratePk.getParametro();
   //   alert(this.User.username);
      this.LogginS.SaveUser(this.User).subscribe({
        next: (res) => this.router.navigate(['/Registrarc']),
        error: (error) => {
          console.log(error);
          alert('Error'+error);
        },
      });
    
      
    } else {
      alert('Por favor, verifique los datos ingresados');
    }
  }
  redirect(): void {
    throw new Error('Method not implemented.');
  }
}
