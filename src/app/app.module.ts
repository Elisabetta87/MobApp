import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {HomePage} from '../pages/home/home.page';
import {OfficePage} from '../pages/office/office.page';
import {ServicesPage} from "../pages/services/services.page";
import {PricingPage} from "../pages/pricing/pricing.page";
import {AgmCoreModule} from "angular2-google-maps/esm/core/core-module";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OfficePage,
    ServicesPage,
    PricingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJ2KN_uctN7_7YzB_1_DBhNVXgEb74D40'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OfficePage,
    ServicesPage,
    PricingPage
  ],
  providers: [
  ]
})
export class AppModule {}
