import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baches } from 'src/app/Models/Baches';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { user } from 'src/app/Models/User';
import { GetAllBachesServiceService } from 'src/app/services/GetAllBachesService.service';
import { RegisterAveriaService } from 'src/app/services/RegisterAveria.service';
import { RegisterOrdenServiceService } from 'src/app/services/RegisterOrdenService.service';

@Component({
  selector: 'app-TableAllBaches',
  templateUrl: './TableAllBaches.component.html',
  styleUrls: ['./TableAllBaches.component.css'],
})
export class TableAllBachesComponent implements OnInit {
  bache: baches = new baches();
  ciudadano: ciudadano = new ciudadano();
  ciudadano2: ciudadano = new ciudadano();
  bachessList: baches[] = [];
  user: user = new user();
  idU: number = 0;
  email: string;

  constructor(
    private router: Router,
    private GetAllBachesSer: GetAllBachesServiceService,
    public RegisterOrdenS: RegisterOrdenServiceService,
    public RegisterAveriaSe: RegisterAveriaService
  ) {
    this.loadBaches();
  }
  private loadBaches() {
    this.GetAllBachesSer.findAllUsers().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda , aqui relleno el vector
      (userData) => {
        this.bachessList = userData;
      }
    );
  }
  ngOnInit() {}
  Ordenar() {
    this.router.navigate(['/Resgistraro']);
  }
  seleccionarBache(bacheId: number) {
    // get the pk of bache selected
   // console.log('Bache seleccionado: ' + bacheId);
    this.RegisterOrdenS.bacheId = bacheId;
    this.RegisterAveriaSe.codigoBache = bacheId;
  }
  GetAveria() {
    this.router.navigate(['/Registrara']);
  }
}
