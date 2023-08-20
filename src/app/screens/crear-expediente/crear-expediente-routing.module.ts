import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearExpedientePage } from './crear-expediente.page';

const routes: Routes = [
  {
    path: '',
    component: CrearExpedientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearExpedientePageRoutingModule {}
