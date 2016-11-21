import {Component, Injectable} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';

@Component({
  selector: 'page-services',
  templateUrl: 'services.page.html'
})


@Injectable()
export class ServicesPage {



  constructor(public navCtrl: NavController, private http: Http) {}


  getLocationOffice() {
    //return this.http;
  }

}
