import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pricing',
  templateUrl: 'pricing.page.html'
})
export class PricingPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PricingPage Page');
  }

}
