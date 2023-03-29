import { Injectable } from '@angular/core';
import {SensorTypeEnum} from "../enums/sensorType.enum";
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
  getRouteToSensorDetail(deviceComponentType: SensorTypeEnum, deviceId:string, componentId:string){
    let value = undefined
    switch (deviceComponentType) {
      case SensorTypeEnum.LIGHT:
        value = (deviceRoutesName.DEVICE_BASE_URL+'/'+deviceRoutesName.DEVICE_COMPONENT_LIGHT_DETAILS).replace(":id",deviceId) // todo make a general page?
        break
      case SensorTypeEnum.MIX:
        value = undefined
        break
      case SensorTypeEnum.TEMPERATURE:
        value = undefined
        break
      case SensorTypeEnum.HUMIDITY:
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
