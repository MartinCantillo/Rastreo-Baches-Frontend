import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baches } from 'src/app/Models/Baches';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { user } from 'src/app/Models/User';
import { GetBachesService } from 'src/app/services/GetBaches.service';
import { GetPkUserService } from 'src/app/services/GetPkUser.service';

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
  constructor(
    private GetBachesS: GetBachesService,
    private router: Router,
    private GetPkUserServ: GetPkUserService
  ) {
    this.getbachess();
    //ahora para cuando cargue el componente haga la busquedad enseguida del ciudadano
    this.getbachessByCiudadano() ;
  }

  ngOnInit() {}

  //Aqui inyecto el servicio para obtener el id del usuario enviandole como parametro el username
  private getbachesById() {
    //this.ciudadano = this.GetBachesS.ciudadano;
    // alert('valor de ciudadno enviado desde table' + this.ciudadano.idC);
    this.GetPkUserServ.getpkUser(this.GetPkUserServ.username).subscribe(
      (userData) => {
        this.user = userData;
        //get the pk of user
        this.idU = userData.id;
        this.GetBachesS.IdCiudadano=this.idU
      }
    );
  }
  //Aqui es para obtener el id del ciudadano
  private getbachessByCiudadano() {
    //voy a obtener el id del ciudadano en el mismo servicio donde consylto el bache por ciudadano
    this.ciudadano = this.GetBachesS.ciudadano;
    // alert('valor de ciudadno enviado desde table' + this.ciudadano.idC);
    this.GetBachesS.getCiudadanoByUserId(this.GetBachesS.IdCiudadano).subscribe(
      (userData) => {
        //Get the ciudadano
        this.ciudadano = userData;
        this.ciudadano2 = this.ciudadano;
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
        this.bachess = userData;
        
      }
    );
  }
  
}
