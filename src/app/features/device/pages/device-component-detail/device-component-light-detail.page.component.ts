import {Component, Input, OnInit} from '@angular/core';
import {ComponentModel} from "../../../../core/models/component.model";
import {InitService} from "../../../../core/services/init.service";
import {DeviceService} from "../../../../core/services/device.service";
import {DeviceActionModel} from "../../../../core/models/deviceAction.model";
import {GridListItemInputModel} from "../../../../core/models/gridListItemInput.model";

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
  // tabs
  TAB_DEFAULT = 1
  TAB_WHITE = 2
  TAB_COLOR = 3
  activeTab = this.TAB_DEFAULT
  gridListItemInputList: GridListItemInputModel[] = []
  // got from server
  deviceComponentActionList?: DeviceActionModel[];

  constructor(private initService: InitService, private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.deviceService.getDeviceComponentAction(this.brand!, this.deviceComponent.type).subscribe(result => {
      this.deviceComponentActionList = result;
      // fill gridListItemInput
      this.deviceComponentActionList.forEach(deviceComponentAction => {
        let gridListItemInput: GridListItemInputModel = {} as GridListItemInputModel;
        gridListItemInput.icon = deviceComponentAction.icon;
        gridListItemInput.label = deviceComponentAction.label;
        gridListItemInput.description = deviceComponentAction.description;
        gridListItemInput.id = deviceComponentAction.id;
        this.gridListItemInputList.push(gridListItemInput);
      })

    })
  }

  // tabs functions
  setActiveTab(activeTab: number) {
    this.activeTab = activeTab;
  }


}
