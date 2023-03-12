import { Injectable } from '@angular/core';
import {serverConstants} from "../constants/server.constants";
import {ComponentTypeEnum} from "../enums/componentType.enum";

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

  constructor() { }
  getGetUserUrl(idUser:string){
    let url:string;
    let baseUrl=this.getUserUrlIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/users/'+idUser;
    if(this.getUserUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
  getGetDevicesUrl(idUser:string){
    let url:string;
    let baseUrl=this.getGetDevicesUrlIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/users/'+idUser+'/devices/';
    if(this.getGetDevicesUrlIsMock){
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
  getGetDeviceComponentActionUrl(brand:string,componentType:ComponentTypeEnum){
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

  getPutDeviceDoAction(deviceId: string) {
    let url:string;
    let baseUrl=this.getPutDeviceDoActionIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/devices/'+deviceId+'/do/action';
    if(this.getPutDeviceDoActionIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
}
