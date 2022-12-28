import { Injectable } from '@angular/core';
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeviceActionModel} from "../models/deviceAction.model";
import {ComponentTypeEnum} from "../enums/componentType.enum";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private apiUrlUtilityService:ApiUrlUtilityService, private http: HttpClient) { }

  getUserDevices(idUser: string): Observable<any> {
    return this.http.get<any>(this.apiUrlUtilityService.getGetDevicesUrl(idUser))
  }
  getDeviceAction(brand: string): Observable<DeviceActionModel[]> {
    return this.http.get<any>(this.apiUrlUtilityService.getGetDeviceActionUrl(brand))
  }
  getDeviceComponentAction(brand: string,componentType:ComponentTypeEnum): Observable<DeviceActionModel[]> {
    return this.http.get<any>(this.apiUrlUtilityService.getGetDeviceComponentActionUrl(brand,componentType))
  }
}
