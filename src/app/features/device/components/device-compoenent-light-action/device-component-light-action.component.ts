import {Component, Input, OnInit} from '@angular/core';
import {GridListItemInputModel} from "../../../../core/models/gridListItemInput.model";
import {DeviceActionModel} from "../../../../core/models/deviceAction.model";
import {DeviceService} from "../../../../core/services/device.service";
import {IconsService} from "../../../../core/services/icons.service";
import {ComponentTypeEnum} from "../../../../core/enums/componentType.enum";

@Component({
  selector: 'app-device-component-light-action',
  templateUrl: './device-component-light-action.component.html',
  styleUrls: ['./device-component-light-action.component.scss']
})
export class DeviceComponentLightActionComponent implements OnInit {
  @Input()
  brand?: string;
  @Input()
  componentType?: ComponentTypeEnum;
  gridListItemInputList: GridListItemInputModel[] = []
  // to get from server
  deviceComponentActionList?: DeviceActionModel[];
  constructor(private deviceService: DeviceService, private iconService:IconsService) {
  }


  callAction(actionId: string) {
    console.log("CALLING " + actionId);
  }

  ngOnInit(): void {
    this.deviceService.getDeviceComponentAction(this.brand!, this.componentType!).subscribe(result => {
      this.deviceComponentActionList = result;
      // fill gridListItemInput
      this.deviceComponentActionList.forEach(deviceComponentAction => {
        let gridListItemInput: GridListItemInputModel = {} as GridListItemInputModel;
        gridListItemInput.icon = this.iconService.getLightComponentActionIcon(deviceComponentAction.id);
        gridListItemInput.label = deviceComponentAction.label;
        gridListItemInput.description = deviceComponentAction.description;
        gridListItemInput.id = deviceComponentAction.id;
        this.gridListItemInputList.push(gridListItemInput);
      })

    })
  }
}
