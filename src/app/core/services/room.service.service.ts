import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BaseResponseDto} from "../models/baseResponseDto.model";
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {WebSocketService} from "./websocket.service.ts.service";
import {RoomModel} from "../models/room.model";

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor(private apiUrlUtilityService: ApiUrlUtilityService, private http: HttpClient, private webSocketService: WebSocketService) { }
  getRoomsByUser(idUser: string): Observable<BaseResponseDto<RoomModel[]>> {
    return this.http.get<BaseResponseDto<RoomModel[]>>(this.apiUrlUtilityService.getGetUserRoomsUrl(idUser))
  }
}
