import {Injectable} from '@angular/core';
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeviceActionModel} from "../models/deviceAction.model";
import {ComponentTypeEnum} from "../enums/componentType.enum";
import {ComponentModel} from "../models/component.model";
import {BaseResponseDto} from "../models/baseResponseDto.model";
import {DeviceModel} from "../models/device.model";

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
        value = "30 % todo"
        break
      case ComponentTypeEnum.MIX:
        value = ''
        break
      case ComponentTypeEnum.SENSOR_TEMPERATURE:
        value = "30  todo"
        break
      case ComponentTypeEnum.SENSOR_HUMIDITY:
        value = value = "30  todo"
        break
      default:
        console.warn("" + deviceComponent.type + " is not supported. define it.")
    }
    return value;
  }

  // server calls
  getUserDevices(idUser: string): Observable<BaseResponseDto<DeviceModel[]>> {
    return this.http.get<BaseResponseDto<DeviceModel[]>>(this.apiUrlUtilityService.getGetDevicesUrl(idUser))
  }

  getDeviceAction(brand: string): Observable<DeviceActionModel[]> {
    return this.http.get<any>(this.apiUrlUtilityService.getGetDeviceActionUrl(brand))
  }

  getDeviceComponentAction(brand: string, componentType: ComponentTypeEnum): Observable<DeviceActionModel[]> {
    return this.http.get<any>(this.apiUrlUtilityService.getGetDeviceComponentActionUrl(brand, componentType))
  }
}
