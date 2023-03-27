import { Injectable } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {ComponentIconsConstant, lightComponentActionIconsConstant} from "../constants/icons.constant";
import {SensorTypeEnum} from "../enums/sensorType.enum";

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  DEFAULT_KEY:string="default";

  getLightComponentActionIcon(actionName:string):IconDefinition{
    let icon:IconDefinition;
    icon = lightComponentActionIconsConstant[actionName]
    if(!icon){
      // key not exist setting a default
      icon = lightComponentActionIconsConstant[this.DEFAULT_KEY]
    }
    return icon;
  }

  getSensorIconByType(type:SensorTypeEnum){
    let icon:IconDefinition | undefined;
    icon = ComponentIconsConstant.get(type)
    if(!icon){
      // key not exist setting a default
      icon = lightComponentActionIconsConstant[SensorTypeEnum.MIX] // this is the default
    }
    return icon;
  }
}
