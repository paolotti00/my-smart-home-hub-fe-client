import { Component } from '@angular/core';
import {DeviceModel} from "../../../../core/models/device.model";
import {ViewDataSharingService} from "../../../../core/services/view.data.sharing.service";
import {DeviceService} from "../../../../core/services/device.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-device.main.page',
  templateUrl: './device.main.page.component.html',
  styleUrls: ['./device.main.page.component.scss']
})
export class DeviceMainPageComponent {
  device = {} as DeviceModel
  constructor(private viewDataSharingService:ViewDataSharingService, private deviceService:DeviceService) {}

  ngOnInit(): void {
    this.viewDataSharingService.currentDevice.subscribe(result => {
      this.device = result
    })
    if(!this.device){
      console.warn("todo - get device from server - DeviceMainPageComponent")
    }
  }
}
