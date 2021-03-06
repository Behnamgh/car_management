import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import { DataProvider } from '../providers/data/data';

import { FuelListPage } from '../pages/fuel-list/fuel-list';
import { FuelCreatePage } from '../pages/fuel-create/fuel-create';
import { ReportsPage } from '../pages/reports/reports';

import { ChartsModule } from 'ng2-charts';
import { JalaliPipe } from '../pipes/jalali/jalali';
import { MiladiPipe } from '../pipes/miladi/miladi';
import { ReportFilterPage } from '../pages/report-filter/report-filter';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Push } from '@ionic-native/push';
import { PartListPage } from '../pages/part-list/part-list';
import { PartRenewPage } from '../pages/part-renew/part-renew';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ListMasterPage } from '../pages/list-master/list-master';



// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    FuelListPage,
    FuelCreatePage,
    ReportsPage,
    ReportFilterPage,
    PartListPage,
    PartRenewPage,
    ItemCreatePage,
    ListMasterPage,
    SearchPage,
    SettingsPage,
    // TabsPage,
    TutorialPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FuelListPage,
    FuelCreatePage,
    ReportsPage,
    ReportFilterPage,
    PartListPage,
    PartRenewPage, 
    ItemCreatePage,
    ListMasterPage,
    SearchPage,
    SettingsPage,
    // TabsPage,
    TutorialPage
  ],
  providers: [
    Api,
    Items,
    Camera,
    SplashScreen,
    StatusBar,
    JalaliPipe,
    MiladiPipe,
    LocalNotifications,
    Push,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider
  ]
})
export class AppModule { }
