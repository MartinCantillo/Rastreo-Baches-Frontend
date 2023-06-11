import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RCiudadanoComponent } from './components/rciudadano/rciudadano.component';
import { RegisterLogginComponent } from './components/RegisterLoggin/RegisterLoggin.component';
import { RciudadanoServicesService } from './services/RciudadanoServices.service';
import { RegisterBachesComponent } from './components/RegisterBaches/RegisterBaches.component';
import { RegisterFuncionarioService } from './services/RegisterFuncionario.service';
import { RegisterBachesService } from './services/RegisterBaches.service';
import { GeneratePkCiudadanoService } from './services/GeneratePkCiudadano.service';
import { GeneratePkBachesService } from './services/GeneratePkBaches.service';
import { TableBachesComponent } from './components/TableBaches/TableBaches.component';
import { RegisterAveriaComponent } from './components/RegisterAveria/RegisterAveria.component';

const appRoutes: Routes = [
  { path: 'loggin', component: LogginComponent },
  { path: 'Registrarc', component: RCiudadanoComponent },
  { path: 'Registrarl', component: RegisterLogginComponent },
  { path: 'Registrarb', component: RegisterBachesComponent },
  { path: 'tablabache', component: TableBachesComponent },
  { path: 'Registrara', component: RegisterAveriaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    RCiudadanoComponent,
    RegisterLogginComponent,
    RegisterBachesComponent,
    TableBachesComponent,
    RegisterAveriaComponent,
    
  ],
  providers: [
    RciudadanoServicesService,
    RegisterFuncionarioService,
    RegisterBachesService,
    GeneratePkCiudadanoService,
    GeneratePkBachesService,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
