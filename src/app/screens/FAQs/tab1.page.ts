import { Component } from '@angular/core';
import { FAQ } from 'src/app/shared/models/faqs.models';
import { FaqsService } from 'src/app/shared/services/faqs.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  faqs: FAQ[] = [];

  constructor(private consulta: FaqsService) {
    this.consulta.getAllFaqs().then((response) => {
      this.faqs = response!.faqs;

      this.faqs = this.faqs.map((item) => ({...item, isCardExpanded: false}));
    });
  }

  toggleCard(index: number) {
    this.faqs = this.faqs.map((item) => ({...item, isCardExpanded: false}));
    this.faqs[index].isCardExpanded = true;
  }
}
