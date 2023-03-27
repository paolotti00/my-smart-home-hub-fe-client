import {Injectable} from '@angular/core';
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SensorTypeEnum} from "../enums/sensorType.enum";
import {BaseResponseDto} from "../models/baseResponseDto.model";
import {DeviceModel} from "../models/device.model";
import {ExtraActionModel} from "../models/extraAction.model";
import {WebSocketService} from "./websocket.service.ts.service";
import {OnOffStatusEnum} from "../enums/onOffStatus.enum";
import {SwitchOnOffStatusModel} from "../models/switchOnOffStatusModel";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private apiUrlUtilityService: ApiUrlUtilityService, private http: HttpClient, private webSocketService: WebSocketService) {
  }

  // server calls
  getUserDevices(idUser: string): Observable<BaseResponseDto<DeviceModel[]>> {
    return this.http.get<BaseResponseDto<DeviceModel[]>>(this.apiUrlUtilityService.getGetUserDevicesUrl(idUser))
  }
  getRoomDevices(idUser: string): Observable<BaseResponseDto<DeviceModel[]>> {
    return this.http.get<BaseResponseDto<DeviceModel[]>>(this.apiUrlUtilityService.getGetRoomDevicesUrl(idUser))
  }
  // call action on device
  deviceDoAction(deviceId: string, deviceAction:ExtraActionModel) : Observable<any>{
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
  // light switchOnOff
  deviceLightSwitch(deviceId: string, onOffStatusEnum:OnOffStatusEnum) : Observable<any>{
    let url = this.apiUrlUtilityService.getPutDeviceSwitchLight(deviceId,onOffStatusEnum);
    return this.http.put(url,undefined)
  }
  // web socket
  getStatusUpdateFromWebSocket(deviceId: string): Observable<any>{
    let topic = this.apiUrlUtilityService.getWebSocketUpdateStatusTopicUrl(deviceId)
    return this.webSocketService.connect(topic)
  }

}
