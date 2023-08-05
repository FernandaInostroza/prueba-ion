import { Component } from '@angular/core';
import { FAQ } from 'src/app/models/faqs.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  faqs: FAQ[] = [];
  isCardExpanded: boolean = false;

  constructor(private consulta: UserService) {
    this.consulta.getAllFaqs().then((response) => {
      this.faqs = <FAQ[]>response;

      console.log(response);
    });
  }

  toggleCard(faq: FAQ) {
    this.isCardExpanded = !this.isCardExpanded;
  }
}
