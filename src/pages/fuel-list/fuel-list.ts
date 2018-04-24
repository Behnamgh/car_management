import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Items, DataProvider } from '../../providers/providers';
import { FuelCreatePage } from '../fuel-create/fuel-create';

/**
 * Generated class for the FuelListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fuel-list',
  templateUrl: 'fuel-list.html',
})
export class FuelListPage {
  carNumber: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataProvider: DataProvider) {
    this.carNumber = navParams.get('car');
    console.log(this.carNumber);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuelListPage');
    this.loadFuelList();
  }
  addFuel() {
    console.log(this.carNumber);
    let addFuel = this.modalCtrl.create(FuelCreatePage);
    addFuel.onDidDismiss(item => {
      if (item) {
        this.dataProvider.addFuel(this.carNumber, item);
        this.loadFuelList();
      }
      console.log(item);

    })
    addFuel.present();
  }
  loadFuelList() {
    this.dataProvider.getFuelList(this.carNumber);
  }

}
