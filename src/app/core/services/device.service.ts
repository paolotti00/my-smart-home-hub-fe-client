import {Injectable} from '@angular/core';
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeviceActionModel} from "../models/deviceAction.model";
import {ComponentTypeEnum} from "../enums/componentType.enum";
import {ComponentModel} from "../models/component.model";
import {BaseResponseDto} from "../models/baseResponseDto.model";
import {DeviceModel} from "../models/device.model";
import {ActionModel} from "../models/action.model";
import {WebSocketService} from "./websocket.service.ts.service";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private apiUrlUtilityService: ApiUrlUtilityService, private http: HttpClient, private webSocketService: WebSocketService) {
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
    return this.http.get<BaseResponseDto<DeviceModel[]>>(this.apiUrlUtilityService.getGetUserDevicesUrl(idUser))
  }
  getRoomDevices(idUser: string): Observable<BaseResponseDto<DeviceModel[]>> {
    return this.http.get<BaseResponseDto<DeviceModel[]>>(this.apiUrlUtilityService.getGetUserDevicesUrl(idUser))
  }
  // call action on device
  deviceDoAction(deviceId: string, deviceAction:ActionModel) : Observable<any>{
    let url = this.apiUrlUtilityService.getPutDeviceDoAction(deviceId);
    let body = deviceAction
    return this.http.put(url,deviceAction)
  }
  // light //todo move to light service
  deviceSetColor(deviceId:string,colorToSet:string): Observable<any>{
    let url = this.apiUrlUtilityService.getPutDeviceSetColorUrl(deviceId)
    let matches = colorToSet.match(/\d+/g);
    let body:string=''
    if(matches){
      body = matches[0]+','+matches[1]+','+matches[2];
    }
    return this.http.put(url, body)
  }
  // web socket
  getStatusUpdateFromWebSocket(deviceId: string): Observable<any>{
    let topic = this.apiUrlUtilityService.getWebSocketUpdateStatusTopicUrl(deviceId)
    return this.webSocketService.connect(topic)
  }

}
