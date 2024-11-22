import { Component } from '@angular/core';
import { personal } from 'src/app/Models/Personal';
import { personal2 } from 'src/app/Models/Personal2';
import { GetPersonalByOrdenServiceService } from 'src/app/services/GetPersonalByOrdenService.service';

@Component({
  selector: 'app-get-personal-component',
  templateUrl: './get-personal-component.component.html',
  styleUrls: ['./get-personal-component.component.css']
})
export class GetPersonalComponentComponent {

  personals :personal2[]=[];

  constructor(private getPersonalService :GetPersonalByOrdenServiceService){

  }

  ngOnInit(): void {
    this.loadPersonals();
  }

  loadPersonals(){
    this.getPersonalService.findAll().subscribe(
      (userData)=>{
        console.log(userData),
        this.personals=userData;
      }
    )
  }
}
