import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the FuelCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fuel-create',
  templateUrl: 'fuel-create.html',
})
export class FuelCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public dataProvider: DataProvider) {
    let MIN = dataProvider.getMaxKm(0) + 1;
    console.log(MIN);
    this.form = formBuilder.group({
      name: [''],
      location: [''],
      date: ['', Validators.required],
      Kilometre: ['', [Validators.min(MIN), Validators.required]]
    });
    this.form.valueChanges.subscribe((v) => {
      console.log(v, this.form);
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuelCreatePage');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    if (!this.form.valid) { return; };
    this.viewCtrl.dismiss(this.form.value);
  }
}
