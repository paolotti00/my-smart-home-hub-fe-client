import { Injectable } from '@angular/core';
import {serverConstants} from "../constants/server.constants";
import {SensorTypeEnum} from "../enums/sensorType.enum";
import {OnOffStatusEnum} from "../enums/onOffStatus.enum";

@Injectable({
  providedIn: 'root'
})
export class ApiUrlUtilityService {
  getUserUrlIsMock=true;
  getGetDevicesUrlIsMock=false;
  getGetDeviceActionUrlIsMock=true;
  getGetDeviceComponentActionIsMock=true;
  getPutDeviceSetColorUrlIsMock=false;
  getPutDeviceDoActionIsMock=false;
  getWebSocketUpdateStatusTopicUrlIsMock=false;
  getGetRoomDevicesUrlIsMock = false;
  getGetUserRoomsUrlIsMock = false;
  getPutDeviceSwitchLightIsMock = false;

  constructor() { }
  getGetUserUrl(idUser:string){
    let url:string;
    let baseUrl=this.getUserUrlIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/users/'+idUser;
    if(this.getUserUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getGetUserDevicesUrl(idUser:string){
    let url:string;
    let baseUrl=this.getGetDevicesUrlIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/users/'+idUser+'/devices/';
    if(this.getGetDevicesUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getGetUserRoomsUrl(idUser:string){
    let url:string;
    let baseUrl=this.getGetUserRoomsUrlIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/users/'+idUser+'/rooms/';
    if(this.getGetUserRoomsUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getGetRoomDevicesUrl(idUser:string){
    let url:string;
    let baseUrl=this.getGetRoomDevicesUrlIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/rooms/'+idUser+'/devices/';
    if(this.getGetRoomDevicesUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getGetDeviceActionUrl(brand:string){
    let url:string;
    let baseUrl=this.getGetDeviceActionUrlIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/devices/action/brand/'+brand+'/';
    if(this.getGetDeviceActionUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getGetDeviceComponentActionUrl(brand:string,componentType:SensorTypeEnum){
    let url:string;
    let baseUrl=this.getGetDeviceComponentActionIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/devices/action/brand/'+brand+'/'+'component/'+componentType+'/';
    if(this.getGetDeviceComponentActionIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getPutDeviceSetColorUrl(deviceId:string){
    let url:string;
    let baseUrl=this.getPutDeviceSetColorUrlIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/devices/'+deviceId+'/set/color';
    if(this.getPutDeviceSetColorUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }

  getPostDeviceDoAction(deviceId: string) {
    let url:string;
    let baseUrl=this.getPutDeviceDoActionIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/devices/'+deviceId+'/action';
    if(this.getPutDeviceDoActionIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }


  // web socket
  getWebSocketUpdateStatusTopicUrl(deviceId: string){
    let url:string;
    url = '/device/'+deviceId+'/status';
    return url;
  }

  getPutDeviceSwitchLight(deviceId: string, onOffStatusEnum: OnOffStatusEnum) {
    let url:string;
    let baseUrl=this.getPutDeviceSwitchLightIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/devices/'+deviceId+'/light/switch/'+onOffStatusEnum;
    if(this.getPutDeviceSwitchLightIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
}
