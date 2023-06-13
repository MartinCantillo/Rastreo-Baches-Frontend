import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { averia } from 'src/app/Models/Averia';
import { baches } from 'src/app/Models/Baches';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { user } from 'src/app/Models/User';
import { RegisterAveriaService } from 'src/app/services/RegisterAveria.service';
import { RegisterOrdenServiceService } from 'src/app/services/RegisterOrdenService.service';

@Component({
  selector: 'app-RegisterAveria',
  templateUrl: './RegisterAveria.component.html',
  styleUrls: ['./RegisterAveria.component.css'],
})
export class RegisterAveriaComponent implements OnInit {
  averia: averia = new averia();
  tipoDeDano: string;
  costo: string;
  user: user = new user();
  funcionraioPk: number;

  constructor(
    private router: Router,
    private RegisterAveriaS: RegisterAveriaService,
    private GetPkFuncionarioS: RegisterOrdenServiceService
  ) {}

  ngOnInit() {
    console.log(
      'codigo de bache  desde averia' +this.RegisterAveriaS.codigoBache
    );
  }

  Enviar() {
    this.averia.tipoDano = this.tipoDeDano;
    this.averia.costo = this.costo;
    if (this.tipoDeDano != '' && this.costo != '') {
      console.log('tipoDAno' + this.tipoDeDano);
      console.log('costo' + this.costo);
      this.user.id = this.RegisterAveriaS.codigoUsuariofk;
      this.averia.idA = this.RegisterAveriaS.generatePrimaryKey();
      this.averia.idA = this.RegisterAveriaS.getParametro();

      this.averia.bache = this.RegisterAveriaS.codigoBache;
      this.GetPkFuncionarioS.findByIdFuncionario(this.user).subscribe(
        (userData) => {
          this.funcionraioPk = userData.idF;
          this.averia.funcionario = this.funcionraioPk;
          this.RegisterAveriaS.SaveAverias(this.averia).subscribe({
            next: (valor) => {
              alert('registro exitoso');
              this.router.navigate(['/GetBaches']);
            },
            error: (error) => alert('Error' + error),
          });
        }
      );
    } else {
      alert('Por favor, verificar los datos');
    }
  }
}
