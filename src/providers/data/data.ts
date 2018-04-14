import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {

  }
  setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    // this.storage.set(key, value);
  }
  addData(key, value) {
    localStorage.getItem(key);
    let result = JSON.parse(localStorage.getItem(key));
    result.push(value);
    localStorage.setItem(key, JSON.stringify(result));
    // this.storage.get(key).then((result) => {
    //   result.push(value);s
    //   this.storage.set(key, result);
    // });
  }
  loadCars(key: string = 'datas') {
    return JSON.parse(localStorage.getItem(key));
    // return this.storage.get(key);

  }
  loadFuel() {

  }

}
