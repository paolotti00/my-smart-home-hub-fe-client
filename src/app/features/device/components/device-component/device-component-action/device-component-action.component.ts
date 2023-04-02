import {Component, Input, OnInit} from '@angular/core';
import {GridListItemInputModel} from "../../../../../core/models/gridListItemInput.model";
import {DeviceService} from "../../../../../core/services/device.service";
import {IconsService} from "../../../../../core/services/icons.service";
import {ExtraActionModel} from "../../../../../core/models/extraAction.model";
import {SensorTypeEnum} from "../../../../../core/enums/sensorType.enum";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FieldModel} from "../../../../../core/models/field.model";
import {HtmlService} from "../../../../../core/services/html.service";

@Component({
  selector: 'app-device-component-action',
  templateUrl: './device-component-action.component.html',
  styleUrls: ['./device-component-action.component.scss']
})
export class DeviceComponentActionComponent implements OnInit {
  @Input()
  deviceId:string = ""
  @Input()
  actionList: ExtraActionModel[] = [];
  gridListItemInputList: GridListItemInputModel[] = []
  configForm: FormGroup[] = {} as FormGroup[];
  selectedItem=-1
  // to get from server
  constructor(private deviceService: DeviceService, private iconService:IconsService, private fb: FormBuilder, public htmlService: HtmlService) {
  }


  callAction(actionIndex: number) {
    let action: ExtraActionModel = {} as ExtraActionModel;
    // let effectData: EffectDataModel = {} as EffectDataModel;
    // effectData.wait = "0.01";
    // effectData.rgbColors = [];
    // effectData.rgbColors.push("204, 51, 255");
    // effectData.rgbColors.push("255, 80, 80");
    this.selectedItem=actionIndex
    action = this.actionList[actionIndex];
    action.fields.forEach(field =>{
      if(this.configForm[actionIndex].get(field.name)!=null && this.configForm[actionIndex].get(field.name)!=undefined){
        field.value=this.htmlService.getConvertedValueByFieldType(field.type,this.configForm[actionIndex].get(field.name)!.value)
      }
    })
    console.log("calling action " + JSON.stringify(action))
    this.deviceService.deviceDoAction(this.deviceId,action).subscribe(result => {
      console.log("called action : " + JSON.stringify(action));
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
