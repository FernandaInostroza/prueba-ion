import { Component } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
user:any;
//define modelo

  constructor(private storage: StorageService) {
    this.user = this.storage.load('user', null);
    console.log(this.user);
  }

}
