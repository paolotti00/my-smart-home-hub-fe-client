import {Component, OnInit} from '@angular/core';
import {DeviceService} from "../../core/services/device.service";
import {DeviceModel} from "../../core/models/device.model";
import {InitService} from "../../core/services/init.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  devices:DeviceModel[]=[];
  constructor(private initService:InitService,private deviceService:DeviceService) {
  }
  ngOnInit(): void {
    this.deviceService.getUserDevices(this.initService.sharedObject.currentUser.id).subscribe(result=>{
      this.devices=result;
    })
  }
}
