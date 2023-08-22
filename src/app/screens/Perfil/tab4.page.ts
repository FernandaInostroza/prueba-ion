import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/shared/models/paciente.models';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { User, UserData, UserType } from 'src/app/shared/models/user.models';
import { MedicoService } from 'src/app/shared/services/medico.service';
import { Medico } from 'src/app/shared/models/medico.models';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  userData: UserData = { email: '', name: '' };
  user: User | null = null;

  constructor(private _pac: PacienteService, private _storage: StorageService, private router: Router, private _med: MedicoService) {

  }

  async ionViewWillEnter() {
    this.user = this._storage.load('user', null);

    if (this.user!.type === UserType.PACIENTE) {
      await this._pac.getUserPac(this.user!.rut).then((response) => {
        if (response?.ok) {
          const { name, email } = response.paciente;
          this.userData = { name, email };
        }
      });
    } else {
         await this._med.getUserMed(this.user!.rut).then((response) => {
          if (response?.ok) {
            const { name, email } = response.medico;
            this.userData = { name, email };
          }
        }); 
    }
  }

  signOut() {
    this._storage.save('user', null);
    this.router.navigate(['/login/sign-in']);
  }

}
