import { Injectable } from '@angular/core';
import {serverConstants} from "../constants/server.constants";
import {OnOffStatusEnum} from "../enums/onOffStatus.enum";

@Injectable({
  providedIn: 'root'
})
export class ApiUrlUtilityService {
  mockAll=false;
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
  getGetRoomMeasurementsIsMock = false;

  constructor() { }
  getGetUserUrl(idUser:string){
    let url:string;
    let baseUrl=(this.mockAll || this.getUserUrlIsMock)?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/users/'+idUser;
    if(this.mockAll || this.getUserUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getGetUserDevicesUrl(idUser:string){
    let url:string;
    let baseUrl=(this.mockAll || this.getGetDevicesUrlIsMock)?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/users/'+idUser+'/devices/';
    if(this.mockAll || this.getGetDevicesUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getGetUserRoomsUrl(idUser:string){
    let url:string;
    let baseUrl=(this.mockAll || this.getGetUserRoomsUrlIsMock)?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/users/'+idUser+'/rooms/';
    if(this.mockAll || this.getGetUserRoomsUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getGetRoomDevicesUrl(idUser:string){
    let url:string;
    let baseUrl=(this.mockAll || this.getGetRoomDevicesUrlIsMock)?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/rooms/'+idUser+'/devices/';
    if(this.getGetRoomDevicesUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getGetDeviceActionUrl(brand:string){
    let url:string;
    let baseUrl=(this.mockAll || this.getGetDeviceActionUrlIsMock)?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/devices/action/brand/'+brand+'/';
    if(this.mockAll || this.getGetDeviceActionUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getPutDeviceSetColorUrl(deviceId:string){
    let url:string;
    let baseUrl=(this.mockAll || this.getPutDeviceSetColorUrlIsMock)?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/devices/'+deviceId+'/set/color';
    if(this.mockAll || this.getPutDeviceSetColorUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }

  getPostDeviceDoAction(deviceId: string) {
    let url:string;
    let baseUrl=(this.mockAll || this.getPutDeviceDoActionIsMock)?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/devices/'+deviceId+'/action';
    if(this.mockAll || this.getPutDeviceDoActionIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }

  getGetRoomMeasurementsUrl(roomId:string){
    let url:string;
    let baseUrl=(this.mockAll || this.getGetRoomMeasurementsIsMock)?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/rooms/'+roomId+'/measurements/';
    if(this.mockAll || this.getGetRoomMeasurementsIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }


  // web socket
  getWebSocketDeviceUpdateStatusTopicUrl(deviceId: string){
    let url:string;
    url = '/device/'+deviceId+'/status';
    return url;
  }
  getWebSocketRoomUpdateMeasurementTopicUrl(roomId: string){
    let url:string;
    url = '/room/'+roomId+'/measurement';
    return url;
  }

  getPutDeviceSwitchLight(deviceId: string, onOffStatusEnum: OnOffStatusEnum) {
    let url:string;
    let baseUrl=(this.mockAll || this.getPutDeviceSwitchLightIsMock)?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/devices/'+deviceId+'/light/switch/'+onOffStatusEnum;
    if(this.mockAll || this.getPutDeviceSwitchLightIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
}
