import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orden } from 'src/app/Models/RegisterOrden';
import { RegisterOrdenServiceService } from 'src/app/services/RegisterOrdenService.service';

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
  ordens: orden = new orden();
  constructor(
    private router: Router,
    private RegisterOrdenS: RegisterOrdenServiceService
  ) {}

  ngOnInit() {}
  registrar() {
    this.ordens.idO = this.RegisterOrdenS.generatePrimaryKey();
    this.ordens.idO = this.RegisterOrdenS.generatePrimaryKey();
    this.ordens.estado = this.estado;
    this.ordens.horas = this.horas;
    this.ordens.materiales = this.materiales;
    this.ordens.precio = this.precio;
    //quede por aqui , ahora me falta buscar el id del funcionario para agregar la orden , tambien despues de aqui pasa
    //a registrar el personal 
    this.RegisterOrdenS.SaveOrden(this.ordens).subscribe({
      next: (res) => (
        alert('Registro con exito'), this.router.navigate(['/Registrarc'])
      ),
      error: (error) => {
        console.log(error);
        alert('Error' + error);
      },
    });
  }
}
