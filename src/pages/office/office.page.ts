import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';
import {HomePage} from "../home/home.page";



@Component({
  selector: 'page-office',
  templateUrl: 'office.page.html'
})
export class OfficePage {


  //ciao
  constructor(public nav: NavController) {
  }

  goBack() {
    this.nav.pop(HomePage);
  }
}
