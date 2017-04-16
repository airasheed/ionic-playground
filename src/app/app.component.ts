import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OnBoardingComponent } from "./onboarding/onboarding.component";
import { UserService } from "./core/user.service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = OnBoardingComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, userService: UserService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      userService.hasLoggedIn().then(data=>{
        if(data) this.rootPage = TabsPage;
      })
    });
  }
}
