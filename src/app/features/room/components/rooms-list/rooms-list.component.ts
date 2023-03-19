import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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
export class RoomsListComponent implements OnInit, OnChanges{
  @Input()
  userId: string = ""
  @Output()
  selectedRoomIdEventEmitter = new EventEmitter<string>();
  selectedRoom: string = ""
  rooms: RoomModel[] = []
  faKitchenSet=faKitchenSet;
  faBed=faDoorClosed ;
  constructor(private roomServiceService: RoomServiceService) {
  }
  ngOnInit(): void {
    if(this.userId!==''){
      this.getRoomsFromServer(this.userId)
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['userId'] && !changes['userId'].firstChange && this.userId !== '') {
      this.getRoomsFromServer(this.userId);
    }
  }
  onSelectRoom(roomId: string) {
    this.selectedRoom = roomId;
    this.selectedRoomIdEventEmitter.emit(roomId);
  }
  getRoomsFromServer(userId: string){
    this.roomServiceService.getRoomsByUser(this.userId).subscribe(result => {
      this.rooms = result.data;
      if(this.rooms.length>0){
        // setting the first one as default
        this.selectedRoom = this.rooms[0].id;
        this.selectedRoomIdEventEmitter.emit(this.rooms[0].id);
      }
    });
  }

}
