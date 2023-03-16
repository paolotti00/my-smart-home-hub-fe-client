import {Component, Input, OnInit} from '@angular/core';
import {DeviceModel} from "../../../../core/models/device.model";
import {ViewDataSharingService} from "../../../../core/services/view.data.sharing.service";

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.page.component.html',
  styleUrls: ['./device-detail.page.component.scss']
})
export class DeviceDetailPageComponent implements OnInit{
  device: DeviceModel = {} as DeviceModel
  constructor(private viewDataSharingService:ViewDataSharingService) {}

  ngOnInit(): void {
    this.viewDataSharingService.currentDevice.subscribe(result => {
      this.device = result;
    })
    if(!this.device){
      console.warn("todo - get device from server - DeviceDetailPageComponent")
    }
  }
}
