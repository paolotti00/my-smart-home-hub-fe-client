import {Component, HostBinding, Input} from '@angular/core';
import {DeviceModel} from "../../../../core/models/device.model";
import {ComponentTypeEnum} from "../../../../core/enums/componentType.enum";

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent {
  @Input()
  inListMode:boolean=false; // pass as true if you are using this component inside the device-list component
  @Input()
  device = {} as DeviceModel
  @Input()
  colSpan:number=1
  @HostBinding('class')
  public get getClass():string {
    return 'col-span-'+this.colSpan;
  }
  componentType_MIX = ComponentTypeEnum.MIX;
  componentType_LIGHT = ComponentTypeEnum.LIGHT;
  componentType_HEAT = ComponentTypeEnum.SENSOR_TEMPERATURE;
  componentType_HUMIDITY = ComponentTypeEnum.SENSOR_HUMIDITY;
}
