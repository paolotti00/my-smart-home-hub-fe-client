import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiUrlUtilityService:ApiUrlUtilityService, private http: HttpClient) { }

  getUser(idUser: string): Observable<any> {
    return this.http.get<any>(this.apiUrlUtilityService.getGetUserUrl(idUser))
  }
}
