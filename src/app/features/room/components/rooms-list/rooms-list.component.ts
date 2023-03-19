import {Component, Input, SimpleChanges} from '@angular/core';
import {faDoorClosed, faKitchenSet} from "@fortawesome/free-solid-svg-icons";
import {DeviceService} from "../../../../core/services/device.service";
import {DeviceModel} from "../../../../core/models/device.model";
import {RoomServiceService} from "../../../../core/services/room.service.service";
import {RoomModel} from "../../../../core/models/room.model";

@Component({
  selector: 'app-room-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  @Input()
  userId: string = ""
  rooms: RoomModel[] = []
  faKitchenSet=faKitchenSet;
  faBed=faDoorClosed ;
  constructor(private roomServiceService: RoomServiceService) {
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['userId'] && !changes['userId'].firstChange && this.userId !== '') {
      this.roomServiceService.getRoomsByUser(this.userId).subscribe(result => {
        this.rooms = result.data;
      });
    }
  }

}
