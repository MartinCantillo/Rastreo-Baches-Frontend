import { Component, OnInit } from '@angular/core';
import { orden } from 'src/app/Models/Orden';
import { personal } from 'src/app/Models/Personal';
import { GetPersonalByOrdenServiceService } from 'src/app/services/GetPersonalByOrdenService.service';

@Component({
  selector: 'app-GetPersonalByOrden',
  templateUrl: './GetPersonalByOrden.component.html',
  styleUrls: ['./GetPersonalByOrden.component.css'],
})
export class GetPersonalByOrdenComponent implements OnInit {
  personalList: personal[] = [];
  ordenn: orden = new orden();
  constructor(private GetPersonalByOrdenS: GetPersonalByOrdenServiceService) {
    this.upLoad();
  }

  ngOnInit() {}

  upLoad() {
    this.ordenn.idO=this.GetPersonalByOrdenS.idOrden;
    this.GetPersonalByOrdenS.findPersonal(this.ordenn).subscribe((userData) => {
      this.personalList = userData;
    });
  }
}
