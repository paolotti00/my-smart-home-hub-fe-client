import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './components/room/rooms-list/rooms-list.component';
import { RoomItemComponent } from './components/room/room-item/room-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DeviceItemComponent } from './components/device/device-item/device-item.component';
import { DevicesListComponent } from './components/device/devices-list/devices-list.component';



@NgModule({
  declarations: [
    RoomsListComponent,
    RoomItemComponent,
    DeviceItemComponent,
    DevicesListComponent
  ],
  exports: [
    RoomsListComponent,
    DevicesListComponent
  ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ]
})
export class SharedModule { }