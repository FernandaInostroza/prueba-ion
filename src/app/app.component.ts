import { Component } from '@angular/core';
import { StorageService } from './shared/services/storage.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: StorageService) {
    //this.storage.save('user', {rut: '12345678-9', type: 'PACIENTE'})
    //this.storage.save('user', {rut: '12345678-9', type: 'MEDICO'})
  }
}
