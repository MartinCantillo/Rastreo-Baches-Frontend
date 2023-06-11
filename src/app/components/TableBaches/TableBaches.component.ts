import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baches } from 'src/app/Models/Baches';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { GetBachesService } from 'src/app/services/GetBaches.service';

@Component({
  selector: 'app-TableBaches',
  templateUrl: './TableBaches.component.html',
  styleUrls: ['./TableBaches.component.css'],
})
export class TableBachesComponent implements OnInit {
  bachess: baches = new baches();
  ciudadano: ciudadano = new ciudadano();
  constructor(private GetBachesS: GetBachesService, private router: Router) {
    this.getbachess();
  }

  ngOnInit() {}

  private getbachess() {
    this.ciudadano = this.GetBachesS.ciudadano;
    // alert('valor de ciudadno enviado desde table' + this.ciudadano.idC);
    this.GetBachesS.findBacheByCiudadano(this.ciudadano).subscribe(
      (userData) => {
        this.bachess = userData;
      }
    );
  }

  Averia(): void {
    this.router.navigate(['/Registrara']);
  }
}
