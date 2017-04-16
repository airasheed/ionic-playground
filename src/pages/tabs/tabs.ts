import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { ProgramsComponent } from "..app/programs/programs.component";
import { PaymentListComponent } from "../../app/payment/payment-list/payment-list.component";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProgramsComponent;
  tab2Root = PaymentListComponent;
  tab3Root = ContactPage;

  constructor() {

  }
}
