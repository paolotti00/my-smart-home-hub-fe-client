import {Component, Input, SimpleChanges} from '@angular/core';
import {DeviceService} from "../../../../core/services/device.service";
import {DeviceModel} from "../../../../core/models/device.model";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent {
  @Input()
  roomId: string = ""
  devices: DeviceModel[] = [];

  constructor(private deviceService: DeviceService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['roomId'] && !changes['roomId'].firstChange && this.roomId !== '') {
      this.deviceService.getRoomDevices(this.roomId).subscribe(result => {
        this.devices = result.data;
      });
    }
  }
}
