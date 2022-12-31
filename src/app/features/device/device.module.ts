import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponentLightDetailPageComponent } from './pages/device-component-detail-light/device-component-light-detail.page.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {deviceRoutingModule} from "./device.routing.module";
import {DeviceDetailPageComponent} from "./pages/device-detail/device-detail.page.component";
import { DeviceComponentLightActionComponent } from './components/device-component-light-action/device-component-light-action.component';



@NgModule({
  declarations: [
    DeviceComponentLightDetailPageComponent,
    DeviceDetailPageComponent,
    DeviceComponentLightActionComponent
  ],
  imports: [
    RouterModule.forChild(deviceRoutingModule),
    SharedModule,
    CommonModule
  ]
})
export class DeviceModule { }
