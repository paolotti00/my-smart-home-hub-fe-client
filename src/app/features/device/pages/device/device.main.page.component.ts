import { Component } from '@angular/core';
import {DeviceModel} from "../../../../core/models/device.model";
import {ViewDataSharingService} from "../../../../core/services/view.data.sharing.service";
import {DeviceService} from "../../../../core/services/device.service";

@Component({
  selector: 'app-device.main.page',
  templateUrl: './device.main.page.component.html',
  styleUrls: ['./device.main.page.component.scss']
})
export class DeviceMainPageComponent {
  device!: DeviceModel
  constructor(private viewDataSharingService:ViewDataSharingService, private deviceService:DeviceService) {}

  ngOnInit(): void {
    this.device=this.viewDataSharingService.getCurrentDevice()
    if(!this.device){
      console.warn("todo - get device from server - DeviceMainPageComponent")
    }

    this.deviceService.getStatusUpdateFromWbSocket(this.device.id).subscribe(result=>{
      this.device.components = result.components; // todo
      this.viewDataSharingService.setCurrentDevice(this.device);
      console.log("todo - updated device " + this.device.id + "status from websocket")
    })
  }
}
