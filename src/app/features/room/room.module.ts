import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';
import {SharedModule} from "../../shared/shared.module";
import {DeviceModule} from "../device/device.module";
import { MeasurementsSummaryComponent } from './components/measurements-summary/measurements-summary.component';



@NgModule({
  declarations: [
    RoomsListComponent,
    RoomDetailComponent,
    MeasurementsSummaryComponent
  ],
  exports: [
    RoomsListComponent,
    RoomDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DeviceModule
  ]
})
export class RoomModule { }
