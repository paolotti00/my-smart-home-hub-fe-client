import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {dashboardRoutingModule} from "./dashboard.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {RoomModule} from "../room/room.module";
import {DeviceModule} from "../device/device.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RoomModule,
    DeviceModule,
    RouterModule.forChild(dashboardRoutingModule)
  ]
})
export class DashboardModule { }
