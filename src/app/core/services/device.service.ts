import {Injectable} from '@angular/core';
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeviceActionModel} from "../models/deviceAction.model";
import {ComponentTypeEnum} from "../enums/componentType.enum";
import {ComponentModel} from "../models/component.model";
import {deviceRoutesName} from "../constants/routes.names.constant";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private apiUrlUtilityService: ApiUrlUtilityService, private http: HttpClient) {
  }

  // add case in case of new component type
  getComponentValue(deviceComponent: ComponentModel):string {
    let value = ''
    switch (deviceComponent.type) {
      case ComponentTypeEnum.LIGHT:
        value = deviceComponent.workingStatus.out.intensity.value + ' ' + deviceComponent.workingStatus.out.intensity.unit
        break
      case ComponentTypeEnum.MIX:
        value = ''
        break
      case ComponentTypeEnum.SENSOR_TEMPERATURE:
        value = deviceComponent.workingStatus.in.temperature.value + ' ' + deviceComponent.workingStatus.in.temperature.unit
        break
      case ComponentTypeEnum.SENSOR_HUMIDITY:
        value = deviceComponent.workingStatus.in.humidity.value + ' ' + deviceComponent.workingStatus.in.humidity.unit
        break
      default:
        console.warn("" + deviceComponent.type + " is not supported. define it.")
    }
    return value;
  }
  // add case in case of new component type
  getRouteToComponentDetail(deviceComponentType: ComponentTypeEnum){
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
    return value;
  }

  // server calls
  getUserDevices(idUser: string): Observable<any> {
    return this.http.get<any>(this.apiUrlUtilityService.getGetDevicesUrl(idUser))
  }

  getDeviceAction(brand: string): Observable<DeviceActionModel[]> {
    return this.http.get<any>(this.apiUrlUtilityService.getGetDeviceActionUrl(brand))
  }

  getDeviceComponentAction(brand: string, componentType: ComponentTypeEnum): Observable<DeviceActionModel[]> {
    return this.http.get<any>(this.apiUrlUtilityService.getGetDeviceComponentActionUrl(brand, componentType))
  }
}
