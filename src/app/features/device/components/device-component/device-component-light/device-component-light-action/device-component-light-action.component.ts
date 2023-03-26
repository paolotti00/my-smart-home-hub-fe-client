import {Component, Input, OnInit} from '@angular/core';
import {GridListItemInputModel} from "../../../../../../core/models/gridListItemInput.model";
import {DeviceActionModel} from "../../../../../../core/models/deviceAction.model";
import {DeviceService} from "../../../../../../core/services/device.service";
import {IconsService} from "../../../../../../core/services/icons.service";
import {ComponentTypeEnum} from "../../../../../../core/enums/componentType.enum";
import {ExtraActionModel} from "../../../../../../core/models/extraAction.model";
import {EffectDataModel} from "../../../../../../core/models/effectData.model";

@Component({
  selector: 'app-device-component-light-action',
  templateUrl: './device-component-light-action.component.html',
  styleUrls: ['./device-component-light-action.component.scss']
})
export class DeviceComponentLightActionComponent implements OnInit {
  @Input()
  deviceId:string = ""
  @Input()
  actionList: ExtraActionModel[] = [];
  gridListItemInputList: GridListItemInputModel[] = []
  // to get from server
  deviceComponentActionList?: DeviceActionModel[];
  constructor(private deviceService: DeviceService, private iconService:IconsService) {
  }


  callAction(actionIndex: number) {
    let action: ExtraActionModel = {} as ExtraActionModel;
    let effectData: EffectDataModel = {} as EffectDataModel;
    effectData.wait = "0.01";
    effectData.rgbColors = [];
    effectData.rgbColors.push("204, 51, 255");
    effectData.rgbColors.push("255, 80, 80");
    action.name = this.actionList[actionIndex].name;
    action.effect_data = effectData;
    console.warn("todo - effect data is stubbed")
    this.deviceService.deviceDoAction(this.deviceId,action).subscribe(result => {
      console.log("called action : " + action);
    })
  }

  ngOnInit(): void {
    this.actionList?.forEach((action, index) => {
      let gridListItemInput: GridListItemInputModel = {} as GridListItemInputModel;
      gridListItemInput.icon = this.iconService.getLightComponentActionIcon(action.name);
      gridListItemInput.label = action.name;
      gridListItemInput.id = String(index)
      gridListItemInput.description = "description lorem ipsum todo";
      this.gridListItemInputList.push(gridListItemInput);

    })
  }
}
