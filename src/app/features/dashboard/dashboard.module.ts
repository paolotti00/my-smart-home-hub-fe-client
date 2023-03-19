import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {dashboardRoutingModule} from "./dashboard.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {RoomModule} from "../room/room.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RoomModule,
    RouterModule.forChild(dashboardRoutingModule)
  ]
})
export class DashboardModule { }
