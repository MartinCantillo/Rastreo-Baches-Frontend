import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baches } from 'src/app/Models/Baches';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { user } from 'src/app/Models/User';
import { GetBachesService } from 'src/app/services/GetBaches.service';
import { GetPkUserService } from 'src/app/services/GetPkUser.service';
import { ActivatedRoute } from '@angular/router';
import { RegisterAveriaService } from 'src/app/services/RegisterAveria.service';
@Component({
  selector: 'app-TableBaches',
  templateUrl: './TableBaches.component.html',
  styleUrls: ['./TableBaches.component.css'],
})
export class TableBachesComponent implements OnInit {
  bachess: baches = new baches();
  ciudadano: ciudadano = new ciudadano();
  ciudadano2: ciudadano = new ciudadano();
  user: user = new user();
  idU: number = 0;
  email: string;
  bachessList: baches[] = [];

  constructor(
    private GetBachesS: GetBachesService,
    private router: Router,
    private GetPkUserServ: GetPkUserService,
    private route: ActivatedRoute,
    private RegisterAveriaS: RegisterAveriaService
  ) {
    this.getbachesById();
  }

  ngOnInit() {
    //alert('email desde el tercero' + this.GetPkUserServ.username);
  }

  //Aqui inyecto el servicio para obtener el id del usuario enviandole como parametro el username
  private getbachesById() {
    //this.ciudadano = this.GetBachesS.ciudadano;
    // alert('valor de ciudadno enviado desde table' + this.ciudadano.idC);
    this.email = this.GetPkUserServ.username;
    this.GetPkUserServ.getpkUser(this.email).subscribe((userData) => {
      this.user = userData;
      //get the pk of user
      this.idU = userData.id;
      this.ciudadano.idC = this.idU;
      // alert('ciuddano  pk ' + userData.id);
      // this.GetBachesS.IdCiudadano = this.idU;
      this.getbachessByCiudadano();
    });
  }
  //Aqui es para obtener el id del ciudadano
  private getbachessByCiudadano() {
    //voy a obtener el id del ciudadano en el mismo servicio donde consylto el bache por ciudadano
    // alert('valor de ciudadno enviado desde table' + this.ciudadano.idC);
    //alert("user data en el metodo getbachesbyciudanos")
    //   alert('this.ciudadano2 enviado al servidor' + this.ciudadano.idC);
    this.GetBachesS.getCiudadanoByUserId(this.ciudadano.idC).subscribe(
      (userData) => {
        //Get the ciudadano
        this.ciudadano2 = userData;
       
        //alert('Respuesta del servidor' + userData);
        this.getbachess();
      }
    );
  }

  Averia(): void {
    this.router.navigate(['/Registrara']);
  }

  private getbachess() {
    // alert('valor de ciudadno enviado desde table' + this.ciudadano.idC);
    this.GetBachesS.findBacheByCiudadano(this.ciudadano2).subscribe(
      (userData) => {
        this.bachessList = userData;
        //Get pk of bache
        if (userData.length > 0) {
          this.RegisterAveriaS.codigoBache = userData[0].idB;
        }
      }
    );
  }
}
