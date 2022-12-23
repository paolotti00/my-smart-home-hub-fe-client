import { Injectable } from '@angular/core';
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComponentTypeEnum} from "../models/enums/componentType.enum";
import {DeviceActionModel} from "../models/deviceAction.model";

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
