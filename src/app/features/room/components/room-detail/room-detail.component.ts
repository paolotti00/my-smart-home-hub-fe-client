import {Component, Input, SimpleChanges} from '@angular/core';
import {DeviceService} from "../../../../core/services/device.service";
import {DeviceModel} from "../../../../core/models/device.model";
import {RoomModel} from "../../../../core/models/room.model";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent {
  @Input()
  room: RoomModel = {} as RoomModel
  devices: DeviceModel[] = [];

  constructor(private deviceService: DeviceService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['room'] && !changes['room'].firstChange && this.room.id !== '') {
      this.deviceService.getRoomDevices(this.room.id).subscribe(result => {
        this.devices = result.data;
      });
    }
  }
}
