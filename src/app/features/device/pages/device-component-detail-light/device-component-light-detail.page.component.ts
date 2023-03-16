import {Component, Input, OnInit} from '@angular/core';
import {ComponentModel} from "../../../../core/models/component.model";
import {InitService} from "../../../../core/services/init.service";
import {DeviceService} from "../../../../core/services/device.service";
import {ActivatedRoute} from "@angular/router";
import {DeviceModel} from "../../../../core/models/device.model";
import {ViewDataSharingService} from "../../../../core/services/view.data.sharing.service";

@Component({
  selector: 'app-device-component-detail.page',
  templateUrl: './device-component-light-detail.page.component.html',
  styleUrls: ['./device-component-light-detail.page.component.scss']
})
export class DeviceComponentLightDetailPageComponent implements OnInit {
  @Input()
  device: DeviceModel = {} as DeviceModel
  // from routing
  deviceId: string ="";
  deviceComponentId:string="";
  // params name
  PARAM_ID_NAME="id"


  // tabs
  TAB_ACTION = 1
  TAB_WHITE = 2
  TAB_COLOR = 3
  activeTab = this.TAB_ACTION

  constructor(private initService: InitService, private deviceService: DeviceService, private viewDataSharingService: ViewDataSharingService) {
  }

  ngOnInit(): void {
    this.viewDataSharingService.currentDevice.subscribe(result => {
      this.device = result;
    })
    if(!this.device){
      console.warn("todo - get device from server - DeviceDetailPageComponent")
    }
    if(!this.device){
      console.warn("todo - get device from server - DeviceComponentLightDetailPageComponent")
    }
  }

  // tabs functions
  setActiveTab(activeTab: number) {
    this.activeTab = activeTab;
  }


}
