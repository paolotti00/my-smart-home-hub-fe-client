import {Component, Input, OnInit} from '@angular/core';
import {GridListItemInputModel} from "../../../../../../core/models/gridListItemInput.model";
import {DeviceService} from "../../../../../../core/services/device.service";
import {IconsService} from "../../../../../../core/services/icons.service";
import {ExtraActionModel} from "../../../../../../core/models/extraAction.model";
import {SensorTypeEnum} from "../../../../../../core/enums/sensorType.enum";
import {FormBuilder, FormGroup} from "@angular/forms";

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
  configForm: FormGroup[] = {} as FormGroup[];
  // to get from server
  constructor(private deviceService: DeviceService, private iconService:IconsService, private fb: FormBuilder) {
  }


  callAction(actionIndex: number) {
    let action: ExtraActionModel = {} as ExtraActionModel;
    // let effectData: EffectDataModel = {} as EffectDataModel;
    // effectData.wait = "0.01";
    // effectData.rgbColors = [];
    // effectData.rgbColors.push("204, 51, 255");
    // effectData.rgbColors.push("255, 80, 80");
    action.name = this.actionList[actionIndex].name;
   // action.effect_data = effectData;
    console.warn("todo - effect data is stubbed")
    this.deviceService.deviceDoAction(this.deviceId,action).subscribe(result => {
      console.log("called action : " + action);
    })
  }

  ngOnInit(): void {
    this.actionList?.forEach((action, index) => {
      if(action.categories.includes(SensorTypeEnum.LIGHT)){
        let gridListItemInput: GridListItemInputModel = {} as GridListItemInputModel;
        gridListItemInput.icon = this.iconService.getLightComponentActionIcon(action.name);
        gridListItemInput.label = action.name;
        gridListItemInput.id = String(index)
        gridListItemInput.description = "description lorem ipsum todo";
        this.gridListItemInputList.push(gridListItemInput);
        // create form
        let formGroup : FormGroup = this.fb.group({});
        action.fields.forEach(field => {
          formGroup.addControl(field.name,this.fb.control(''))
        })
        this.configForm[index]=formGroup;
      }
    })
  }
}
