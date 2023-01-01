import {Component, Input, OnInit} from '@angular/core';
import {ComponentModel} from "../../../../core/models/component.model";
import {InitService} from "../../../../core/services/init.service";
import {DeviceService} from "../../../../core/services/device.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-device-component-detail.page',
  templateUrl: './device-component-light-detail.page.component.html',
  styleUrls: ['./device-component-light-detail.page.component.scss']
})
export class DeviceComponentLightDetailPageComponent implements OnInit {
  @Input()
  brand?: string;
  @Input()
  deviceComponent: ComponentModel = {} as ComponentModel;
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

  constructor(private initService: InitService, private deviceService: DeviceService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // device id on parent
    this.route.parent?.params.subscribe(params => {
      this.deviceId = params[this.PARAM_ID_NAME];
      if(this.deviceId==""){
        console.warn("param " + this.PARAM_ID_NAME + "not found on " + this.route.toString())
      }
    });
    // component id on child
    this.route.params.subscribe(params => {
      this.deviceComponentId = params[this.PARAM_ID_NAME]
      if(this.deviceComponentId==""){
        console.warn("param " + this.PARAM_ID_NAME + "not found on " + this.route.toString())
      }
    })
  }

  // tabs functions
  setActiveTab(activeTab: number) {
    this.activeTab = activeTab;
  }


}
