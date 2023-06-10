import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { funcionario } from 'src/app/Models/Funcionario';
import { user } from 'src/app/Models/User';
import { GeneratePkUsersService } from 'src/app/services/GeneratePkUsers.service';
import { RciudadanoServicesService } from 'src/app/services/RciudadanoServices.service';
import { RegisterFuncionarioService } from 'src/app/services/RegisterFuncionario.service';
import { LogginservicesService } from 'src/app/services/UserServices';

@Component({
  selector: 'app-rciudadano',
  templateUrl: './rciudadano.component.html',
  styleUrls: ['./rciudadano.component.css'],
})
export class RCiudadanoComponent {
  ciudadano: ciudadano = new ciudadano(); // Instancia de la clase ciudadano
  funcionario: funcionario = new funcionario();
  formData: any = {
    cedula: '',
    nombre: '',
    direccion: '',
    telefono: '',
    tipoRegistro: '',
  };
  constructor(
    private router: Router,
    private ciudadanoS: RciudadanoServicesService,
    private GeneratePk: GeneratePkUsersService,
    private RFuncionario: RegisterFuncionarioService
  ) {}

  submitForm() {
    if (this.formData.tipoRegistro === '1') {
      alert('Funcionario');
      this.funcionario.user = this.GeneratePk.getParametro();
      this.funcionario.cedulaF = this.formData.cedula;
      this.funcionario.nombreF = this.formData.nombre;
      this.funcionario.telefonoF = this.formData.telefono;
      this.RFuncionario.SaveUser(this.funcionario).subscribe({
        next: (res) => console.log(res),
        error: (error) => {
          console.log(error);
        },
      });
    } else if (this.formData.tipoRegistro === '2') {
      alert('Ciudadano');
      this.ciudadano.user = this.GeneratePk.getParametro();
      this.ciudadano.cedulaC = this.formData.cedula;
      this.ciudadano.nombreC = this.formData.nombre;
      this.ciudadano.direccionC = this.formData.direccion;
      this.ciudadano.telefonoC = this.formData.telefono;
      this.ciudadanoS.SaveUser(this.ciudadano).subscribe({
        next: (res) => console.log(res),
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
