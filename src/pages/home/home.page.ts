import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {OfficePage} from "../office/office.page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  constructor(private nav: NavController) {

  }

  gotoOffice() {
    this.nav.push(OfficePage);
  }

}
