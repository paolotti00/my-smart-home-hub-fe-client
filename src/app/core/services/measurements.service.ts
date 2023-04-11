import { Injectable } from '@angular/core';
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {WebSocketService} from "./websocket.service.ts.service";
import {MeasurementModel} from "../models/measurementModel";
import {Observable} from "rxjs";
import {BaseResponseDto} from "../models/baseResponseDto.model";
import {RoomModel} from "../models/room.model";

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {
  constructor(private apiUrlUtilityService: ApiUrlUtilityService, private http: HttpClient, private webSocketService: WebSocketService) { }

  getMeasurementsByRoomId(roomId:string):  Observable<BaseResponseDto<MeasurementModel[]>>{
    return this.http.get<BaseResponseDto<MeasurementModel[]>>(this.apiUrlUtilityService.getGetRoomMeasurementsUrl(roomId))
  }
}
