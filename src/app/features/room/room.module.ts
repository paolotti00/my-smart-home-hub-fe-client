import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';
import {SharedModule} from "../../shared/shared.module";
import { MeasurementsSummaryComponent } from './components/measurements-summary/measurements-summary.component';
import { RoomMeasurementsPageComponent } from './pages/room-measurements/room-measurements.page.component';
import { RoomMainPageComponent } from './pages/room-main/room-main.page.component';
import { RoomDetailPageComponent } from './pages/room-detail/room-detail.page.component';
import {RouterModule} from "@angular/router";
import {roomRoutingModule} from "./room.routing.module";
import {DeviceModule} from "../device/device.module";



@NgModule({
  declarations: [
    RoomsListComponent,
    RoomDetailComponent,
    MeasurementsSummaryComponent,
    RoomMeasurementsPageComponent,
    RoomMainPageComponent,
    RoomDetailPageComponent
  ],
  exports: [
    RoomsListComponent,
    RoomDetailComponent
  ],
  imports: [
    RouterModule.forChild(roomRoutingModule),
    CommonModule,
    SharedModule,
    DeviceModule
  ]
})
export class RoomModule { }
