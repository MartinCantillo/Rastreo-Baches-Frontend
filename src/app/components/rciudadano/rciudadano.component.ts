import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { user } from 'src/app/Models/User';
import { GeneratePkUsersService } from 'src/app/services/GeneratePkUsers.service';
import { RciudadanoServicesService } from 'src/app/services/RciudadanoServices.service';
import { LogginservicesService } from 'src/app/services/UserServices';


@Component({
  selector: 'app-rciudadano',
  templateUrl: './rciudadano.component.html',
  styleUrls: ['./rciudadano.component.css'],
})
export class RCiudadanoComponent {
  ciudadano: ciudadano = new ciudadano(); // Instancia de la clase ciudadano
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
  ) {}

  submitForm() {
    this.ciudadano.user=this.GeneratePk.getParametro();
    this.ciudadano.cedulaC = this.formData.cedula;
    this.ciudadano.nombreC = this.formData.nombre;
    this.ciudadano.direccionC = this.formData.direccion;
    this.ciudadano.telefonoC = this.formData.telefono;
alert("valor que se le envia al backend" +this.ciudadano.user)
      if (this.formData.tipoRegistro === '1') {
        alert('Funcionario');

        // Aquí puedes realizar cualquier acción adicional para los funcionarios
      } else if (this.formData.tipoRegistro === '2') {
       
        alert('Ciudadano');
        this.ciudadanoS.SaveUser(this.ciudadano).subscribe({
          next: (res) => console.log(res),
          error: (error) => {
            console.log(error);
          },
        });
        // Aquí puedes realizar cualquier acción adicional para los ciudadanos
      }
    }
  }


