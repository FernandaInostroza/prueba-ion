import { Component } from '@angular/core';
import { Expediente } from 'src/app/models/expediente.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  expedientes: Expediente [] = [];

  constructor(private exp: UserService) {
    this.exp.getExpedienteMed().then((response) => {
      this.expedientes = <Expediente[]>response;

      console.log(response);
    })

  }

}
