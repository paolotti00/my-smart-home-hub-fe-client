import { Injectable } from '@angular/core';
import {ComponentTypeEnum} from "../enums/componentType.enum";
import {deviceRoutesName} from "../constants/routes.names.constant";

@Injectable({
  providedIn: 'root'
})
export class RouteCustomService {

  constructor() { }
  // device routing
  getRouteToDeviceDetail(deviceId:string){
    return (deviceRoutesName.DEVICE_BASE_URL+'/'+deviceRoutesName.DEVICE_DETAIL).replace(":id",deviceId)
  }
  // add case in case of new component type
  getRouteToComponentDetail(deviceComponentType: ComponentTypeEnum,deviceId:string,componentId:string){
    let value = undefined
    switch (deviceComponentType) {
      case ComponentTypeEnum.LIGHT:
        value = deviceRoutesName.DEVICE_BASE_URL+'/'+deviceRoutesName.DEVICE_COMPONENT_LIGHT_DETAILS
        break
      case ComponentTypeEnum.MIX:
        value = undefined
        break
      case ComponentTypeEnum.SENSOR_TEMPERATURE:
        value = undefined
        break
      case ComponentTypeEnum.SENSOR_HUMIDITY:
        value = undefined
        break
      default:
        console.warn("routing to " + deviceComponentType + " detail is not yet supported. define it.")
    }
    // replace parameters
    if(value){
      value = value.replace(":id",deviceId)
      value = value.replace(":id",componentId)
    }
    return value;
  }
}
