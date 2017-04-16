import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

// Pages
import { EmailCaptureComponent } from "./onboarding/email-capture.component";
import { OnBoardingComponent } from './onboarding/onboarding.component';
import { PaymentDetailComponent } from "./payment/payment-detail/payment-detail.component";
import { PaymentListComponent } from "./payment/payment-list/payment-list.component";
import { ProgramsComponent } from "./programs/programs.component";

// Services
import { OnBoardingService } from "./onboarding/onboarding.service";
import { UserService } from "./core/user.service";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EmailCaptureComponent,
    OnBoardingComponent,
    PaymentDetailComponent,
    PaymentListComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EmailCaptureComponent,
    OnBoardingComponent,
    PaymentDetailComponent,
    PaymentListComponent,
    ProgramsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    OnBoardingService,UserService
  ]
})
export class AppModule { }
