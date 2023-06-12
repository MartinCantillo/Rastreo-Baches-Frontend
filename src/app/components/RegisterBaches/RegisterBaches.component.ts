import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { baches } from 'src/app/Models/Baches';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { GeneratePkBachesService } from 'src/app/services/GeneratePkBaches.service';
import { GeneratePkCiudadanoService } from 'src/app/services/GeneratePkCiudadano.service';
import { GetBachesService } from 'src/app/services/GetBaches.service';
import { RegisterBachesService } from 'src/app/services/RegisterBaches.service';
import { TableBachesComponent } from '../TableBaches/TableBaches.component';
import { GetPkUserService } from 'src/app/services/GetPkUser.service';
import { GetPkCiudadanoService } from 'src/app/services/GetPkCiudadano.service';
import { user } from 'src/app/Models/User';
import { RegisterAveriaService } from 'src/app/services/RegisterAveria.service';

@Component({
  selector: 'app-RegisterBaches',
  templateUrl: './RegisterBaches.component.html',
  styleUrls: ['./RegisterBaches.component.css'],
})
export class RegisterBachesComponent implements OnInit {
  baches: baches = new baches();
  ciudadanos: ciudadano = new ciudadano();
  ciudadano2: ciudadano = new ciudadano();
  user: user = new user();
  email:string;
  constructor(
    private RBaches: RegisterBachesService,
    private router: Router,
    private GeneratePkBachesS: GeneratePkBachesService,
    private GeneratePkCiudadanoS: GeneratePkCiudadanoService,
    private GetBachesS: GetBachesService,
    private GetPkUserServ: GetPkUserService,
    private GetPkCiudadanoS :GetPkCiudadanoService,
    
  ) {
    
  }

  ngOnInit() {
    this.email=this.GetPkUserServ.username
   
  //alert("email desde el segundo "+this.email)
  }
  formData: any = {
    direccion: '',
    tamano: '',
    ubicacion: '',
    distrito: '',
    urgencia: '',
  };
  submitForm() {
   /*  this.email = this.GetPkUserServ.username;
    this.GetPkUserServ.getpkUser(this.email).subscribe((userData) => {
      this.user = userData;
      //get the pk of user
      this.ciudadanos   = userData;
  
     // alert('ciuddano  pk ' + userData.id);
      // this.GetBachesS.IdCiudadano = this.idU;
    
    });
    */
    if (
      this.formData.direccion === '' ||
      this.formData.tamano === '' ||
      this.formData.ubicacion === '' ||
      this.formData.distrito === '' ||
      this.formData.urgencia === ''
    ) {alert('Por favor, complete todos los campos del formulario');
    return; // Detener el envío del formulario si hay campos vacíos
  }
 alert("ciudadano enviado  en getciudadanoyid"+this.RBaches.idCiudadno)
    //find the pk of the ciudadano
    this.GetBachesS.getCiudadanoByUserId(this.RBaches.idCiudadno).subscribe(
      (userData) => {
        //Get the ciudadano
        this.ciudadano2.idC = userData.idC;
        this.baches.ciudadano=this.ciudadano2.idC;
      // alert('Respuesta del servidor dentro de use data' + userData.nombreC);
      this.baches.idB = this.GeneratePkBachesS.generatePrimaryKey();
      this.baches.idB = this.GeneratePkBachesS.getParametro();
      
      this.baches.direccionB = this.formData.direccion;
      this.baches.tamano = this.formData.tamano;
      this.baches.ubicacionB = this.formData.ubicacion;
      this.baches.distrito = this.formData.distrito;
      this.baches.urgencia = this.formData.urgencia;
      //this.baches.ciudadano = this.GeneratePkCiudadanoS.getParametro();
      //creo primero el ciudadano solo con el id
      this.ciudadanos.idC = this.baches.ciudadano;
      //ahora incializo el servicio
     
     // alert("bache registrado con exito  this.GetBachesS.ciudadano +"+  this.baches.ciudadano )
  
      this.RBaches.SaveUser(this.baches).subscribe({
        next: (res) => this.ir(),
        error: (error) => {
          console.log(error);
        },
      });
      
      },
     
    );
    
   
  }
  ir(){
    this.navegar(this.email);
  }
  navegar(email: string) {
    this.router.navigate(['/tablabache']);
  }
}
