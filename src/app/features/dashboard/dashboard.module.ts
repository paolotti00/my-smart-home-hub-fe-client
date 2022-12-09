import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {dashboardRoutingModule} from "./dashboard.routing.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(dashboardRoutingModule)
  ]
})
export class DashboardModule { }
