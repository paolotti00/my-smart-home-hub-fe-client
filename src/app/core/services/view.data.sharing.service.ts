import { Injectable } from '@angular/core';
import {DeviceModel} from "../models/device.model";

@Injectable({
  providedIn: 'root'
})
export class ViewDataSharingService {
  private _currentDevice: DeviceModel | undefined

  constructor() { }

  getCurrentDevice(): DeviceModel {
    return <DeviceModel>this._currentDevice;
  }

  setCurrentDevice(value: DeviceModel) {
    this._currentDevice = value;
  }
}
