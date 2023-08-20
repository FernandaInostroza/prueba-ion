import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearExpedientePageRoutingModule } from './crear-expediente-routing.module';

import { CrearExpedientePage } from './crear-expediente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearExpedientePageRoutingModule
  ],
  declarations: [CrearExpedientePage]
})
export class CrearExpedientePageModule {}
