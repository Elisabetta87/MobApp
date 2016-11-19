import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-services',
  templateUrl: 'services.page.html'
})
export class ServicesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ServicesPage Page');
  }

}
