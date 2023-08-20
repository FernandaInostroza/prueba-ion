import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/shared/models/paciente.models';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  paciente: Paciente = {
    email: '',
    password: '',
    name: '',
    rut: '',
    age: 0,
    phone: '',
    sex: '',
    weight: 0,
    height: 0,
  };

  constructor(private consulta: PacienteService, private _storage: StorageService, private router: Router) { 
  const rut = 'rutpacienteloggeado'; //CAMBIAAAAAAAAAAAAAAR
    //areglaaaaaaaaaaaaar
    
    this.consulta.getUserPac(rut).then((response) => {
      this.paciente.email;
      //falta
    })

  }

  signOut(){
    this._storage.save('user' , null);
    this.router.navigate(['/login/sign-in']);
  }

}
