import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { funcionario } from 'src/app/Models/Funcionario';
import { orden } from 'src/app/Models/Orden';
import { user } from 'src/app/Models/User';
import { RegisterOrdenServiceService } from 'src/app/services/RegisterOrdenService.service';
import { RegisterPersonalServiceService } from 'src/app/services/RegisterPersonalService.service';

@Component({
  selector: 'app-RegisterOrden',
  templateUrl: './RegisterOrden.component.html',
  styleUrls: ['./RegisterOrden.component.css'],
})
export class RegisterOrdenComponent implements OnInit {
  horas: number;
  estado: string;
  materiales: string;
  precio: string;
  users: user = new user();
  ordens: orden = new orden();
  pkF: number = 0;
  constructor(
    private router: Router,
    private RegisterOrdenS: RegisterOrdenServiceService,
    private RegisterPersonalS: RegisterPersonalServiceService
  ) {
    this.ordens.bache = this.RegisterOrdenS.bacheId;
  }

  ngOnInit() {}
  registrar() {
    this.ordens.idO = this.RegisterOrdenS.generatePrimaryKey();
    this.ordens.idO = this.RegisterOrdenS.generatePrimaryKey();
    this.ordens.estados = this.estado;
    this.ordens.horas = this.horas;
    this.ordens.materiales = this.materiales;
    this.ordens.precio = this.precio;
    this.RegisterPersonalS.ordenId = this.ordens.idO;
    //alert('codigo del bache desde la orden' + this.ordens.bache);
    //quede por aqui , ahora me falta buscar el id del funcionario para agregar la orden , tambien despues de aqui pasa
    //a registrar el personal
    //pk of the  user as funcionario
    this.users.id = this.RegisterOrdenS.usuarioId;
    // alert('funcionario id enviado ' + this.users.id);
    //get pk of the funcionario
    this.RegisterOrdenS.findByIdFuncionario(this.users).subscribe(
      (userData) => {
        this.pkF = userData.idF;
        this.ordens.funcionario = this.pkF;
        // alert('user encontrado y enviado' + this.ordens.funcionario);
        this.RegisterOrdenS.SaveOrden(this.ordens).subscribe({
          next: (res) => alert('Registro con exito'),
          error: (error) => {
            console.log(error);
          },
        });
      }
    );
    this.router.navigate(['/Resgistrarp']);
  }
}
