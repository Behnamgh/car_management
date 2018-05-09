import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items, DataProvider } from '../../providers/providers';
import { FuelListPage } from '../fuel-list/fuel-list';
import { ReportsPage } from '../reports/reports';
import { NotificaionrunnersPage } from '../notificaionrunners/notificaionrunners';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  datas: any = [];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public dataProvider: DataProvider) {
    this.currentItems = this.items.query();
    this.loadData();
  }
  loadData() {
    this.datas = this.dataProvider.loadDatas();
    console.log(this.datas);

  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidEnter() {
    console.log('enter');
  }
  ionViewDidLoad() {
    console.log('check');

  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addCar() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.dataProvider.addData('datas', item);
        this.loadData();
      }
      console.log(item);

    })
    addModal.present();
  }
  addPart(index) {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.dataProvider.addPart(index, item);
        this.loadData();
      }
      console.log(item);

    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  openPart(part) {
    // this.navCtrl.push('PartPage', {
    //   part: part
    // });

  }
  openFuelList(car) {
    this.navCtrl.push(FuelListPage, {
      car: car
    });
  }
  openNot() {
    this.navCtrl.push(NotificaionrunnersPage, {
      car: 1
    });
  }
  openReport(car) {
    this.navCtrl.push(ReportsPage, {
      car: car
    });
  }
}
