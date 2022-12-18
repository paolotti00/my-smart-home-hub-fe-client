import { Injectable } from '@angular/core';
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private apiUrlUtilityService:ApiUrlUtilityService, private http: HttpClient) { }

  getUserDevices(idUser: string): Observable<any> {
    return this.http.get<any>(this.apiUrlUtilityService.getGetDevicesUrl(idUser))
  }
}
