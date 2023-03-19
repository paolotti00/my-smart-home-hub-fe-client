import {Component, OnInit} from '@angular/core';
import {DeviceService} from "../../core/services/device.service";
import {DeviceModel} from "../../core/models/device.model";
import {InitService} from "../../core/services/init.service";
import {SharedObjectModel} from "../../core/models/sharedObject.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  devices: DeviceModel[] = [];
  userId: string = ""
  sharedObject:SharedObjectModel = {} as SharedObjectModel;
  constructor(private initService: InitService, private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.initService.getSharedObject().subscribe(result => {
      if(result.isInitialized){
        this.sharedObject = result;
        this.userId = this.sharedObject.currentUser.id;
        this.deviceService.getUserDevices(this.sharedObject.currentUser.id).subscribe(result => {
          this.devices = result.data;
        })
      }
    })
  }
}
