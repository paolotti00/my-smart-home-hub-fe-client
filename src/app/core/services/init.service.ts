import { Injectable } from '@angular/core';
import {SharedObjectModel} from "../models/sharedObject.model";
import {ApiUrlUtilityService} from "./api-url-utility.service";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class InitService {
  appInitialized=false;
  sharedObject = new BehaviorSubject<SharedObjectModel>({} as SharedObjectModel);

  constructor(private http: HttpClient,private apiUrlUtilityService:ApiUrlUtilityService,private userService:UserService) { }

  initApp(idUser: string){
    console.log("getting shared object")
    this.initSharedObject(idUser).subscribe(result => {
      if(result){
        this.sharedObject.next(result);
      }
      this.appInitialized=true;
      console.log("app initialized. shared object created")
    })
  }
  initSharedObject(idUser: string): Observable<SharedObjectModel> {
    return new Observable<SharedObjectModel>(observe => {
      if (this.appInitialized){
        observe.complete();
      }else{
        let tempSharedObject = {} as SharedObjectModel;
         this.userService.getUser(idUser).subscribe(result => {
           tempSharedObject.isInitialized=true;
           tempSharedObject.currentUser = result;
           observe.next(tempSharedObject)
        })
      }
    })
  }
  getSharedObject():Observable<SharedObjectModel>{
    return new Observable<SharedObjectModel>(observe=>{
      this.sharedObject.subscribe(result=>{
        observe.next(result)
      })
    })
  }
}
