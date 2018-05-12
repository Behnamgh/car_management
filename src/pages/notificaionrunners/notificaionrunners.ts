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
  notifications = [];

  data = { title: '', description: '', date: Date.now() };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localNotifications: LocalNotifications,
    public platform: Platform,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NotificaionrunnersPage');
  }
  submit() {
    var date = new Date(this.data.date);
    let now = new Date().getTime();
    let target = new Date(now + 36000)
    // console.log(this.data);
    // console.log(date);
    let notification = {
      id: this.notifications.length + 1,
      title: 'Hey!1',
      text: 'You just got notified :)' + date,
      at: date
    };
    this.notifications.push(notification);
    let notification1 = {
      id: this.notifications.length + 1,
      title: 'Hey!2',
      text: 'You just got notified :)' + target,
      at: target
    };
    this.notifications.push(notification1);
    if (this.platform.is('cordova')) {

      // Cancel any existing notifications
      this.localNotifications.cancelAll().then(() => {

        // Schedule the new notifications
        this.localNotifications.schedule(this.notifications);
        // console.log(this.notifications);

        this.notifications = [];

        let alert = this.alertCtrl.create({
          title: 'Notifications set',
          subTitle: date.toString() + moment(date).diff(now, "seconds") + 'S-' + target.toString() + moment(target).diff(now, "s") + 's',
          buttons: ['Ok']
        });
        alert.present();

      });

    }
    // this.localNotifications.schedule({
    //   text: 'Delayed ILocalNotification',
    //   trigger: { at: date },
    //   every: 'week',
    //   led: 'FF0000',
    //   sound: this.setSound(),
    // });
    // let alert = this.alertCtrl.create({
    //   title: 'Congratulation!',
    //   buttons: ['OK', 'bashe']
    // });
    // alert.present();
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
