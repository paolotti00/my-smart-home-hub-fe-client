import { Injectable } from '@angular/core';
import {SharedObjectModel} from "../models/sharedObject.model";
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class InitService {
  appInitialized=false;
  sharedObject = {} as SharedObjectModel

  constructor(private http: HttpClient,private apiUrlUtilityService:ApiUrlUtilityService,private userService:UserService) { }

  initApp(idUser: string){
    console.log("getting shared object")
    this.getSharedObject(idUser).subscribe(result => {
      this.sharedObject = result;
      this.appInitialized=true;
      console.log("app initialized. shared object created")
    })
  }
  getSharedObject(idUser: string): Observable<SharedObjectModel> {
    console.log("4")
    return new Observable<SharedObjectModel>(observe => {
      console.log("5")
      if (this.appInitialized){
        console.log("3")
        observe.next(this.sharedObject);
      }else{
         this.userService.getUser(idUser).subscribe(result => {
           console.log("2")
           this.sharedObject.currentUser = result;
           observe.next(this.sharedObject)
        })
      }
    })
  }
}
