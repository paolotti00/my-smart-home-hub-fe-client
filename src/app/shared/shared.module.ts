import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './components/room/rooms-list/rooms-list.component';
import { RoomItemComponent } from './components/room/room-item/room-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DeviceItemComponent } from './components/device/device-item/device-item.component';
import { DevicesListComponent } from './components/device/devices-list/devices-list.component';
import { DeviceComponentComponent } from './components/device/device-component/device-component.component';
import { NameComponent } from './components/name/name.component';
import { GridListComponent } from './components/grid-list/grid-list.component';



@NgModule({
  declarations: [
    RoomsListComponent,
    RoomItemComponent,
    DeviceItemComponent,
    DevicesListComponent,
    DeviceComponentComponent,
    NameComponent,
    GridListComponent,
  ],
    exports: [
        RoomsListComponent,
        DevicesListComponent,
        NameComponent,
        GridListComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ]
})
export class SharedModule { }
