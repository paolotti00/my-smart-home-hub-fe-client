import { Injectable } from '@angular/core';
import { DeviceModel } from "../models/device.model";
import { BehaviorSubject } from "rxjs";
import { DeviceService } from "./device.service";

@Injectable({
  providedIn: 'root'
})
export class ViewDataSharingService {
  // Create a new BehaviorSubject to store the current device
  currentDeviceSubject = new BehaviorSubject<DeviceModel>({} as DeviceModel);
  // Convert the BehaviorSubject to an Observable that can be subscribed to
  currentDevice = this.currentDeviceSubject.asObservable();

  constructor(private deviceService: DeviceService) { }

  // Set the current device and subscribe to updates using the WebSocket
  setCurrentDevice(value: DeviceModel) {
    // Set the current device to the passed-in value
    this.currentDeviceSubject.next(value);
    // Subscribe to updates for this device using the WebSocket
    this.deviceService.getStatusUpdateFromWebSocket(value.id).subscribe(result => {
      // Update the current device with the new status from the WebSocket
      value.sensors = result.sensors; // todo
      value.leds = result.leds;
      this.currentDeviceSubject.next(value);
      console.log("todo - updated device " + result.id + "status from websocket")
    });
  }
}
