import {Component, Input, OnInit} from '@angular/core';
import {ComponentModel} from "../../../../core/models/component.model";
import {InitService} from "../../../../core/services/init.service";
import {DeviceService} from "../../../../core/services/device.service";
import {DeviceActionModel} from "../../../../core/models/deviceAction.model";
import {GridListItemInputModel} from "../../../../core/models/gridListItemInput.model";
import {IconsService} from "../../../../core/services/icons.service";

@Component({
  selector: 'app-device-component-detail.page',
  templateUrl: './device-component-light-detail.page.component.html',
  styleUrls: ['./device-component-light-detail.page.component.scss']
})
export class DeviceComponentLightDetailPageComponent {
  @Input()
  brand?: string;
  @Input()
  deviceComponent: ComponentModel = {} as ComponentModel;
  // tabs
  TAB_ACTION = 1
  TAB_WHITE = 2
  TAB_COLOR = 3
  activeTab = this.TAB_ACTION

  constructor(private initService: InitService) {
  }

  // tabs functions
  setActiveTab(activeTab: number) {
    this.activeTab = activeTab;
  }


}
