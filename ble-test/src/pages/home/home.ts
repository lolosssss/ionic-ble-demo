import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public ble: BLE) {

  }

  startScan() {
    console.log('ble-test : startScan')
    this.ble.startScanWithOptions(["some-service-id"], { reportDuplicates: true }).subscribe((device) => {
      console.log('ble-test : find device - ' + JSON.stringify(device))
    })
  }

  stopScan() {
    this.ble.stopScan().then(() => {
      console.log('ble-test : stopScan')
    })
  }
}
