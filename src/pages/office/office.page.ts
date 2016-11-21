import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {Geolocation} from "ionic-native/dist/es5/index";

import 'rxjs';


@Component({
  selector: 'page-office',
  templateUrl: 'office.page.html'
})
export class OfficePage {

  /*lat and lng office*/
  title: string = 'Office location';
  lat: number = 51.5269772;
  lng: number = -0.0905013;

  location: {lat: number, lng: number};


  constructor(public nav: NavController) {
  }


  getGeolocation() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.location = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }
    })

  }



}

