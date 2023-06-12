import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { averia } from 'src/app/Models/Averia';
import { baches } from 'src/app/Models/Baches';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { RegisterAveriaService } from 'src/app/services/RegisterAveria.service';

@Component({
  selector: 'app-RegisterAveria',
  templateUrl: './RegisterAveria.component.html',
  styleUrls: ['./RegisterAveria.component.css'],
})
export class RegisterAveriaComponent implements OnInit {
  //ciudadano: ciudadano = new ciudadano();
  //baches: baches = new baches();
  averia: averia = new averia();
  tipoDeDano: string = '';
  costo: string = '';
  constructor(
    private router: Router,
    private RegisterAveriaS: RegisterAveriaService
  ) {}

  ngOnInit() {}
  Enviar() {
    if (this.tipoDeDano != '' && this.costo != '') {
      //initiate the averia object
      this.averia.idA = this.RegisterAveriaS.generatePrimaryKey();
      this.averia.idA = this.RegisterAveriaS.getParametro();
      this.averia.ciudadano = this.RegisterAveriaS.codigoCiudadano;
      this.averia.bache = this.RegisterAveriaS.codigoBache;
      //send the averia to the server
      this.RegisterAveriaS.SaveAverias(this.averia).subscribe({
        next: (valor) => (
          console.log('Valor emitido:', valor),
          this.router.navigate(['/Registrarb']),
        alert("registro exitoso")
        ),
        error: (error) => alert('Error' + error),
        complete: () => console.log("complete")
      });
    } else {
      alert('por favor verificar');
    }
  }
}
