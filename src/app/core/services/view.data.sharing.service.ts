import { Injectable } from '@angular/core';
import { DeviceModel } from "../models/device.model";
import { BehaviorSubject } from "rxjs";
import { DeviceService } from "./device.service";
import {RoomModel} from "../models/room.model";
import {RoomServiceService} from "./room.service.service";

@Injectable({
  providedIn: 'root'
})
export class ViewDataSharingService {
  // device
  // Create a new BehaviorSubject to store the current device
  currentDeviceSubject = new BehaviorSubject<DeviceModel>({} as DeviceModel);
  // Convert the BehaviorSubject to an Observable that can be subscribed to
  currentDevice = this.currentDeviceSubject.asObservable();
  // room
  currentRoomSubject = new BehaviorSubject<RoomModel>({} as RoomModel);
  // Convert the BehaviorSubject to an Observable that can be subscribed to
  currentRoom = this.currentRoomSubject.asObservable();


  constructor(private deviceService: DeviceService, private  roomService: RoomServiceService) { }

  // Set the current device and subscribe to update using the WebSocket
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
  // Set the current room and subscribe to update using the WebSocket
  setCurrentRoom(value: RoomModel) {
    // Set the current room to the passed-in value
    this.currentRoomSubject.next(value);
  }
}
