import {Component, Input, SimpleChanges} from '@angular/core';
import {DeviceService} from "../../../../core/services/device.service";
import {DeviceModel} from "../../../../core/models/device.model";
import {RoomModel} from "../../../../core/models/room.model";
import {Router} from "@angular/router";
import {RouteCustomService} from "../../../../core/services/route.custom.service";
import {ViewDataSharingService} from "../../../../core/services/view.data.sharing.service";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent {
  @Input()
  room: RoomModel = {} as RoomModel
  devices: DeviceModel[] = [];

  constructor(private deviceService: DeviceService, private router: Router, private routeCustomService:RouteCustomService, private viewDataSharingService:ViewDataSharingService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['room'] && !changes['room'].firstChange && this.room.id !== '') {
      this.deviceService.getRoomDevices(this.room.id).subscribe(result => {
        this.devices = result.data;
      });
    }
  }
  handleClickedOnMeasurement(){
    let routeTarget = this.routeCustomService.getRouteToRoomMeasurement(this.room.id)
    if(routeTarget){
      this.viewDataSharingService.setCurrentRoom(this.room)
      this.router.navigate([routeTarget])
    } else {
      console.warn("routeTarget is undefined")
    }
  }
}
