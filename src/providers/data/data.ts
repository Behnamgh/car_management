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

    let result = JSON.parse(localStorage.getItem(key));
    if (result) result.push(value);
    let data = result ? result : [value];
    localStorage.setItem(key, JSON.stringify(data));
  }
  loadDatas(key: string = 'datas') {
    return JSON.parse(localStorage.getItem(key));
  }
  loadCar(carNumber) {
    let result = JSON.parse(localStorage.getItem('datas'));
    return result[carNumber];
  }
  addPart(index, item) {
    let result = JSON.parse(localStorage.getItem('datas'));
    let parts = result[index].parts;
    if (parts) {
      parts.push(item);
    } else {
      parts = [item]
    }
    result[index].parts = parts;
    localStorage.setItem('datas', JSON.stringify(result));
  }
  loadFuel() {

  }
  addFuel(carNumber, item) {
    let result = JSON.parse(localStorage.getItem('datas'));
    let Fuels = result[carNumber].Fuels;
    if (Fuels) {
      Fuels.push(item);
    } else {
      Fuels = [item]
    }
    result[carNumber].Fuels = Fuels;
    console.log(Fuels, result)
    localStorage.setItem('datas', JSON.stringify(result));
  }
  getFuelList(carNumber) {
    let result = JSON.parse(localStorage.getItem('datas'));
    let list = result[carNumber].Fuels ? result[carNumber].Fuels : [];
    console.log(list);
    return list;
  }
  removeAllFuels(carNumber) {
    let result = JSON.parse(localStorage.getItem('datas'));
    let Fuels = result[carNumber].Fuels;
    if (Fuels) {
      Fuels = [];
    }
    result[carNumber].Fuels = Fuels;
    console.log(Fuels, result)
    localStorage.setItem('datas', JSON.stringify(result));
  }
  getMaxKm(carNumber) {
    let list = this.getFuelList(carNumber);
    console.log(list.length);

    return list.length ? Math.max(...list.map(fuel => parseInt(fuel.kilometre))) : 0;
  }
  deleteFuel(carNumber, fuelNumber) {
    let result = JSON.parse(localStorage.getItem('datas'));
    let Fuels = result[carNumber].Fuels;
    Fuels.splice(fuelNumber, 1);
    result[carNumber].Fuels = Fuels;
    console.log(Fuels, result)
    localStorage.setItem('datas', JSON.stringify(result));
  }
  favoriteFuel(carNumber, fuelNumber) {
    let result = JSON.parse(localStorage.getItem('datas'));
    let Fuels = result[carNumber].Fuels;
    Fuels[fuelNumber]['favorite'] = 'true';
    result[carNumber].Fuels = Fuels;
    console.log(Fuels, result)
    localStorage.setItem('datas', JSON.stringify(result));
  }

}
