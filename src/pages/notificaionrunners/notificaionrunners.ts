import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

import * as moment from 'jalali-moment';


/**
 * Generated class for the NotificaionrunnersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificaionrunners',
  templateUrl: 'notificaionrunners.html',
})
export class NotificaionrunnersPage {
  newDateObj = moment(new Date()).add(1, 'm').toDate();

  data = { title: '', description: '', date: Date.now() };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localNotifications: LocalNotifications,
    public platform: Platform,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificaionrunnersPage');
  }
  submit() {
    var date = new Date(this.data.date);
    let now = new Date().getTime();
    let target = new Date(now + 36000)
    console.log(this.data);
    console.log(date);

    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: { at: date },
      every: 'week',
      led: 'FF0000',
      sound: this.setSound(),
    });
    let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: moment(date).diff(new Date(), "seconds") + 'S-' + moment(date).diff(new Date(), "minutes") + 'M',
      buttons: ['OK', 'bashe']
    });
    alert.present();
    // this.data = { title: '', description: '', date: '', time: '' };
  }
  setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/Rooster.mp3'
    } else {
      return 'file://assets/sounds/Rooster.caf'
    }
  }
}
