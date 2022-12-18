import { Injectable } from '@angular/core';
import {serverConstants} from "../constants/server.constants";

@Injectable({
  providedIn: 'root'
})
export class ApiUrlUtilityService {
  getUserUrlIsMock=true;

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
    let baseUrl=this.getUserUrlIsMock?serverConstants.SERVER_MOCKS_API_URL:serverConstants.SERVER_API_URL
    url = baseUrl + '/users/'+idUser+'/devices/';
    if(this.getUserUrlIsMock){
      console.warn(url+" is a mock!");
    } return url;
  }
}
